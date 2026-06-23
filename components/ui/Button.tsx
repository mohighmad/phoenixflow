import type { AnchorHTMLAttributes, ReactNode } from "react";

import type { Locale } from "@/data/site";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  language?: Locale;
  variant?: "primary" | "secondary";
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export function Button({
  children,
  className,
  href = "#",
  language = "en",
  target,
  rel,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClassName =
    language === "ar"
      ? "pf-arabic inline-flex min-h-12 items-center justify-center px-6 py-3 text-base font-semibold tracking-[0.01em] transition duration-200 hover:-translate-y-px"
      : "inline-flex min-h-12 items-center justify-center px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition duration-200 hover:-translate-y-px";

  const variantClassName =
    variant === "primary"
      ? "pf-cta-primary border border-[rgb(167_125_73_/_0.32)] bg-[var(--pf-ink)] !text-[var(--pf-paper)] shadow-[0_18px_34px_-20px_rgba(24,33,43,0.55)] hover:bg-[color:color-mix(in_srgb,var(--pf-ink)_88%,var(--pf-navy))] hover:!text-[var(--pf-paper)]"
      : "border border-[rgb(167_125_73_/_0.34)] bg-[rgb(255_255_255_/_0.22)] !text-[var(--pf-ink)] shadow-[0_1px_0_rgb(255_255_255_/_0.52)_inset] hover:border-[var(--pf-bronze)] hover:bg-[rgb(167_125_73_/_0.08)] hover:!text-[var(--pf-mocha)]";

  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={rel}
      style={{
        color: variant === "primary" ? "var(--pf-paper)" : "var(--pf-ink)",
      }}
      className={joinClasses(baseClassName, variantClassName, className)}
    >
      {children}
    </a>
  );
}
