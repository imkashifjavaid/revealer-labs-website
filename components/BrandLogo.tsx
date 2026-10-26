import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  const size = compact ? 28 : 32;

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/revealer-labs-monogram.svg"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="shrink-0 rounded-[0.65rem] border border-line shadow-[0_8px_24px_var(--surface-shadow-soft)]"
      />
      <span className={`whitespace-nowrap font-bold uppercase tracking-[-0.045em] ${compact ? "text-sm" : "text-base sm:text-lg"}`}>
        <span className="text-content">Revealer</span>{" "}
        <span className="text-accent-ink">Labs</span>
      </span>
    </span>
  );
}
