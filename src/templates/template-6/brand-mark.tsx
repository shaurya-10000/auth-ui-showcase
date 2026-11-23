import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
  forceLight?: boolean;
}

/** Optional logo and brand name shown in the Bento header card. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark, forceLight = false }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  const useDarkBadge = forceLight || isDark;

  return (
    <div className="mb-8 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-10 w-auto max-w-[9rem] object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${
            useDarkBadge ? "bg-white text-black" : "bg-[var(--brand)] text-[color:var(--btn-text)]"
          }`}
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-lg font-semibold tracking-tight ${forceLight || isDark ? "text-white" : "text-gray-900"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
