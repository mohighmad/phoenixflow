import { SectionShell } from "@/components/ui/SectionShell";
import { SectionVisual } from "@/components/ui/SectionVisual";
import type { Locale } from "@/data/site";
import { sectionAssets, systemsContent } from "@/data/sections";

type IntegratedGrowthSystemsProps = {
  locale: Locale;
};

export function IntegratedGrowthSystems({ locale }: IntegratedGrowthSystemsProps) {
  const content = systemsContent[locale];
  const isArabic = locale === "ar";

  return (
    <SectionShell
      id="systems"
      tone="sand"
      contentClassName="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"
    >
      <SectionVisual
        src={sectionAssets.systems}
        alt="Phoenixflow integrated growth systems visual"
        className="mx-auto w-full"
        ratioClassName="aspect-[16/9]"
        imageClassName="object-[52%_50%]"
        sizes="(min-width: 1024px) 56vw, 100vw"
      />

      <div className={`max-w-xl ${isArabic ? "mx-auto text-center lg:mx-0 lg:text-right" : ""}`}>
        <p className={isArabic ? "pf-eyebrow-ar-dark mx-auto lg:mx-0" : "pf-eyebrow text-[var(--pf-mocha)]"}>
          {content.eyebrow}
        </p>
        <h2
          className={`${isArabic ? "pf-title-ar max-w-[28rem] leading-[1.16]" : "pf-title-medium"} mt-5 text-balance`}
        >
          {content.title}
        </h2>
        <p
          dir={isArabic ? "rtl" : "ltr"}
          className={
            isArabic
              ? "pf-arabic mt-4 text-[0.98rem] font-semibold leading-8 text-[rgb(123_101_73_/_0.82)]"
              : "mt-4 text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-[rgb(123_101_73_/_0.78)]"
          }
        >
          {isArabic ? "بناء · نمو · توسّع" : "Build · Grow · Scale"}
        </p>

        <div className="mt-8 space-y-4">
          {content.blocks.map((block) => (
            <article
              key={block.code}
              className={`relative border-y border-[rgb(92_71_55_/_0.12)] bg-[rgb(251_248_241_/_0.42)] px-5 py-5 shadow-[0_16px_42px_-38px_rgba(92,71,55,0.34)] ${
                isArabic ? "text-center lg:text-right" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 h-px w-20 bg-[linear-gradient(90deg,rgb(167_125_73_/_0.45),transparent)] ${
                  isArabic ? "left-1/2 -translate-x-1/2 lg:left-auto lg:right-5 lg:translate-x-0" : "left-5"
                }`}
              />
              <h3
                className={
                  isArabic
                    ? "pf-arabic text-[1.2rem] font-semibold leading-8 text-[var(--pf-mocha)]"
                    : "pf-display text-[1.38rem] leading-8 text-[var(--pf-mocha)]"
                }
              >
                {block.title}
              </h3>
              <p
                className={
                  isArabic
                    ? "pf-copy-arabic mx-auto mt-2 max-w-[31rem] text-[0.98rem] leading-[1.9rem] text-[color:color-mix(in_srgb,var(--pf-mocha)_84%,white)] lg:mx-0"
                    : "mt-2 max-w-[30rem] text-sm leading-7 text-[color:color-mix(in_srgb,var(--pf-mocha)_82%,white)]"
                }
              >
                {block.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
