import type { ReactNode } from "react";

type Tone = "ivory" | "paper" | "sand" | "ink";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  contentClassName?: string;
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const toneClasses: Record<Tone, string> = {
  ivory: "bg-[var(--pf-ivory)] text-[var(--pf-ink)]",
  paper: "bg-[var(--pf-paper)] text-[var(--pf-ink)]",
  sand: "bg-[linear-gradient(180deg,rgba(223,207,183,0.88),rgba(244,237,227,0.86))] text-[var(--pf-ink)]",
  ink: "bg-[linear-gradient(180deg,var(--pf-ink),var(--pf-navy))] text-[var(--pf-paper)]",
};

export function SectionShell({
  children,
  id,
  tone = "ivory",
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={joinClasses(
        "relative py-20 sm:py-24 lg:py-32",
        toneClasses[tone],
        className,
      )}
    >
      <div className={joinClasses("pf-container", contentClassName)}>{children}</div>
    </section>
  );
}
