import type { ComponentType } from "react";
import { Login as Template1Login, Signup as Template1Signup } from "@/templates/template-1";
import { Login as Template2Login, Signup as Template2Signup } from "@/templates/template-2";
import { Login as Template3Login, Signup as Template3Signup } from "@/templates/template-3";
import { Login as Template4Login, Signup as Template4Signup } from "@/templates/template-4";
import { Login as Template5Login, Signup as Template5Signup } from "@/templates/template-5";
import type { BrandValues } from "./types";

export type BrandablePage = ComponentType<{ brand?: BrandValues }>;

export interface BrandablePages {
  Login: BrandablePage;
  Signup: BrandablePage;
}

// Each template types its own brand prop precisely; the registry treats them uniformly.
const pages = (Login: unknown, Signup: unknown): BrandablePages => ({
  Login: Login as BrandablePage,
  Signup: Signup as BrandablePage,
});

/** Client-side registry of live pages. Keep in sync with defaults.ts. */
export const brandablePages: Record<string, BrandablePages> = {
  "template-1": pages(Template1Login, Template1Signup),
  "template-2": pages(Template2Login, Template2Signup),
  "template-3": pages(Template3Login, Template3Signup),
  "template-4": pages(Template4Login, Template4Signup),
  "template-5": pages(Template5Login, Template5Signup),
};
