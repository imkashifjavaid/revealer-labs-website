import Image from "next/image";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  const size = compact ? 30 : 36;

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/revealer-labs-mark.svg"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="shrink-0 rounded-[0.7rem] shadow-[0_8px_26px_var(--surface-shadow-soft)]"
      />
      <span className={`whitespace-nowrap font-bold uppercase tracking-[-0.045em] ${compact ? "text-sm" : "text-base sm:text-lg"}`}>
        <span className="text-content">Revealer</span>{" "}
        <span className="text-accent-ink">Labs</span>
      </span>
    </span>
  );
}
