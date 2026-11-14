import { getReadinessRules, requireFundingContext } from "@/lib/dal";
import { buildPacket, renderPacketSummary } from "@/lib/funding/packet";
import { evaluateReadiness } from "@/lib/funding/readiness";

export async function GET(request: Request) {
  const { state } = await requireFundingContext();
  if (!state.readiness) return Response.redirect(new URL("/app/setup/review", request.url));

  const now = new Date();
  const packet = buildPacket(state, evaluateReadiness(state, await getReadinessRules(), now), now);
  return new Response(renderPacketSummary(packet), {
    headers: {
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="3B-Bankable-Readiness-Packet.txt"',
    },
  });
}
