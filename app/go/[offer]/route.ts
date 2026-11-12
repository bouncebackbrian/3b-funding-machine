import { track } from "@vercel/analytics/server";
import { NextResponse, type NextRequest } from "next/server";
import { resolveOffer } from "@/lib/funding/offers";

/**
 * Outbound partner link. Counts the click (offer id + whether it was an
 * affiliate link — no user or business data) and redirects. Unknown ids go home.
 * Only ids from the OFFERS allowlist resolve, so this can't be used as an open redirect.
 */
export async function GET(request: NextRequest, ctx: { params: Promise<{ offer: string }> }) {
  const { offer } = await ctx.params;
  const target = resolveOffer(offer);
  if (!target) return NextResponse.redirect(new URL("/", request.url));

  try {
    await track("offer_click", { offer, affiliate: target.affiliate });
  } catch {
    // Analytics must never block the redirect.
  }
  return NextResponse.redirect(target.url, { status: 302 });
}
