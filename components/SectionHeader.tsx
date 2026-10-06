type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <p className="text-sm font-semibold tracking-[0.18em] text-[#ff5f8a]">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#F9F2F7] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#B8A8B6] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
