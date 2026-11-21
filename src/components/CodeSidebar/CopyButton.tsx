"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

type CopyState = "idle" | "copied" | "failed";

/** Fallback for browsers or contexts where the async clipboard API is unavailable. */
function legacyCopy(text: string): boolean {
  const previouslyFocused = document.activeElement as HTMLElement | null;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
    previouslyFocused?.focus();
  }
}

export function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    let succeeded = false;

    try {
      await navigator.clipboard.writeText(text);
      succeeded = true;
    } catch {
      succeeded = legacyCopy(text);
    }

    setState(succeeded ? "copied" : "failed");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setState("idle"), 2000);
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex shrink-0 items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:bg-neutral-800 hover:text-white"
    >
      {state === "copied" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : label}
      </span>
    </button>
  );
}
