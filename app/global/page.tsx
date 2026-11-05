import type { Metadata } from "next";
import Shell from "@/components/Shell";
import PageBanner from "@/components/PageBanner";
import GlobalTabs, { type GTab } from "@/components/GlobalTabs";

export const metadata: Metadata = {
  title: "Global Initiative",
  description: "The Global Initiative produces research and policy papers, supports thematic conferences and builds a progressive digital media network.",
};

// DRAFT COPY adapted from the client's note; client to approve wording.
const tabs: GTab[] = [
  {
    id: "research", kicker: "Ideas", title: "Research, advocacy & publications", tone: "t1",
    items: [
      "An annual State of Global Progressivism report",
      "Policy briefs and papers for progressive policy-makers, with think tanks able to opt in to work jointly",
      "Literature on key issues to reimagine socio-economic and (geo)political paradigms",
    ],
  },
  {
    id: "conferences", kicker: "Gatherings", title: "Conferences & workshops", tone: "t2",
    items: [
      "Supporting think tanks to curate thematic conferences and working groups in different nations, on themes such as climate justice and digital democracy",
      "Building ties with think tanks, civil society, movements and unions to bring grassroots issues to progressive leaders",
      "Dialogue with academics on policy research",
    ],
  },
  {
    id: "media", kicker: "Voice", title: "Communications & digital media", tone: "t3",
    items: [
      "A progressive global broadcasting channel focused on social and digital media",
      "A global federated network of smaller channels",
    ],
  },
];

const words = ["Research", "Advocacy", "Publications", "Conferences", "Think tanks", "Civil society", "Unions", "Academics", "Digital media"];

export default function GlobalPage() {
  return (
    <Shell>
      <PageBanner
        variant="global"
        title="Global"
      />
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...words, ...words].map((w, i) => <span key={i}>{w}</span>)}
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="bars"><i /><i /><i /></div>
              <h2>What the Initiative does</h2>
              <p>Choose a stream to see how the work comes together.</p>
            </div>
          </div>
          <div className="rv"><GlobalTabs tabs={tabs} /></div>
        </div>
      </section>
    </Shell>
  );
}
