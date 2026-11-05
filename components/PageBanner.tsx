import type { ReactNode } from "react";


export type BannerVariant = "about" | "india" | "global" | "council" | "events" | "legal";

type Banner = { src: string; poster?: string };

const BANNERS: Record<BannerVariant, Banner> = {
  about:   { src: "/assets/india_initiatives_banner.jpeg" },
  india:   { src: "/assets/india_initiatives.mp4", poster: "/assets/india_initiatives_banner.jpeg" },
  global:  { src: "/assets/global_initiatives.mp4", poster: "/assets/global_initiatives_banner.jpeg" },
  council: { src: "/assets/india_initiatives_banner.jpeg" },
  events:  { src: "/assets/india_initiatives_banner.jpeg" },
  legal:   { src: "/assets/india_initiatives_banner.jpeg" },
};

const srOnly = {
  position: "absolute", width: 1, height: 1, padding: 0, margin: -1,
  overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0,
} as const;

const isVideo = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);
/* ---------- Glowing line-art banner (council + events only) ---------- */

type LineArt = { eyebrow: string; heading: string; intro: string; figures: { src: string; alt: string }[] };

const GANDHI = { src: "/assets/gandhi.png", alt: "Line drawing of Mahatma Gandhi" };
const NEHRU = { src: "/assets/nehru.png", alt: "Line drawing of Jawaharlal Nehru" };

const LINE_ART: Partial<Record<BannerVariant, LineArt>> = {
  council: {
    eyebrow: "Council",
    heading: "Our Council",
    intro: "Leaders and thinkers guiding the Institute and the Initiative.",
    figures: [GANDHI, NEHRU],
  },
  events: {
    eyebrow: "Events",
    heading: "Events",
    intro: "Summits, conferences and conversations bringing progressives together.",
    figures: [GANDHI, NEHRU],
  },
};

const LINE_ART_CSS = `
.pb { position: relative; overflow: hidden; color: #fff;
  background: radial-gradient(800px 380px at 12% 0%, rgba(31,193,222,.22), transparent 60%),
    linear-gradient(135deg, #0a1a3a, #11305c 60%, #0c2148); }
.pb::after { content: ""; position: absolute; inset: auto 0 0 0; height: 3px;
  background: linear-gradient(90deg, #F26B3A, #F7A21B, #1FA897); }

.pb-in { position: relative; z-index: 2; max-width: 560px; padding: 72px 0 80px; }
.pb-eyebrow { color: #F7A21B; font-size: .8rem; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; margin-bottom: 14px; }
.pb h1 { margin: 0; color: #fff !important; font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.1; font-weight: 800; }
.pb-intro { margin: 14px 0 0; font-size: 1.02rem; line-height: 1.6; color: rgba(255,255,255,.82); }

/* Fixed-size figures, identical boxes so both look the same size */
.pb-figs { position: absolute; right: 6%; bottom: 0; z-index: 1; display: flex; align-items: flex-end; gap: 24px; }
.pb-fig { display: block; width: 150px; height: 170px; outline: none; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.pb-fig img { display: block; width: 100%; height: 100%; object-fit: contain; object-position: bottom center;
  filter: invert(1);
  opacity: .7;
  transition: opacity .5s ease, transform .5s ease, filter .5s ease; }

/* Soft, cool glow */
.pb-fig:hover img, .pb-fig:focus-visible img, .pb-fig:active img {
  opacity: 1; transform: translateY(-4px);
  filter: invert(1) drop-shadow(0 0 2px rgba(255,255,255,.7)) drop-shadow(0 0 8px rgba(127,232,245,.55)) drop-shadow(0 0 18px rgba(127,232,245,.25));
}

/* Touch screens: gentle pulse, staggered */
@media (hover: none) {
  .pb-fig img { animation: pb-glow 5s ease-in-out infinite; }
  .pb-fig:nth-child(2) img { animation-delay: 2.5s; }
}
@keyframes pb-glow {
  0%, 100% { opacity: .7; filter: invert(1); }
  50% { opacity: 1; filter: invert(1) drop-shadow(0 0 2px rgba(255,255,255,.6)) drop-shadow(0 0 8px rgba(127,232,245,.5)); }
}

/* Tablet */
@media (max-width: 900px) {
  .pb-fig { width: 120px; height: 136px; }
  .pb-figs { right: 4%; gap: 16px; }
}

/* Mobile: text on top, figures centred underneath */
@media (max-width: 640px) {
  .pb-in { padding: 44px 0 150px; max-width: none; }
  .pb-figs { right: auto; left: 50%; transform: translateX(-50%); gap: 20px; }
  .pb-fig { width: 96px; height: 108px; }
}

@media (prefers-reduced-motion: reduce) { .pb-fig img { transition: none; animation: none !important; } }
`;
export default function PageBanner({
  variant,
  title,
}: {
  variant: BannerVariant;
  title?: string;
}) {

    const art = LINE_ART[variant];
  if (art) {
    return (
      <section className="pb">
        <style>{LINE_ART_CSS}</style>
        <div className="pb-figs">
          {art.figures.map((f) => (
            <span className="pb-fig" tabIndex={0} key={f.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.src} alt={f.alt} decoding="async" />
            </span>
          ))}
        </div>
        <div className="wrap">
          <div className="pb-in">
            <div className="pb-eyebrow">{art.eyebrow}</div>
            <h1>{title ?? art.heading}</h1>
            <p className="pb-intro">{art.intro}</p>
          </div>
        </div>
      </section>
    );
  }
  const { src, poster } = BANNERS[variant];
  const mediaStyle = { display: "block", width: "100%", height: "auto" } as const;

  return (
    <section style={{ position: "relative", width: "100%", lineHeight: 0 }}>
      {title && <h1 style={srOnly}>{title}</h1>}

      {isVideo(src) ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={mediaStyle}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={1920}
          height={600}
          decoding="async"
          fetchPriority="high"
          style={mediaStyle}
        />
      )}
    </section>
  );
}