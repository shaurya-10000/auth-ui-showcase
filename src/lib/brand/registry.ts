import type { ComponentType } from "react";
import { Login as Template1Login, Signup as Template1Signup } from "@/templates/template-1";
import { Login as Template2Login, Signup as Template2Signup } from "@/templates/template-2";
import { Login as Template3Login, Signup as Template3Signup } from "@/templates/template-3";
import { Login as Template4Login, Signup as Template4Signup } from "@/templates/template-4";
import { Login as Template5Login, Signup as Template5Signup } from "@/templates/template-5";
import { Login as Template6Login, Signup as Template6Signup } from "@/templates/template-6";
import { Login as Template7Login, Signup as Template7Signup } from "@/templates/template-7";
import { Login as Template8Login, Signup as Template8Signup } from "@/templates/template-8";
import { Login as Template9Login, Signup as Template9Signup } from "@/templates/template-9";
import { Login as Template10Login, Signup as Template10Signup } from "@/templates/template-10";
import { Login as Template11Login, Signup as Template11Signup } from "@/templates/template-11";
import { Login as Template12Login, Signup as Template12Signup } from "@/templates/template-12";
import { Login as Template13Login, Signup as Template13Signup } from "@/templates/template-13";
import { Login as Template14Login, Signup as Template14Signup } from "@/templates/template-14";
import { Login as Template15Login, Signup as Template15Signup } from "@/templates/template-15";
import { Login as Template16Login, Signup as Template16Signup } from "@/templates/template-16";
import { Login as Template17Login, Signup as Template17Signup } from "@/templates/template-17";
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
  "template-6": pages(Template6Login, Template6Signup),
  "template-7": pages(Template7Login, Template7Signup),
  "template-8": pages(Template8Login, Template8Signup),
  "template-9": pages(Template9Login, Template9Signup),
  "template-10": pages(Template10Login, Template10Signup),
  "template-11": pages(Template11Login, Template11Signup),
  "template-12": pages(Template12Login, Template12Signup),
  "template-13": pages(Template13Login, Template13Signup),
  "template-14": pages(Template14Login, Template14Signup),
  "template-15": pages(Template15Login, Template15Signup),
  "template-16": pages(Template16Login, Template16Signup),
  "template-17": pages(Template17Login, Template17Signup),
};
