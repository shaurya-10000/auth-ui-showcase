import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the Nordic Frost card. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-5 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-9 w-auto max-w-[8rem] rounded-xl object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-semibold text-[color:var(--btn-text)] shadow-sm"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-base font-semibold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
