import { Button } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionVisual } from "@/components/ui/SectionVisual";
import type { Locale } from "@/data/site";
import { finalCtaContent, sectionAssets } from "@/data/sections";

type FinalCTAProps = {
  locale: Locale;
};

export function FinalCTA({ locale }: FinalCTAProps) {
  const content = finalCtaContent[locale];
  const isArabic = locale === "ar";

  return (
    <SectionShell tone="paper" className="overflow-hidden" contentClassName="relative">
      <div className="pf-panel relative overflow-hidden rounded-[2.2rem] border-white/55 bg-[linear-gradient(180deg,rgba(251,248,241,0.95),rgba(244,237,227,0.78))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(167,125,73,0.12),transparent_55%)]" />

        <div className="relative px-0 py-10 text-center sm:px-12 sm:py-18 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-10 xl:gap-16 xl:px-12">
          <div className="mx-auto max-w-2xl px-6 sm:px-0 lg:mx-0 lg:max-w-[31rem]">
            <p
              className={`${isArabic ? "pf-eyebrow-ar" : "pf-eyebrow"} mx-auto`}
            >
              {content.eyebrow}
            </p>
            <h2
              className={`${isArabic ? "pf-title-ar mx-auto max-w-[28rem] leading-[1.16]" : "pf-title-medium mx-auto max-w-[19.5rem] sm:max-w-none"} mt-6 text-balance`}
            >
              {content.title}
            </h2>
            <p
              className={`${
                isArabic
                  ? "pf-copy-arabic text-[1.03rem] leading-[1.96]"
                  : "pf-copy"
              } mx-auto mt-6 max-w-[18.5rem] sm:max-w-xl`}
            >
              {content.body}
            </p>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Button
                href={content.cta.href}
                target="_blank"
                rel="noreferrer"
                className="sm:min-w-[17rem] lg:min-w-[16rem]"
                language={locale}
              >
                {content.cta.label}
              </Button>
            </div>
          </div>

          <SectionVisual
            src={sectionAssets.finalCta}
            alt=""
            className="mx-auto mt-8 w-full sm:mt-12 lg:mt-0 lg:max-w-none"
            ratioClassName="aspect-[16/9] lg:aspect-[4/3]"
            imageClassName="object-center"
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}
