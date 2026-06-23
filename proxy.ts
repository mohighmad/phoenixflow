import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "ar"] as const;
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "NEXT_LOCALE";

function isSupportedLocale(value: string | undefined): value is (typeof LOCALES)[number] {
  return value !== undefined && (LOCALES as readonly string[]).includes(value);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root: redirect to the remembered locale (cookie) or the default locale.
  if (pathname === "/") {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = isSupportedLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Remember the active locale so future visits to "/" can honor it.
  const segment = pathname.split("/")[1];
  if (isSupportedLocale(segment)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, segment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/(en|ar)/:path*"],
};
