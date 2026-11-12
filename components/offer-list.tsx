import { offersFor, resolveOffer, type OfferGap } from "@/lib/funding/offers";

/** Providers that fix one gap. Links go through /go/[id] so clicks are counted. */
export function OfferList({ gap }: { gap: OfferGap }) {
  const offers = offersFor(gap).map((o) => ({ ...o, affiliate: resolveOffer(o.id)?.affiliate ?? false }));
  if (!offers.length) return null;
  const anyAffiliate = offers.some((o) => o.affiliate);

  return (
    <div className="fm-offers">
      <p className="fm-eyebrow">Ways to fix this</p>
      <ul className="fm-mini">
        {offers.map((o) => (
          <li key={o.id}>
            <a href={`/go/${o.id}`} target="_blank" rel="noopener noreferrer sponsored">
              {o.name} ↗
            </a>{" "}
            <span className="fm-tag fm-tag-optional">{o.price === "free" ? "Free" : "Paid"}</span>
            <span className="fm-muted fm-small"> — {o.blurb}</span>
          </li>
        ))}
      </ul>
      {anyAffiliate && (
        <p className="fm-muted fm-small">
          3B may earn a commission if you sign up through some of these links. It doesn&apos;t change your readiness score or roadmap, and you can
          use any provider.
        </p>
      )}
    </div>
  );
}
