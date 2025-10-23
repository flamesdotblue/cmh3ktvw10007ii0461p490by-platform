import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative">
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled ? "bg-white/80 backdrop-blur border-b border-slate-200" : "bg-white/60 backdrop-blur"
        }`}
        aria-label="Main Navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2" aria-label="Lume Nova Home">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#1A237E] text-white">
                <Flame className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-[#1A237E]">Lume Nova</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#1A237E] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#FF5722] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5722]"
              >
                IGNITE YOUR PROJECT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle Navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF5722] px-4 py-2 text-white text-sm font-semibold shadow-sm hover:opacity-90"
              >
                IGNITE YOUR PROJECT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="pt-24 sm:pt-28">
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-[#1A237E]">
                  New light for your digital growth
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 max-w-xl">
                  We don't just build websites; we ignite measurable growth through strategic design, development, and data. Lume Nova transforms potential into outcomes.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-md bg-[#FF5722] px-5 py-3 text-white font-semibold shadow-lg shadow-[#FF5722]/20 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5722]"
                  >
                    IGNITE YOUR PROJECT
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50"
                  >
                    Explore services
                  </a>
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex -space-x-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1A237E] text-white text-sm font-bold">LN</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 text-sm font-bold">UX</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white text-sm font-bold">DEV</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Senior-only team. Transparent process. ROI-first.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                  <div className="h-64 sm:h-80 w-full rounded-xl bg-gradient-to-br from-[#1A237E] via-indigo-700 to-[#FF5722]" aria-hidden />
                  <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(200px_200px_at_80%_20%,black,transparent)]">
                    <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                  </div>
                  <span className="sr-only">Placeholder: Abstract digital flame graphic</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
