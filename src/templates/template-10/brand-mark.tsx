import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the Aurora Mesh card. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-5 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-9 w-auto max-w-[8rem] rounded-lg object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-soft)] via-[var(--brand)] to-fuchsia-400 text-sm font-bold text-slate-950 shadow-sm"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-sm font-semibold tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
