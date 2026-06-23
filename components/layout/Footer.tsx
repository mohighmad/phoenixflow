import Image from "next/image";

import type { Locale } from "@/data/site";
import { site } from "@/data/site";
import { sectionAssets } from "@/data/sections";

type FooterProps = {
  locale: Locale;
};

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 20 20",
  "aria-hidden": true,
} as const;

const FacebookIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M12.6 3.2h-2C8.9 3.2 8 4.4 8 6.1v1.7H6.2v2.4H8V17h2.5v-6.8h1.9l.4-2.4h-2.3V6.4c0-.6.2-1 1-1h1.1V3.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3.3" y="3.3" width="13.4" height="13.4" rx="4.2" />
    <circle cx="10" cy="10" r="3.3" />
    <circle cx="14.1" cy="5.9" r="0.95" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
    <path d="M10 3.2A6.8 6.8 0 0 0 3.7 13l-.9 3.3 3.4-.9A6.8 6.8 0 1 0 10 3.2z" />
    <path
      d="M7.6 6.7c.2 0 .4.1.5.4l.5 1.1c.1.2 0 .4-.1.6l-.4.4a4.6 4.6 0 0 0 2.1 2.1l.4-.4c.2-.2.4-.2.6-.1l1.1.5c.2.1.4.3.4.5 0 .9-.8 1.4-1.5 1.4A5.8 5.8 0 0 1 6 8.3c0-.7.5-1.6 1.4-1.6z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M6 3.4c.4 0 .8.3.9.7l.7 2.1c.1.4 0 .8-.3 1l-1 .9a8.6 8.6 0 0 0 4.1 4.1l.9-1c.2-.3.6-.4 1-.3l2.1.7c.4.1.7.5.7.9v1.8c0 .6-.5 1.1-1.1 1A12 12 0 0 1 4.1 5.6 1.1 1.1 0 0 1 5.2 4.4z" />
  </svg>
);

