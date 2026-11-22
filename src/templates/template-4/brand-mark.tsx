import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the form. Renders nothing when both are empty. */
export default function BrandMark({ brand }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-6 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-7 w-auto max-w-[8rem] object-contain"
        />
      ) : (
        <span aria-hidden="true" className="text-lg font-bold">
          &gt;
        </span>
      )}
      {brand.name && <span className="text-sm font-bold uppercase tracking-widest">{brand.name}</span>}
    </div>
  );
}
