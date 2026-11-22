import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional masthead logo and publication name. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-5 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} masthead` : "Masthead"}
          className="h-8 w-auto max-w-[8rem] object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 items-center justify-center border text-base italic ${
            isDark
              ? "border-[#3a342e] bg-[#1e1b18] text-[var(--brand-soft)]"
              : "border-[#d6cfc2] bg-white text-[var(--brand)]"
          }`}
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className="text-sm uppercase tracking-[0.18em]">
          {brand.name}
        </span>
      )}
    </div>
  );
}
