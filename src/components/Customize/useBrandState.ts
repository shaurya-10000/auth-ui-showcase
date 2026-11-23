"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { decodeBrand, encodeBrand } from "@/lib/brand/codec";
import { mergeBrand } from "@/lib/brand/merge";
import type { BrandValue, BrandValues } from "@/lib/brand/types";

const STORAGE_PREFIX = "authshowcase:brand:";

function readStored(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string): void {
  try {
    if (value) window.localStorage.setItem(key, value);
    else window.localStorage.removeItem(key);
  } catch {
    // Storage can be blocked (private mode, quota). The design still works through the URL.
  }
}

/**
 * Holds the raw form values (draft) and the validated values used by the preview and exports.
 * The customizations are mirrored into the page URL so the link can be shared or refreshed,
 * and the latest design per template is kept in localStorage.
 *
 * A ?brand= link always wins over saved values, and opening a link never overwrites the saved
 * design: saving only starts after the visitor makes a change.
 */
export function useBrandState(templateId: string, defaults: BrandValues, initialValues: BrandValues) {
  const storageKey = `${STORAGE_PREFIX}${templateId}`;
  const [draft, setDraft] = useState<BrandValues>(initialValues);
  const [startedFromLink] = useState(() => encodeBrand(defaults, initialValues) !== "");
  const hasEdited = useRef(false);

  const values = useMemo(() => mergeBrand(defaults, draft), [defaults, draft]);
  const brandParam = useMemo(() => encodeBrand(defaults, values), [defaults, values]);

  // Restore the saved design after hydration, so server and client markup match on first render.
  useEffect(() => {
    if (startedFromLink) return;

    const timeout = window.setTimeout(() => {
      const stored = readStored(storageKey);
      if (!stored || hasEdited.current) return;
      setDraft(mergeBrand(defaults, decodeBrand(stored)));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [defaults, startedFromLink, storageKey]);

  useEffect(() => {
    if (hasEdited.current) writeStored(storageKey, brandParam);
  }, [brandParam, storageKey]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const url = new URL(window.location.href);
      if (brandParam) url.searchParams.set("brand", brandParam);
      else url.searchParams.delete("brand");
      window.history.replaceState(window.history.state, "", url);
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [brandParam]);

  const setField = useCallback((key: string, value: BrandValue) => {
    hasEdited.current = true;
    setDraft((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => {
    hasEdited.current = true;
    setDraft(defaults);
  }, [defaults]);

  return { draft, values, brandParam, setField, reset, isModified: brandParam !== "" };
}
