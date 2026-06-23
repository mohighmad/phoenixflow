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
      <div className="relative h-[23rem] sm:h-[27rem] lg:absolute lg:inset-0 lg:h-auto">
        <Image
          fill
          priority
          alt="Phoenixflow hero background"
          src={sectionAssets.hero}
          className="object-cover object-[63%_22%] sm:object-[68%_20%] lg:object-[74%_28%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,248,241,0.18)_0%,rgba(251,248,241,0.06)_40%,rgba(244,237,227,0.42)_100%)] lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(244,237,227,0.98))] lg:hidden" />
      </div>
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(251,248,241,0.95)_0%,rgba(251,248,241,0.82)_38%,rgba(251,248,241,0.46)_68%,rgba(251,248,241,0.2)_100%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 hidden h-40 bg-[linear-gradient(180deg,transparent,rgba(244,237,227,0.92))] lg:block" />

      <div className="pf-container relative pb-10 lg:flex lg:min-h-[calc(100svh-4.7rem)] lg:items-end lg:py-24">
        <div
          className={`relative -mt-[3.75rem] w-full max-w-[34rem] rounded-[2rem] border border-[rgb(167_125_73_/_0.18)] bg-[linear-gradient(180deg,rgba(251,248,241,0.82),rgba(251,248,241,0.72))] px-5 py-6 shadow-[0_24px_70px_-42px_rgba(24,33,43,0.38)] backdrop-blur-[10px] sm:-mt-[4.5rem] sm:px-8 sm:py-8 lg:mt-0 lg:mr-auto lg:rounded-none lg:border-y-0 lg:border-e-0 lg:border-s lg:border-[rgb(167_125_73_/_0.44)] lg:bg-[linear-gradient(90deg,rgba(251,248,241,0.6),rgba(251,248,241,0.24),transparent)] lg:px-9 lg:shadow-[0_30px_80px_-58px_rgba(24,33,43,0.52)] lg:backdrop-blur-[3px] ${isArabic ? "text-center lg:text-right" : ""}`}
        >
          <p className={isArabic ? "pf-eyebrow-ar mx-auto lg:mx-0" : "pf-eyebrow"}>{content.eyebrow}</p>
          <h1 className="pf-title mt-5 text-balance">{content.title}</h1>
          <p
            className={
              isArabic
                ? "pf-title-ar mx-auto mt-4 max-w-[24rem] text-[var(--pf-mocha)] sm:max-w-[27rem] lg:mx-0"
                : "mt-4 text-[1.05rem] font-medium uppercase tracking-[0.14em] text-[var(--pf-mocha)] sm:text-xl"
            }
          >
            {content.headline}
          </p>
          <p
            className={`${
              isArabic
                ? "pf-copy-arabic mx-auto max-w-[31rem] text-[1rem] leading-[1.95] text-[color:color-mix(in_srgb,var(--pf-mocha)_82%,white)] lg:mx-0"
                : "pf-copy"
            } mt-6`}
          >
            {content.supporting}
          </p>

          <div className={`mt-8 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3 ${isArabic ? "sm:justify-end" : ""}`}>
            <Button
              href={content.primaryCta.href}
              className="w-full sm:min-w-[15rem] sm:w-auto"
              language={locale}
            >
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              variant="secondary"
              className="w-full sm:min-w-[13rem] sm:w-auto"
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
