import { mediaGroupBaseUrl, mediaGroupLink, MEDIA_SERVICE_COPY, serviceWhy, type MediaService } from "@/lib/funding/media-group";

/**
 * "Need a website, domain or logo?" — links to 3B Media Group.
 * Renders nothing when THREEB_MEDIA_GROUP_URL isn't configured.
 * With only "logo" in needs it becomes a light logo offer.
 */
export function MediaGroupCta({ needs, domain = null }: { needs: MediaService[]; domain?: { domain: string; existing: boolean } | null }) {
  const base = mediaGroupBaseUrl();
  if (!base || needs.length === 0) return null;
  const webGap = needs.some((n) => n !== "logo");

  return (
    <section className="fm-card fm-media-cta" aria-labelledby="media-cta-heading">
      <p className="fm-eyebrow">3B Media Group</p>
      <h2 id="media-cta-heading" className="fm-h3">
        {webGap ? "Get your web presence done for you" : "Want a professional logo?"}
      </h2>
      <ul className="fm-mini">
        {needs.map((n) => (
          <li key={n}>
            <strong>{MEDIA_SERVICE_COPY[n].title}</strong> — <span className="fm-muted">{serviceWhy(n, domain?.domain ?? null)}</span>
          </li>
        ))}
      </ul>
      {needs.includes("domain") && (
        <p className="fm-muted fm-small">
          3B Media Group offers domain registration through its Dynadot reseller account. You can review registration and renewal pricing before ordering.
        </p>
      )}
      {needs.includes("domain") && domain && !domain.existing && (
        <p className="fm-muted fm-small">{domain.domain} is just an example. 3B Media Group checks what&apos;s available and registers it in your business&apos;s name.</p>
      )}
      <a href={mediaGroupLink(base, needs)} target="_blank" rel="noopener noreferrer" className="fm-btn fm-btn-primary">
        Talk to 3B Media Group ↗
      </a>
      <p className="fm-muted fm-small">
        3B Media Group is part of the 3B ecosystem. It&apos;s optional — you can use any provider, and it doesn&apos;t affect your readiness review.
      </p>
    </section>
  );
}
