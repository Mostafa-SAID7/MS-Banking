import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl border border-border px-4 py-3 md:px-6 transition-all ${
            scrolled ? "glass shadow-[var(--shadow-elegant)]" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-gold)] text-primary-foreground gold-glow">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span>
              Aaron<span className="gold-text">.fin</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-[var(--gradient-gold)] px-4 py-2 text-sm font-semibold text-primary-foreground gold-glow transition-transform hover:scale-[1.03]"
            >
              Hire Me
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60"
              aria-label="Open menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
