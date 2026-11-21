"use client";

import { useCallback, useEffect, useState } from "react";
import type { TemplateFile } from "@/lib/template-source/types";

export type CodeStatus = "idle" | "loading" | "success" | "error";

interface CodeState {
  files: Record<string, TemplateFile[]>;
  errors: Record<string, string>;
}

const EMPTY_FILES: TemplateFile[] = [];

/** Loads a template's source files the first time the sidebar is opened for it. */
export function useTemplateCode(templateId: string, enabled: boolean) {
  const [state, setState] = useState<CodeState>({ files: {}, errors: {} });

  const cached = state.files[templateId];
  const error = state.errors[templateId];
  const shouldFetch = enabled && !cached && !error;

  useEffect(() => {
    if (!shouldFetch) return;

    const controller = new AbortController();

    fetch(`/api/code/${encodeURIComponent(templateId)}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(`request failed with status ${response.status}`);
        return (await response.json()) as { files: TemplateFile[] };
      })
      .then(({ files }) => {
        setState((prev) => ({ ...prev, files: { ...prev.files, [templateId]: files } }));
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        const message = err instanceof Error ? err.message : "unknown error";
        setState((prev) => ({ ...prev, errors: { ...prev.errors, [templateId]: message } }));
      });

    return () => controller.abort();
  }, [shouldFetch, templateId]);

  const retry = useCallback(() => {
    setState((prev) => {
      const errors = { ...prev.errors };
      delete errors[templateId];
      return { ...prev, errors };
    });
  }, [templateId]);

  const status: CodeStatus = cached ? "success" : error ? "error" : enabled ? "loading" : "idle";

  return { files: cached ?? EMPTY_FILES, status, error: error ?? null, retry };
}
