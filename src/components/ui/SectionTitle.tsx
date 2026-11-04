type SectionTitleProps = {
  /** Numéro affiché devant le libellé, ex. 1 → « 01 » */
  index: number;
  label: string;
  /** Début du titre, en couleur normale */
  title: string;
  /** Fin du titre, en couleur d'accent */
  highlight?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  index,
  label,
  title,
  highlight,
  align = "left",
  className = "mb-14",
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
        {String(index).padStart(2, "0")} — {label}
      </p>
      <h2 className="text-4xl font-bold leading-tight md:text-5xl">
        {title}
        {highlight && <span className="text-accent"> {highlight}</span>}
      </h2>
    </div>
  );
}
