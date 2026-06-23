export type Locale = "en" | "ar";

export const locales = ["en", "ar"] as const;

export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "ar";
}

export type NavItem = {
  label: string;
  href: string;
};

type LocalizedText = Record<Locale, string>;

export const site = {
  name: "Phoenixflow",
  whatsappDisplay: "+966 56 472 2313",
  whatsappHref: "https://wa.me/966564722313",
  phoneDisplay: "+966 56 472 2313",
  phoneHref: "tel:+966564722313",
  nav: {
    en: [
      { label: "Positioning", href: "#positioning" },
      { label: "Methodology", href: "#methodology" },
      { label: "Systems", href: "#systems" },
      { label: "Transformation", href: "#transformation" },
      { label: "Contact", href: "#contact" },
    ],
    ar: [
      { label: "الموقع", href: "#positioning" },
      { label: "المنهجية", href: "#methodology" },
      { label: "النمو", href: "#systems" },
      { label: "التحول", href: "#transformation" },
      { label: "التواصل", href: "#contact" },
    ],
  } satisfies Record<Locale, NavItem[]>,
  footer: {
    navigationLabel: {
      en: "Site Links",
      ar: "روابط الموقع",
    } satisfies LocalizedText,
    contactLabel: {
      en: "Contact",
      ar: "التواصل",
    } satisfies LocalizedText,
    whatsappLabel: {
      en: "WhatsApp",
      ar: "واتساب",
    } satisfies LocalizedText,
    socialLabel: {
      en: "Social",
      ar: "المنصات",
    } satisfies LocalizedText,
    description: {
      en: "Premium Business Development & Growth Solutions for businesses ready to turn potential into structure, momentum, and scale.",
      ar: "حلول تطوير ونمو تساعد الأعمال والمشاريع على بناء حضور أوضح ونمو أقوى.",
    } satisfies LocalizedText,
    contactBlurb: {
      en: "For businesses, brands, and projects ready to move with sharper positioning and a more deliberate growth system.",
      ar: "للأعمال والعلامات والمشاريع الجاهزة لخطوة أوضح ومسار نمو أكثر تنظيمًا.",
    } satisfies LocalizedText,
    tagline: {
      en: "Turning Ideas Into Success",
      ar: "نحوّل الأفكار إلى نجاح",
    } satisfies LocalizedText,
    rights: {
      en: "All rights reserved.",
      ar: "جميع الحقوق محفوظة.",
    } satisfies LocalizedText,
  },
  socials: [
    {
      key: "facebook",
      href: "https://www.facebook.com/profile.php?id=61591471611427",
      label: {
        en: "Facebook",
        ar: "فيسبوك",
      } satisfies LocalizedText,
    },
    {
      key: "instagram",
      href: "https://instagram.com/phoen.ixflow",
      label: {
        en: "Instagram",
        ar: "إنستجرام",
      } satisfies LocalizedText,
      handle: "@phoen.ixflow",
    },
  ],
} as const;
