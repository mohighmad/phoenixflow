import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionShell } from "@/components/ui/SectionShell";
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
      <div className="pf-panel relative overflow-hidden rounded-[2.2rem] border-white/55">
        <div className="absolute inset-0">
          <Image
            fill
            alt=""
            aria-hidden="true"
            src={sectionAssets.finalCta}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,241,0.86),rgba(244,237,227,0.8))] sm:bg-[linear-gradient(180deg,rgba(251,248,241,0.92),rgba(244,237,227,0.88))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(167,125,73,0.12),transparent_55%)]" />

        <div className="relative px-6 py-10 text-center sm:px-12 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-2xl">
            <p
              className={`${isArabic ? "pf-eyebrow-ar" : "pf-eyebrow"} mx-auto`}
            >
              {content.eyebrow}
            </p>
            <h2
              className={`${isArabic ? "pf-title-ar mx-auto max-w-[28rem] leading-[1.16]" : "pf-title-medium"} mt-6 text-balance`}
            >
              {content.title}
            </h2>
            <p
              className={`${
                isArabic
                  ? "pf-copy-arabic text-[1.03rem] leading-[1.96]"
                  : "pf-copy"
              } mx-auto mt-6 max-w-xl`}
            >
              {content.body}
            </p>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Button
                href={content.cta.href}
                target="_blank"
                rel="noreferrer"
                className="sm:min-w-[17rem]"
                language={locale}
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
