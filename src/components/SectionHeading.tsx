type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-title-area section-heading${light ? " section-heading-light" : ""}`}>
      <p className="sub-title">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="desc section-description">{description}</p>}
    </div>
  );
}
