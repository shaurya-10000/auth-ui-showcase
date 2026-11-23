"use client";

import { useId } from "react";
import { RotateCcw } from "lucide-react";
import type { BrandFieldMeta } from "@/lib/brand/fields";
import type { BrandValue } from "@/lib/brand/types";

interface FieldProps {
  meta: BrandFieldMeta;
  value: BrandValue;
  defaultValue: BrandValue;
  onChange: (value: BrandValue) => void;
}

const PRESET_COLORS = ["#4f46e5", "#7c3aed", "#e11d48", "#ea580c", "#16a34a", "#0284c7", "#0f172a"];

const INPUT_CLASS =
  "w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-600 transition-colors focus:border-indigo-500 focus:outline-none";

const AUTO_SWATCH = "repeating-linear-gradient(45deg, #404040 0 4px, #262626 4px 8px)";

interface FieldHeaderProps {
  id: string;
  label: string;
  isChanged: boolean;
  onReset: () => void;
}

function FieldHeader({ id, label, isChanged, onReset }: FieldHeaderProps) {
  return (
    <div className="mb-1.5 flex items-center justify-between gap-2">
      <label htmlFor={id} className="block text-sm font-medium text-neutral-200">
        {label}
      </label>
      {isChanged && (
        <button
          type="button"
          onClick={onReset}
          aria-label={`Reset ${label}`}
          title="Reset to default"
          className="rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          <RotateCcw size={12} />
        </button>
      )}
    </div>
  );
}

function ToggleField({ meta, value, onChange }: FieldProps) {
  const checked = value === true;

  return (
    <div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-left text-sm text-white transition-colors hover:bg-neutral-800"
      >
        <span>{meta.label}</span>
        <span
          aria-hidden="true"
          className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-indigo-500" : "bg-neutral-700"}`}
        >
          <span
            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${checked ? "left-[1.125rem]" : "left-0.5"}`}
          />
        </span>
      </button>
      {meta.hint && <p className="mt-1.5 text-xs text-neutral-500">{meta.hint}</p>}
    </div>
  );
}

function ColorField({ meta, value, defaultValue, onChange }: FieldProps) {
  const id = useId();
  const color = typeof value === "string" ? value : "";
  const isAuto = color === "";
  const showPresets = meta.group === "Colors";

  return (
    <div>
      <FieldHeader
        id={id}
        label={meta.label}
        isChanged={value !== defaultValue}
        onReset={() => onChange(defaultValue)}
      />
      <div className="flex flex-wrap items-center gap-3">
        <div
          className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-neutral-700"
          style={isAuto ? { backgroundImage: AUTO_SWATCH } : undefined}
        >
          <input
            id={id}
            type="color"
            value={isAuto ? "#000000" : color}
            onChange={(event) => onChange(event.target.value)}
            className={`absolute -inset-2 h-14 w-14 cursor-pointer ${isAuto ? "opacity-0" : ""}`}
          />
        </div>
        <span className="font-mono text-xs text-neutral-400">{isAuto ? "Auto" : color}</span>
        {meta.optional && !isAuto && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="rounded-md border border-neutral-800 px-2 py-1 text-xs text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            Use auto
          </button>
        )}
        {showPresets && (
          <div className="flex gap-1.5">
            {PRESET_COLORS.map((preset) => (
              <button
                key={preset}
                type="button"
                aria-label={`Use ${preset}`}
                onClick={() => onChange(preset)}
                style={{ backgroundColor: preset }}
                className="h-6 w-6 rounded-full border border-white/20 transition-transform hover:scale-110"
              />
            ))}
          </div>
        )}
      </div>
      {meta.hint && <p className="mt-1.5 text-xs text-neutral-500">{meta.hint}</p>}
    </div>
  );
}

function SelectField({ meta, value, defaultValue, onChange }: FieldProps) {
  const id = useId();
  const selected = typeof value === "string" ? value : "";

  return (
    <div>
      <FieldHeader
        id={id}
        label={meta.label}
        isChanged={value !== defaultValue}
        onReset={() => onChange(defaultValue)}
      />
      <select
        id={id}
        value={selected}
        onChange={(event) => onChange(event.target.value)}
        className={INPUT_CLASS}
      >
        {meta.options?.map((option) => (
          <option key={option.value} value={option.value} className="bg-neutral-900">
            {option.label}
          </option>
        ))}
      </select>
      {meta.hint && <p className="mt-1.5 text-xs text-neutral-500">{meta.hint}</p>}
    </div>
  );
}

function RangeField({ meta, value, defaultValue, onChange }: FieldProps) {
  const id = useId();
  const min = meta.min ?? 0;
  const max = meta.max ?? 100;
  const parsed = Number(value);
  const current = Number.isFinite(parsed) ? parsed : Number(defaultValue) || min;

  return (
    <div>
      <FieldHeader
        id={id}
        label={meta.label}
        isChanged={value !== defaultValue}
        onReset={() => onChange(defaultValue)}
      />
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={meta.step ?? 1}
          value={current}
          onChange={(event) => onChange(event.target.value)}
          className="h-2 flex-1 cursor-pointer accent-indigo-500"
        />
        <span className="w-14 shrink-0 text-right font-mono text-xs text-neutral-400">
          {current}
          {meta.unit}
        </span>
      </div>
    </div>
  );
}

function TextField({ meta, value, defaultValue, onChange }: FieldProps) {
  const id = useId();
  const text = typeof value === "string" ? value : "";
  const placeholder = typeof defaultValue === "string" ? defaultValue : "";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-200">
        {meta.label}
      </label>
      {meta.type === "textarea" ? (
        <textarea
          id={id}
          rows={3}
          maxLength={320}
          value={text}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={`${INPUT_CLASS} resize-y`}
        />
      ) : (
        <input
          id={id}
          type="text"
          inputMode={meta.type === "url" ? "url" : undefined}
          maxLength={meta.type === "url" ? 500 : 120}
          value={text}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={INPUT_CLASS}
        />
      )}
      {meta.hint && <p className="mt-1.5 text-xs text-neutral-500">{meta.hint}</p>}
    </div>
  );
}

export function Field(props: FieldProps) {
  switch (props.meta.type) {
    case "toggle":
      return <ToggleField {...props} />;
    case "color":
      return <ColorField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "range":
      return <RangeField {...props} />;
    default:
      return <TextField {...props} />;
  }
}
