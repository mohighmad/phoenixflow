import type { Locale } from "@/data/site";

type Localized<T> = Record<Locale, T>;

type HeroContent = {
  eyebrow: string;
  title: string;
  headline: string;
  supporting: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

type SectionContent = {
  eyebrow: string;
  title: string;
  body: string;
};

type MethodologyPoint = {
  label: string;
  detail: string;
};

type MethodologyContent = SectionContent & {
  points: MethodologyPoint[];
};

type SystemsContent = {
  eyebrow: string;
  title: string;
  intro: string;
  systemLabel: string;
  systemBody: string;
  blocks: Array<{
    code: "BUILD" | "GROW" | "SCALE";
    title: string;
    description: string;
  }>;
};

type TransformationContent = SectionContent & {
  markers: string[];
};

type FinalCtaContent = {
  eyebrow: string;
  title: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
};

export const sectionAssets = {
  logo: "/images/phoenixflow/logo/vector-logo-for-site.svg",
  hero: "/images/phoenixflow/sections/hero-bg.png",
  positioning: "/images/phoenixflow/sections/positioning-visual.png",
  methodology: "/images/phoenixflow/sections/methodology-visual.png",
  systems: "/images/phoenixflow/sections/integrated-growth-systems.png",
  transformation: "/images/phoenixflow/sections/transformation-journey.png",
  finalCta: "/images/phoenixflow/sections/final-cta-bg.png",
  footer: "/images/phoenixflow/sections/footer-bg.png",
} as const;

export const heroContent: Localized<HeroContent> = {
  en: {
    eyebrow: "Business Development & Growth Solutions",
    title: "Phoenixflow",
    headline: "Turning Ideas Into Success",
    supporting:
      "We shape ambitious ideas into clear positions, stronger business foundations, and growth systems built to carry momentum.",
    primaryCta: {
      label: "Begin The Conversation",
      href: "#contact",
    },
    secondaryCta: {
      label: "View The System",
      href: "#systems",
    },
  },
  ar: {
    eyebrow: "تطوير الأعمال وحلول النمو",
    title: "Phoenixflow",
    headline: "نحوّل الأفكار إلى نجاح",
    supporting:
      "نساعد الأفكار الطموحة على أن تصبح حضورًا أوضح، وأساسًا أقوى، ومسار نمو يمكن البناء عليه.",
    primaryCta: {
      label: "ابدأ المحادثة",
      href: "#contact",
    },
    secondaryCta: {
      label: "تعرّف على النظام",
      href: "#systems",
    },
  },
};

export const positioningContent: Localized<SectionContent> = {
  en: {
    eyebrow: "Positioning",
    title: "Not Separate Services. One Integrated Growth System.",
    body:
      "Phoenixflow aligns strategy, identity, digital presence, campaigns, automation, and project support into one business architecture for growth.",
  },
  ar: {
    eyebrow: "موقعك في السوق",
    title: "ليست خدمات متفرقة… بل مسار نمو واحد.",
    body:
      "نجمع الاستراتيجية والهوية والحضور الرقمي والحملات والأتمتة ودعم المشاريع في نظام واضح يساعد العمل على النمو بثبات.",
  },
};

export const methodologyContent: Localized<MethodologyContent> = {
  en: {
    eyebrow: "Methodology",
    title: "Carve. Measure. Script.",
    body:
      "A strategic methodology for refining potential, aligning direction, and building growth with intention.",
    points: [
      { label: "Carve", detail: "Refine raw potential into a sharp, defensible position." },
      { label: "Measure", detail: "Align every decision with direction, evidence, and intent." },
      { label: "Script", detail: "Build the growth path with deliberate, repeatable structure." },
    ],
  },
  ar: {
    eyebrow: "المنهجية",
    title: "نصقل. نقيس. نبني المسار.",
    body:
      "طريقة عمل استراتيجية تساعد على تحسين الفكرة، توجيه القرار، وبناء طريق نمو واضح ومقصود.",
    points: [
      { label: "نصقل", detail: "نحوّل الفكرة الخام إلى عرض أوضح وحضور أقوى." },
      { label: "نقيس", detail: "نربط كل قرار بالاتجاه الصحيح وبما يخدم النمو." },
      { label: "نبني المسار", detail: "نضع طريقًا عمليًا للنمو يمكن تطويره وتكراره." },
    ],
  },
};

export const systemsContent: Localized<SystemsContent> = {
  en: {
    eyebrow: "Integrated Growth Systems",
    title: "One Growth Architecture",
    intro: "",
    systemLabel: "Operating doctrine",
    systemBody:
      "Foundation creates direction. Direction creates momentum. Momentum becomes a system that can expand without losing control.",
    blocks: [
      {
        code: "BUILD",
        title: "Establish The Base",
        description:
          "Clarify the position, structure the offer, and build the identity and presence the business can stand on.",
      },
      {
        code: "GROW",
        title: "Move The Market",
        description:
          "Turn the foundation into coordinated campaigns, content, and market signals that create controlled momentum.",
      },
      {
        code: "SCALE",
        title: "Expand The System",
        description:
          "Convert momentum into repeatable processes, automation, optimization, and project support for the next level.",
      },
    ],
  },
  ar: {
    eyebrow: "نظام نمو متكامل",
    title: "مسار واحد للنمو",
    intro: "",
    systemLabel: "طريقة العمل",
    systemBody:
      "نرتّب الأساس، ثم نوجّه الحركة في السوق، ثم نحول النمو إلى عمل يمكن تكراره وتوسيعه بثقة.",
    blocks: [
      {
        code: "BUILD",
        title: "نبني الأساس",
        description:
          "نرتّب الأساس الذي يقف عليه مشروعك: الفكرة، العرض، الهوية، والحضور الذي يثق به العميل.",
      },
      {
        code: "GROW",
        title: "نحرّك النمو",
        description:
          "نحوّل حضورك إلى حركة واضحة في السوق عبر رسائل وحملات ومحتوى يعملون في اتجاه واحد.",
      },
      {
        code: "SCALE",
        title: "نجهّز التوسع",
        description:
          "نجعل النمو قابلًا للتكرار من خلال عمليات أوضح، أتمتة مناسبة، وتحسين مستمر للمرحلة التالية.",
      },
    ],
  },
};

export const transformationContent: Localized<TransformationContent> = {
  en: {
    eyebrow: "Transformation Journey",
    title: "From Untapped Potential To Structured Growth",
    body:
      "Phoenixflow develops existing ideas, businesses, and projects into clearer, stronger, better-positioned growth systems.",
    markers: [
      "Clarify the opportunity",
      "Strengthen the position",
      "Build momentum with structure",
    ],
  },
  ar: {
    eyebrow: "رحلة التحول",
    title: "من فكرة واعدة إلى نمو واضح ومنظّم",
    body:
      "نطوّر الأفكار والمشاريع القائمة لتصبح أوضح في السوق، أقوى في حضورها، وأكثر جاهزية للنمو.",
    markers: ["نحدد فرصة النمو", "نقوّي حضورك في السوق", "نبني مسار نمو واضح"],
  },
};

export const finalCtaContent: Localized<FinalCtaContent> = {
  en: {
    eyebrow: "Next Step",
    title: "Let's Build Your Growth System",
    body:
      "Start a focused conversation about where your business stands today — and the structured path to where it's going.",
    cta: {
      label: "Start The Conversation",
      href: "https://wa.me/966564722313",
    },
  },
  ar: {
    eyebrow: "الخطوة التالية",
    title: "لنبدأ ببناء مسار نموك",
    body:
      "ابدأ محادثة واضحة حول موقع عملك اليوم، وما يحتاجه ليصل إلى حضوره الأقوى وخطوته التالية.",
    cta: {
      label: "ابدأ المحادثة",
      href: "https://wa.me/966564722313",
    },
  },
};
