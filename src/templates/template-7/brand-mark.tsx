import type { Brand } from "./brand";

interface BrandMarkProps {
  brand: Brand;
  isDark: boolean;
}

/** Optional logo and brand name shown above the Brutalist Pastel card. Renders nothing when both are empty. */
export default function BrandMark({ brand, isDark }: BrandMarkProps) {
  if (!brand.name && !brand.logoUrl) return null;

  return (
    <div className="mb-5 flex items-center gap-3">
      {brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logoUrl}
          alt={brand.name ? `${brand.name} logo` : "Logo"}
          className="h-9 w-auto max-w-[8rem] border-2 border-black bg-white p-1 object-contain shadow-[3px_3px_0px_#000000]"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#a8dadc] text-sm font-black text-black shadow-[3px_3px_0px_#000000]"
        >
          {brand.name.charAt(0).toUpperCase()}
        </span>
      )}
      {brand.name && (
        <span className={`text-sm font-black uppercase tracking-wider ${isDark ? "text-white" : "text-black"}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
}
