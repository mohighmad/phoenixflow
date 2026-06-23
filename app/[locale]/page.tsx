import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { IntegratedGrowthSystems } from "@/components/sections/IntegratedGrowthSystems";
import { Methodology } from "@/components/sections/Methodology";
import { Positioning } from "@/components/sections/Positioning";
import { TransformationJourney } from "@/components/sections/TransformationJourney";
import { isLocale } from "@/data/site";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main className="pf-page">
      <Header locale={locale} />
      <Hero locale={locale} />
      <Positioning locale={locale} />
      <Methodology locale={locale} />
      <IntegratedGrowthSystems locale={locale} />
      <TransformationJourney locale={locale} />
      <FinalCTA locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
