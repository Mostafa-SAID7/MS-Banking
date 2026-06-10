import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Banknote, Fingerprint, Gauge, Globe2 } from "lucide-react";

const highlights = [
  { icon: Banknote, title: "Core Banking", body: "Ledgers, accounts, transfers, statements — built for accuracy at scale." },
  { icon: Fingerprint, title: "KYC / AML", body: "Onboarding pipelines, sanctions screening and continuous monitoring." },
  { icon: Gauge, title: "Payments at Scale", body: "Sub-100ms orchestration across cards, ACH, SEPA, UPI and crypto rails." },
  { icon: Globe2, title: "Open Banking", body: "PSD2, FDX and tokenized data sharing across financial institutions." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About"
          title={<>Engineering trust into <span className="gold-text">every transaction</span></>}
          description="8+ years architecting digital banking, payments and lending systems for tier-1 banks, neobanks and fintech challengers across 14 countries."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-3xl p-8 h-full hover-lift">
              <div className="text-sm uppercase tracking-widest text-gold mb-4">Profile</div>
              <p className="text-lg leading-relaxed text-foreground/90">
                I design and ship production-grade banking platforms — from
                <span className="text-gold"> core ledgers</span> and
                <span className="text-gold"> payment switches</span> to
                customer-facing mobile banking apps. My work spans
                compliance (PCI-DSS, SOC 2, PSD2), fraud detection,
                multi-currency accounting and high-throughput event-driven
                architectures.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I partner with banks, fintech startups and regulators to turn
                complex financial workflows into elegant, resilient software.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <div className="text-3xl font-bold gold-text">8+</div>
                  <div className="text-xs text-muted-foreground">Years in FinTech</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gold-text">40+</div>
                  <div className="text-xs text-muted-foreground">Systems shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gold-text">14</div>
                  <div className="text-xs text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 h-full hover-lift">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
