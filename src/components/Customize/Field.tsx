"use client";

import { useId } from "react";
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

function ToggleField({ meta, value, onChange }: FieldProps) {
  const checked = value === true;

  return (
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
  );
}

function ColorField({ meta, value, onChange }: FieldProps) {
  const id = useId();
  const color = typeof value === "string" ? value : "#000000";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-200">
        {meta.label}
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-neutral-700">
          <input
            id={id}
            type="color"
            value={color}
            onChange={(event) => onChange(event.target.value)}
            className="absolute -inset-2 h-14 w-14 cursor-pointer"
          />
        </div>
        <span className="font-mono text-xs text-neutral-400">{color}</span>
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
  if (props.meta.type === "toggle") return <ToggleField {...props} />;
  if (props.meta.type === "color") return <ColorField {...props} />;
  return <TextField {...props} />;
}
