import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the form. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className={`mb-6 inline-flex items-center gap-3 border-4 px-3 py-2 ${isDark ? "border-white" : "border-black"}`}>
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-8 w-auto max-w-[8rem] object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center border-4 border-black bg-[var(--brand)] text-sm font-black text-black"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && <span className="text-lg font-black uppercase tracking-tighter">{brand.name}</span>}
    </div>
  );
}
