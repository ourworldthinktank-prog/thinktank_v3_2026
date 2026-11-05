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

export default function PageBanner({
  variant,
  title,
}: {
  variant: BannerVariant;
  title?: string;
}) {
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