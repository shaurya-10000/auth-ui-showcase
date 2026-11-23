import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
}

/** Optional logo and brand name shown above the form. Renders nothing when both are empty. */
export default function BrandMark({ brand }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-8 flex items-center gap-3">
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
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand)] text-base font-bold text-[color:var(--btn-text)]"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className="text-lg font-semibold tracking-tight text-[color:var(--heading-color)]">
          {brand.name}
        </span>
      )}
    </div>
  );
}
