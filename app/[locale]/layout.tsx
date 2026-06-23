import type { Metadata } from "next";
import { Geist, Fraunces, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { isLocale, locales, type Locale } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const premiumArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const metaByLocale: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Phoenixflow.dev | Turning Ideas Into Success",
    description:
      "Premium Business Development & Growth Solutions for businesses ready to turn potential into structure, momentum, and scale.",
  },
  ar: {
    title: "Phoenixflow.dev | نحوّل الأفكار إلى نجاح",
    description:
      "حلول تطوير ونمو تساعد الأعمال والمشاريع على بناء حضور أوضح ونمو أقوى.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const meta = metaByLocale[safeLocale];

  return {
    title: {
      default: meta.title,
      template: "%s | Phoenixflow.dev",
    },
    description: meta.description,
    alternates: {
      canonical: `/${safeLocale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${fraunces.variable} ${premiumArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">{children}</body>
    </html>
  );
}
