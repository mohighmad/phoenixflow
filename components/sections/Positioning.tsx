import { SectionShell } from "@/components/ui/SectionShell";
import { SectionVisual } from "@/components/ui/SectionVisual";
import type { Locale } from "@/data/site";
import { positioningContent, sectionAssets } from "@/data/sections";

type PositioningProps = {
  locale: Locale;
};

export function Positioning({ locale }: PositioningProps) {
  const content = positioningContent[locale];
  const isArabic = locale === "ar";

  return (
    <SectionShell
      id="positioning"
      tone="paper"
      className="border-y border-black/5"
      contentClassName="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
    >
      <div className={`max-w-2xl ${isArabic ? "mx-auto text-center lg:mx-0 lg:text-right" : ""}`}>
        <p className={isArabic ? "pf-eyebrow-ar mx-auto lg:mx-0" : "pf-eyebrow"}>{content.eyebrow}</p>
        <h2
          className={`${isArabic ? "pf-title-ar max-w-[32rem] leading-[1.18]" : "pf-title-medium"} mt-5 text-balance`}
        >
          {content.title}
        </h2>
        <p
          className={`${
            isArabic
              ? "pf-copy-arabic max-w-[34rem] text-[1.03rem] leading-[1.96]"
              : "pf-copy"
          } mt-6 ${isArabic ? "mx-auto lg:ms-auto" : ""}`}
        >
          {content.body}
        </p>
      </div>

      <SectionVisual
        src={sectionAssets.positioning}
        alt="Phoenixflow positioning section visual"
        className="mx-auto w-full"
        ratioClassName="aspect-[16/9]"
        imageClassName="object-[58%_50%]"
        sizes="(min-width: 1024px) 54vw, 100vw"
      />
    </SectionShell>
  );
}
