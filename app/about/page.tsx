import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Shell from "@/components/Shell";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Our-World Institute and Initiative enables progressives to work together to develop alternative solutions, empower citizens, revitalise democracy and build a fairer global order.",
};

const dimensions = ["Normative", "Programmatic", "Organisational"];

const aims = [
  { t: "Develop alternative solutions", d: "Fresh answers to the problems established approaches have failed to solve." },
  { t: "Empower citizens", d: "Put people at the centre of decisions that shape their lives." },
  { t: "Revitalise democracy", d: "Renew democratic institutions and practice for a new era." },
  { t: "Build a fairer global order", d: "A world organised around cooperation, justice and shared prosperity." },
];

const pillars = [
  { n: "01", t: "Rethink paradigms", d: "Question established ideas about how societies, economies and politics should work." },
  { n: "02", t: "Reimagine institutions", d: "Design institutions that deliver for citizens and earn their confidence." },
  { n: "03", t: "Modernise operations", d: "Bring contemporary ways of organising and working to progressive efforts." },
  { n: "04", t: "Restore public trust", d: "Offer a compelling vision of a shared future that people can believe in." },
  { n: "05", t: "Harness innovation", d: "Put disruptive innovation to work for the common good." },
  { n: "06", t: "Reclaim the centre", d: "Build new coalitions and partnerships across borders and movements." },
];

const css = `
.ab { --ab-gold: var(--gold, #F7A21B); --ab-coral: var(--coral, #F26B3A); --ab-teal: var(--teal, #1FA897); --ab-ink: #14203f; --ab-muted: #5b6480; }
.ab-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
.ab-sec { padding: 72px 0; }
.ab-eyebrow { display: inline-flex; gap: 6px; align-items: center; margin-bottom: 18px; }
.ab-eyebrow i { display: block; height: 4px; border-radius: 4px; }
.ab-eyebrow i:nth-child(1) { width: 28px; background: var(--ab-coral); }
.ab-eyebrow i:nth-child(2) { width: 18px; background: var(--ab-gold); }
.ab-eyebrow i:nth-child(3) { width: 10px; background: var(--ab-teal); }
.ab-h2 { font-size: clamp(1.8rem, 3.4vw, 2.6rem); line-height: 1.15; margin: 0 0 14px; color: var(--ab-ink); }
.ab-sub { color: var(--ab-muted); font-size: 1.05rem; max-width: 640px; margin: 0 0 40px; line-height: 1.6; }

/* Intro */
.ab-intro { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; align-items: center; }
.ab-lead { font-size: clamp(1.25rem, 2.2vw, 1.65rem); line-height: 1.55; color: var(--ab-ink); margin: 0; }
.ab-lead mark { background: linear-gradient(transparent 62%, color-mix(in srgb, var(--ab-gold) 45%, transparent) 62%); color: inherit; padding: 0 2px; }
.ab-dims { display: grid; gap: 14px; }
.ab-dim { display: flex; align-items: center; gap: 14px; padding: 18px 20px; border-radius: 16px; background: #fff; border: 1px solid #e8eaf2; box-shadow: 0 6px 24px rgba(20,32,63,.06); font-weight: 600; color: var(--ab-ink); transition: transform .3s ease, box-shadow .3s ease; }
.ab-dim:hover { transform: translateX(6px); box-shadow: 0 10px 30px rgba(20,32,63,.12); }
.ab-dot { width: 12px; height: 12px; border-radius: 50%; flex: none; animation: ab-pulse 2.4s ease-in-out infinite; }
.ab-dim:nth-child(1) .ab-dot { background: var(--ab-coral); }
.ab-dim:nth-child(2) .ab-dot { background: var(--ab-gold); animation-delay: .4s; }
.ab-dim:nth-child(3) .ab-dot { background: var(--ab-teal); animation-delay: .8s; }

/* Aims */
.ab-aims { background: #f6f7fb; }
.ab-grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.ab-aim { position: relative; padding: 28px 24px; border-radius: 20px; background: #fff; border: 1px solid #e8eaf2; overflow: hidden; transition: transform .3s ease, box-shadow .3s ease; }
.ab-aim::before { content: ""; position: absolute; left: 0; top: 0; height: 4px; width: 100%; background: linear-gradient(90deg, var(--ab-coral), var(--ab-gold), var(--ab-teal)); transform: scaleX(0); transform-origin: left; transition: transform .45s ease; }
.ab-aim:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(20,32,63,.12); }
.ab-aim:hover::before { transform: scaleX(1); }
.ab-aim h3 { margin: 0 0 8px; font-size: 1.1rem; color: var(--ab-ink); }
.ab-aim p { margin: 0; color: var(--ab-muted); line-height: 1.55; font-size: .96rem; }

/* Pillars */
.ab-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.ab-pillar { padding: 30px 26px; border-radius: 20px; border: 1px solid #e8eaf2; background: #fff; transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
.ab-pillar:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(20,32,63,.12); border-color: transparent; }
.ab-num { display: inline-block; font-size: 2rem; font-weight: 800; line-height: 1; margin-bottom: 14px; background: linear-gradient(135deg, var(--ab-coral), var(--ab-gold)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.ab-pillar h3 { margin: 0 0 8px; font-size: 1.15rem; color: var(--ab-ink); }
.ab-pillar p { margin: 0; color: var(--ab-muted); line-height: 1.55; font-size: .96rem; }

/* Closing statement */
.ab-quote { position: relative; overflow: hidden; border-radius: 28px; padding: 72px 40px; text-align: center; color: #fff; background: linear-gradient(135deg, #2b1760, #5a2bb5 60%, #8a3bd8); }
.ab-quote::before, .ab-quote::after { content: ""; position: absolute; border-radius: 50%; filter: blur(60px); opacity: .55; animation: ab-float 9s ease-in-out infinite; }
.ab-quote::before { width: 280px; height: 280px; background: var(--ab-coral); left: -60px; top: -80px; }
.ab-quote::after { width: 240px; height: 240px; background: var(--ab-teal); right: -50px; bottom: -80px; animation-delay: -4s; }
.ab-quote p { position: relative; z-index: 1; margin: 0 auto; max-width: 820px; font-size: clamp(1.4rem, 3vw, 2.2rem); line-height: 1.35; font-weight: 700; }
.ab-quote em { font-style: normal; color: var(--ab-gold); }

/* Animation */
@keyframes ab-up { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
@keyframes ab-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: .6; } }
@keyframes ab-float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, 24px); } }
.ab-rv { animation: ab-up .7s ease both; animation-delay: calc(var(--i, 0) * 90ms); }
@supports (animation-timeline: view()) {
  .ab-rv { animation: ab-up linear both; animation-timeline: view(); animation-range: entry 0% entry 45%; animation-delay: 0s; }
}
@media (prefers-reduced-motion: reduce) {
  .ab *, .ab *::before, .ab *::after { animation: none !important; transition: none !important; }
}

@media (max-width: 960px) {
  .ab-intro { grid-template-columns: 1fr; gap: 32px; }
  .ab-grid4 { grid-template-columns: repeat(2, 1fr); }
  .ab-grid3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .ab-sec { padding: 52px 0; }
  .ab-grid4, .ab-grid3 { grid-template-columns: 1fr; }
  .ab-quote { padding: 52px 24px; border-radius: 22px; }
}
`;

