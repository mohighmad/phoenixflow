import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { Locale } from "@/data/site";
import { heroContent, sectionAssets } from "@/data/sections";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const content = heroContent[locale];
  const isArabic = locale === "ar";

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--pf-paper)] text-[var(--pf-ink)]"
    >
      <div className="absolute inset-0">
        <Image
          fill
          priority
          alt="Phoenixflow hero background"
          src={sectionAssets.hero}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,241,0.95)_0%,rgba(251,248,241,0.82)_38%,rgba(251,248,241,0.46)_68%,rgba(251,248,241,0.2)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(244,237,227,0.92))]" />

      <div className="pf-container relative flex min-h-[calc(100svh-4.7rem)] items-center py-16 sm:py-20 lg:py-24">
        <div
          className={`mr-auto w-full max-w-[35rem] border-s border-[rgb(167_125_73_/_0.44)] bg-[linear-gradient(90deg,rgba(251,248,241,0.7),rgba(251,248,241,0.34),transparent)] px-6 py-8 shadow-[0_30px_80px_-58px_rgba(24,33,43,0.52)] backdrop-blur-[3px] sm:px-8 lg:px-9 ${isArabic ? "text-right" : ""}`}
        >
          <p className={isArabic ? "pf-eyebrow-ar" : "pf-eyebrow"}>{content.eyebrow}</p>
          <h1 className="pf-title mt-5 text-balance">{content.title}</h1>
          <p
            className={
              isArabic
                ? "pf-title-ar mt-4 max-w-[24rem] text-[var(--pf-mocha)] sm:max-w-[27rem]"
                : "mt-4 text-lg font-medium uppercase tracking-[0.14em] text-[var(--pf-mocha)] sm:text-xl"
            }
          >
            {content.headline}
          </p>
          <p
            className={`${
              isArabic
                ? "pf-copy-arabic max-w-[31rem] text-[1.03rem] leading-[1.98] text-[color:color-mix(in_srgb,var(--pf-mocha)_82%,white)]"
                : "pf-copy"
            } mt-6`}
          >
            {content.supporting}
          </p>

          <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${isArabic ? "sm:justify-end" : ""}`}>
            <Button
              href={content.primaryCta.href}
              className="sm:min-w-[15rem]"
              language={locale}
            >
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              variant="secondary"
              className="sm:min-w-[13rem]"
              language={locale}
            >
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
