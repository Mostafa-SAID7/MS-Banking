import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Lock, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40 pb-24 grain-bg">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex w-full justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Available for new fintech engagements · Q3
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mx-auto max-w-5xl text-center text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight"
        >
          Full-Stack Developer
          <br />
          <span className="gold-text">Banking & FinTech</span> Systems Specialist
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-center text-lg text-muted-foreground"
        >
          Building secure, scalable, and compliant digital banking solutions —
          from core ledgers and payment rails to mobile wallets trusted by millions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3.5 text-sm font-semibold text-primary-foreground gold-glow transition-transform hover:scale-[1.03]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 glass px-6 py-3.5 text-sm font-semibold text-foreground hover:border-gold hover:bg-surface/80 transition-all"
          >
            <Calendar className="h-4 w-4" />
            Schedule a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: ShieldCheck, k: "PCI-DSS", v: "Compliant systems" },
            { icon: Lock, k: "SOC 2", v: "Security-first" },
            { icon: Sparkles, k: "$1.2B+", v: "Volume processed" },
            { icon: ShieldCheck, k: "99.99%", v: "Avg. uptime" },
          ].map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-4 text-left hover-lift"
            >
              <s.icon className="h-5 w-5 text-gold" />
              <div className="mt-3 text-xl font-semibold">{s.k}</div>
              <div className="text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