const stagger = (i: number) => ({ "--i": i } as CSSProperties);

export default function AboutPage() {
  return (
    <Shell>
      <style>{css}</style>
      <div className="ab">
        <PageBanner variant="about" />

        {/* Intro */}
        <section className="ab-sec">
          <div className="ab-wrap ab-intro">
            <div className="ab-rv">
              <div className="ab-eyebrow"><i /><i /><i /></div>
              <p className="ab-lead">
                The Our-World Institute and Initiative aims to enable progressives to work{" "}
                <mark>collectively</mark> to develop alternative solutions, empower citizens,
                revitalise democracy, and build a <mark>fairer global order</mark>.
              </p>
            </div>
            <div className="ab-dims">
              {dimensions.map((d, i) => (
                <div className="ab-dim ab-rv" style={stagger(i)} key={d}>
                  <span className="ab-dot" />
                  {d} dimension
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aims */}
        <section className="ab-sec ab-aims">
          <div className="ab-wrap">
            <div className="ab-rv">
              <div className="ab-eyebrow"><i /><i /><i /></div>
              <h2 className="ab-h2">What we aim to do</h2>
              <p className="ab-sub">Working across normative, programmatic and organisational dimensions.</p>
            </div>
            <div className="ab-grid4">
              {aims.map((a, i) => (
                <article className="ab-aim ab-rv" style={stagger(i)} key={a.t}>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="ab-sec">
          <div className="ab-wrap">
            <div className="ab-rv">
              <div className="ab-eyebrow"><i /><i /><i /></div>
              <h2 className="ab-h2">How we get there</h2>
              <p className="ab-sub">Six commitments that guide the Institute and the Initiative.</p>
            </div>
            <div className="ab-grid3">
              {pillars.map((p, i) => (
                <article className="ab-pillar ab-rv" style={stagger(i % 3)} key={p.n}>
                  <span className="ab-num">{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing statement */}
        <section className="ab-sec" style={{ paddingTop: 0 }}>
          <div className="ab-wrap">
            <div className="ab-quote ab-rv">
              <p>
                Our world cannot be led by autocrats; it must be led by{" "}
                <em>democracies that care for people and the planet.</em>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}