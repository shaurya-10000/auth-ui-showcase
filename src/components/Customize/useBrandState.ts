"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { encodeBrand } from "@/lib/brand/codec";
import { mergeBrand } from "@/lib/brand/merge";
import type { BrandValue, BrandValues } from "@/lib/brand/types";

/**
 * Holds the raw form values (draft) and the validated values used by the preview and exports.
 * The customizations are mirrored into the page URL so the link can be shared or refreshed.
 */
export function useBrandState(defaults: BrandValues, initialValues: BrandValues) {
  const [draft, setDraft] = useState<BrandValues>(initialValues);

  const values = useMemo(() => mergeBrand(defaults, draft), [defaults, draft]);
  const brandParam = useMemo(() => encodeBrand(defaults, values), [defaults, values]);

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
    setDraft((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => setDraft(defaults), [defaults]);

  return { draft, values, brandParam, setField, reset, isModified: brandParam !== "" };
}
