import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark?: boolean;
  onDarkSurface?: boolean;
}

/** Optional logo and brand name. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark = false, onDarkSurface = false }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  const lightText = onDarkSurface || isDark;

  return (
    <div className="mb-6 flex items-center gap-3">
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
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--brand)] text-sm font-bold text-[color:var(--btn-text)]"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-base font-bold tracking-tight ${lightText ? "text-white" : "text-slate-900"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
