import Image from "next/image";

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
        <div className="absolute inset-0 hidden lg:block">
          <Image
            fill
            alt=""
            aria-hidden="true"
            src={sectionAssets.finalCta}
            className="object-cover object-[62%_50%]"
            sizes="1180px"
          />
        </div>
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(251,248,241,0.9)_0%,rgba(251,248,241,0.78)_34%,rgba(244,237,227,0.34)_58%,rgba(244,237,227,0.1)_100%)] lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(167,125,73,0.12),transparent_55%)]" />

        <div className="relative px-0 py-10 text-center sm:px-12 sm:py-18 lg:grid lg:min-h-[34rem] lg:grid-cols-[34rem_minmax(0,1fr)] lg:items-center lg:px-14 lg:py-18 lg:[direction:ltr] xl:px-16">
          <div className="mx-auto max-w-2xl px-6 sm:px-0 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:w-[34rem] lg:max-w-[34rem]">
            <div dir={isArabic ? "rtl" : "ltr"}>
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
          </div>

          <SectionVisual
            src={sectionAssets.finalCta}
            alt=""
            className="mx-auto mt-8 w-full sm:mt-12 lg:hidden"
            ratioClassName="aspect-[16/9] lg:aspect-[4/3]"
            imageClassName="object-center"
            sizes="(min-width: 1024px) 56vw, 100vw"
          />
        </div>
      </div>
    </SectionShell>
  );
}
