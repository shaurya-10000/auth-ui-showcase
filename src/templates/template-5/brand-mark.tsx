import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the form. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  const badgeShadow = isDark
    ? "bg-[#2d3748] text-[var(--brand-soft)] shadow-[4px_4px_8px_#1a202c,-4px_-4px_8px_#4a5568]"
    : "bg-[#e0e5ec] text-[var(--brand)] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff]";

  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-9 w-auto max-w-[8rem] object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 items-center justify-center rounded-xl text-base font-bold ${badgeShadow}`}
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-lg font-semibold tracking-tight ${isDark ? "text-slate-200" : "text-slate-700"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