export function Footer({ locale }: FooterProps) {
  const isArabic = locale === "ar";
  const footerNavItems = site.nav[locale];

  const iconButtons = [
    {
      key: "facebook",
      href: site.socials.find((s) => s.key === "facebook")!.href,
      label: locale === "ar" ? "فيسبوك" : "Facebook",
      icon: <FacebookIcon />,
      external: true,
    },
    {
      key: "instagram",
      href: site.socials.find((s) => s.key === "instagram")!.href,
      label: locale === "ar" ? "إنستجرام" : "Instagram",
      icon: <InstagramIcon />,
      external: true,
    },
    {
      key: "whatsapp",
      href: site.whatsappHref,
      label: locale === "ar" ? "واتساب" : "WhatsApp",
      icon: <WhatsAppIcon />,
      external: true,
    },
    {
      key: "phone",
      href: site.phoneHref,
      label: locale === "ar" ? "اتصال هاتفي" : "Call",
      icon: <PhoneIcon />,
      external: false,
    },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#11171c_0%,#17212b_48%,#0f151a_100%)] text-[var(--pf-paper)]"
    >
      <div className="absolute inset-0 opacity-[0.14]">
        <Image
          fill
          alt=""
          aria-hidden="true"
          src={sectionAssets.footer}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(167,125,73,0.12),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(223,207,183,0.055),transparent_30%),linear-gradient(180deg,rgba(17,23,28,0.78),rgba(15,21,26,0.94))]" />

      <div className="pf-container relative py-16 sm:py-20">
        <div
          className={`grid gap-12 border border-[rgb(223_207_183_/_0.16)] bg-[rgb(17_23_28_/_0.46)] p-6 shadow-[0_34px_90px_-58px_rgba(0,0,0,0.92),0_1px_0_rgb(255_255_255_/_0.06)_inset] backdrop-blur-[3px] sm:p-8 lg:grid-cols-[1.16fr_0.72fr_0.9fr] lg:gap-12 ${
            isArabic ? "text-right" : ""
          }`}
        >
        <div className="space-y-7">
          <div className={`flex ${isArabic ? "justify-start" : ""}`}>
            <div className="relative py-1">
              <span
                aria-hidden="true"
                className="absolute inset-x-2 -bottom-1 h-px bg-[linear-gradient(90deg,transparent,rgb(167_125_73_/_0.3),transparent)]"
              />
              <Image
                src={sectionAssets.logo}
                alt="Phoenixflow official logo"
                width={849}
                height={572}
                unoptimized
                sizes="(min-width: 1024px) 138px, (min-width: 640px) 125px, 112px"
                className="relative z-10 block h-auto w-[7rem] object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.34)] sm:w-[7.8rem] lg:w-[8.65rem]"
              />
            </div>
          </div>
          <p
            className={
              isArabic
                ? "pf-arabic max-w-md text-[1.02rem] font-normal leading-[1.96rem] text-[rgb(244_237_227_/_0.94)] sm:text-[1.08rem] sm:leading-[2.05rem]"
                : "max-w-md text-sm leading-8 text-[rgb(239_229_213_/_0.84)]"
            }
          >
            {site.footer.description[locale]}
          </p>
          {isArabic ? (
            <div
              dir="rtl"
              className="mx-auto max-w-md space-y-2 border-t border-[rgb(223_207_183_/_0.12)] pt-5 text-center"
            >
              <p className="pf-arabic text-[0.96rem] font-normal leading-[1.95rem] text-[rgb(251_248_241_/_0.88)]">
                اللهم صلِّ على سيدنا محمد وآله عدد كمال الله وكما يليق بكماله
              </p>
              <p className="pf-arabic mx-auto mt-2 text-[0.84rem] font-medium leading-7 text-[rgb(223_207_183_/_0.7)]">
                الله كريم
              </p>
            </div>
          ) : null}
        </div>

        <div
          className={`flex w-full flex-col ${
            isArabic ? "items-end lg:justify-self-center" : "items-start lg:justify-self-center"
          }`}
        >
          <div
            className={`flex w-full max-w-[13.5rem] flex-col ${
              isArabic ? "items-end text-right" : "items-start"
            }`}
          >
            <p
              className={
                isArabic
                  ? "pf-arabic w-fit border-b border-[rgb(167_125_73_/_0.28)] pb-2 text-[0.96rem] font-medium leading-7 text-[rgb(239_229_213_/_0.9)]"
                  : "w-fit border-b border-[rgb(167_125_73_/_0.28)] pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[rgb(223_207_183_/_0.76)]"
              }
            >
              {site.footer.navigationLabel[locale]}
            </p>
            <div className={`mt-5 flex w-full flex-col ${isArabic ? "items-end" : "items-start"}`}>
              {footerNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`pf-link w-fit text-[rgb(223_207_183_/_0.76)] transition-colors hover:text-[rgb(236_224_205_/_0.94)] ${
                    isArabic
                      ? "pf-arabic text-[0.92rem] font-normal leading-[2rem] text-right"
                      : "text-[0.78rem] font-medium leading-[2rem] tracking-[0.018em]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={isArabic ? "flex flex-col items-start lg:max-w-sm lg:justify-self-start" : ""}>
          <p
            className={
              isArabic
                ? "pf-arabic w-fit border-b border-[rgb(167_125_73_/_0.28)] pb-2 text-[1rem] font-medium leading-7 text-[rgb(239_229_213_/_0.94)]"
                : "text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[rgb(223_207_183_/_0.86)]"
            }
          >
            {site.footer.contactLabel[locale]}
          </p>

          <div className="mt-5">
            <p
              className={
                isArabic
                  ? "pf-arabic max-w-sm text-[0.98rem] font-normal leading-[1.9rem] text-[rgb(239_229_213_/_0.88)] sm:text-[1.02rem] sm:leading-[1.96rem]"
                  : "max-w-sm text-sm leading-7 text-[rgb(239_229_213_/_0.78)]"
              }
            >
              {site.footer.contactBlurb[locale]}
            </p>
            <p
              className={`mt-5 ${
                isArabic
                  ? "pf-arabic text-[0.94rem] font-medium text-[rgb(223_207_183_/_0.76)]"
                  : "text-[0.68rem] uppercase tracking-[0.18em] text-[rgb(223_207_183_/_0.66)]"
              }`}
            >
              {locale === "ar" ? "تواصل عبر" : "Reach us via"}
            </p>
            <div className={`mt-3 flex items-center gap-3 ${isArabic ? "justify-start" : ""}`}>
              {iconButtons.map((button) => (
                <a
                  key={button.key}
                  href={button.href}
                  aria-label={button.label}
                  className="pf-icon-btn"
                  {...(button.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {button.icon}
                  <span className="sr-only">{button.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="relative">
        <hr className="pf-rule opacity-60" />
        <div
          className={`pf-container flex flex-col gap-3 py-6 text-[rgb(223_207_183_/_0.68)] sm:flex-row sm:items-center sm:justify-between ${isArabic ? "sm:flex-row-reverse text-right" : ""}`}
        >
          <p
            className={
              isArabic
                ? "pf-arabic text-sm text-[rgb(223_207_183_/_0.82)]"
                : "text-xs uppercase tracking-[0.26em] text-[rgb(223_207_183_/_0.82)]"
            }
          >
            {site.footer.tagline[locale]}
          </p>
          <p className={isArabic ? "pf-arabic text-sm" : "text-xs tracking-[0.04em]"}>
            © {new Date().getFullYear()} {site.name}. {site.footer.rights[locale]}
          </p>
        </div>
      </div>
    </footer>
  );
}
