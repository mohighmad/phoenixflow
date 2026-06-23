import { SectionShell } from "@/components/ui/SectionShell";
import { SectionVisual } from "@/components/ui/SectionVisual";
import type { Locale } from "@/data/site";
import { methodologyContent, sectionAssets } from "@/data/sections";

type MethodologyProps = {
  locale: Locale;
};

export function Methodology({ locale }: MethodologyProps) {
  const content = methodologyContent[locale];
  const isArabic = locale === "ar";

  return (
    <SectionShell
      id="methodology"
      tone="ink"
      className="overflow-hidden"
      contentClassName="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center"
    >
      <div className={`max-w-xl ${isArabic ? "text-right lg:max-w-[36rem]" : ""}`}>
        <p className={isArabic ? "pf-eyebrow-ar-light" : "pf-eyebrow text-[rgb(223_207_183_/_0.82)]"}>
          {content.eyebrow}
        </p>
        <h2
          className={`${
            isArabic
              ? "pf-title-ar mt-6 max-w-[33rem] text-balance text-[rgb(251_248_241_/_0.98)] lg:leading-[1.2]"
              : "pf-title-medium mt-5 text-balance"
          }`}
        >
          {content.title}
        </h2>
        <p
          className={`${
            isArabic
              ? "pf-copy-arabic pf-copy-arabic-dark mt-6 max-w-[31rem] text-[1.04rem] leading-[1.98]"
              : "pf-copy pf-copy-dark mt-6"
          } ${isArabic ? "ms-auto" : ""}`}
        >
          {content.body}
        </p>

        <div className="mt-10 grid gap-y-7 sm:grid-cols-3 sm:gap-x-8">
          {content.points.map((point, index) => (
            <div
              key={point.label}
              className={`border-[rgb(223_207_183_/_0.2)] ${
                index > 0
                  ? "border-t pt-7 sm:border-t-0 sm:border-s sm:pt-0 sm:ps-7"
                  : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="block h-px w-12 bg-[linear-gradient(90deg,rgb(167_125_73_/_0.64),rgb(223_207_183_/_0.08))]"
              />
              <p
                className={
                  isArabic
                    ? "pf-arabic mt-5 text-[1.44rem] font-semibold leading-8 text-[rgb(251_248_241_/_0.98)]"
                    : "pf-display mt-4 text-2xl text-[var(--pf-paper)]"
                }
              >
                {point.label}
              </p>
              <p
                className={
                  isArabic
                    ? "pf-copy-arabic mt-3 text-[0.98rem] leading-[1.9rem] text-[rgb(239_229_213_/_0.84)]"
                    : "mt-2 text-sm leading-7 text-[rgb(251_248_241_/_0.72)]"
                }
              >
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionVisual
        src={sectionAssets.methodology}
        alt="Phoenixflow methodology visual"
        className="mx-auto w-full"
        ratioClassName="aspect-[16/9]"
        imageClassName="object-[54%_50%]"
        sizes="(min-width: 1024px) 56vw, 100vw"
      />
    </SectionShell>
  );
}
