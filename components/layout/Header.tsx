"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { sectionAssets } from "@/data/sections";
import type { Locale } from "@/data/site";
import { locales, site } from "@/data/site";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const navItems = site.nav[locale];
  const isArabic = locale === "ar";
  const [menuOpen, setMenuOpen] = useState(false);

  const localeToggle = (
    <div className="inline-flex items-center gap-1 border border-[rgb(167_125_73_/_0.22)] bg-[rgb(251_248_241_/_0.48)] p-1 shadow-[0_1px_0_rgb(255_255_255_/_0.62)_inset]">
      {locales.map((option) => {
        const active = option === locale;

        return (
          <Link
            key={option}
            href={`/${option}`}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "bg-[var(--pf-ink)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pf-paper)] shadow-[0_8px_18px_-12px_rgba(24,33,43,0.55)]"
                : "px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--pf-taupe)] transition-colors hover:text-[var(--pf-coffee)]"
            }
          >
            {option.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(167_125_73_/_0.18)] bg-[rgb(251_248_241_/_0.84)] shadow-[0_1px_0_rgb(255_255_255_/_0.55)_inset] backdrop-blur-xl">
      <div className="pf-container flex min-h-[5.15rem] items-center justify-between gap-4 py-3 sm:min-h-[5.55rem] sm:py-3.5">
        <Link
          href={`/${locale}`}
          className="group relative inline-flex w-fit items-center py-2.5 transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label={site.name}
        >
          <span
            aria-hidden="true"
            className="absolute -inset-x-3 bottom-1 h-px origin-center scale-x-75 bg-[linear-gradient(90deg,transparent,rgb(167_125_73_/_0.38),transparent)] opacity-70 transition-transform duration-300 group-hover:scale-x-100"
          />
          <Image
            src={sectionAssets.logo}
            alt="Phoenixflow official logo"
            width={849}
            height={572}
            priority
            unoptimized
            sizes="(min-width: 1024px) 160px, (min-width: 640px) 140px, 120px"
            className="relative z-10 block h-auto w-[7.5rem] object-contain transition-opacity duration-300 group-hover:opacity-[0.9] sm:w-[8.75rem] lg:w-[10rem]"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <nav
            aria-label="Primary navigation"
            className="flex items-center border-x border-[rgb(167_125_73_/_0.12)] px-7 xl:px-9"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  isArabic
                    ? "pf-link pf-arabic relative mx-4 py-2 text-[14px] font-medium text-[var(--pf-coffee)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-[rgb(167_125_73_/_0.66)] after:transition-transform after:duration-200 hover:text-[var(--pf-ink)] hover:after:scale-x-100"
                    : "pf-link relative mx-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--pf-coffee)] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[rgb(167_125_73_/_0.66)] after:transition-transform after:duration-200 hover:text-[var(--pf-ink)] hover:after:scale-x-100"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div>{localeToggle}</div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {localeToggle}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="pf-mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[rgb(167_125_73_/_0.28)] bg-[rgb(255_255_255_/_0.48)] text-[var(--pf-coffee)] transition-colors hover:text-[var(--pf-bronze)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="3.5" y1="3.5" x2="12.5" y2="12.5" />
                  <line x1="12.5" y1="3.5" x2="3.5" y2="12.5" />
                </>
              ) : (
                <>
                  <line x1="2.5" y1="5" x2="13.5" y2="5" />
                  <line x1="2.5" y1="11" x2="13.5" y2="11" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="pf-mobile-nav"
          aria-label="Primary navigation mobile"
          className="border-t border-[rgb(167_125_73_/_0.16)] bg-[rgb(251_248_241_/_0.98)] shadow-[0_28px_50px_-44px_rgba(24,33,43,0.48)] backdrop-blur-xl lg:hidden"
        >
          <div
            className={`pf-container flex flex-col gap-1 py-4 ${isArabic ? "items-start text-right" : "items-start"}`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isArabic
                    ? "pf-link pf-arabic w-fit py-2 text-[16px] font-medium text-[var(--pf-coffee)] hover:text-[var(--pf-ink)]"
                    : "pf-link w-fit py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pf-coffee)] hover:text-[var(--pf-ink)]"
                }
              >
                {item.label}
              </a>
            ))}

            <span aria-hidden="true" className="my-2 h-px w-full bg-[rgb(167_125_73_/_0.18)]" />

            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              dir="ltr"
              className="pf-link w-fit py-1 text-[13px] font-medium text-[var(--pf-coffee)]"
            >
              {site.whatsappDisplay}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
