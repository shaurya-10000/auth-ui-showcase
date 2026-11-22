import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the Monochrome Minimalist card. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-5 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-8 w-auto max-w-[8rem] rounded-lg object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold ${isDark ? "bg-white text-zinc-950" : "bg-[var(--brand)] text-white"}`}
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-sm font-semibold tracking-tight ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
