import { SectionShell } from "@/components/ui/SectionShell";
import { SectionVisual } from "@/components/ui/SectionVisual";
import type { Locale } from "@/data/site";
import { sectionAssets, transformationContent } from "@/data/sections";

type TransformationJourneyProps = {
  locale: Locale;
};

export function TransformationJourney({ locale }: TransformationJourneyProps) {
  const content = transformationContent[locale];
  const isArabic = locale === "ar";

  return (
    <SectionShell
      id="transformation"
      tone="sand"
      contentClassName="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"
    >
      <SectionVisual
        src={sectionAssets.transformation}
        alt="Phoenixflow transformation journey visual"
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
          className={`${isArabic ? "pf-title-ar mx-auto max-w-[22rem] leading-[1.16] sm:max-w-[29rem] lg:mx-0" : "pf-title-medium"} mt-5 text-balance`}
        >
          {content.title}
        </h2>
        <p
          className={`${
            isArabic
              ? "pf-copy-arabic max-w-[21.5rem] text-[1.03rem] leading-[1.96] text-[var(--pf-mocha)] sm:max-w-[31rem]"
              : "pf-copy text-[color:var(--pf-mocha)]"
          } mt-6 ${isArabic ? "mx-auto lg:ms-auto" : ""}`}
        >
          {content.body}
        </p>

        <div className="mt-8 space-y-3">
          {content.markers.map((marker) => (
            <div
              key={marker}
              className={`border border-[rgb(92_71_55_/_0.1)] bg-[rgb(251_248_241_/_0.58)] px-5 py-4 shadow-[0_16px_42px_-36px_rgba(92,71,55,0.42)] ${
                isArabic
                  ? "pf-arabic text-[0.98rem] font-medium leading-[1.95rem] text-[var(--pf-mocha)]"
                  : "text-sm uppercase tracking-[0.12em] text-[var(--pf-mocha)]"
              }`}
            >
              {marker}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
