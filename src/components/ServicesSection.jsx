import React from "react";
import { motion } from "framer-motion";
import { PenTool, Code2, BarChart3, Rocket } from "lucide-react";

const services = [
  {
    title: "Strategic Consulting",
    subtitle: "The Blueprint",
    icon: Rocket,
    desc: "Clarity before code. We align goals, audience, and KPIs to craft a winning roadmap.",
  },
  {
    title: "UX/UI Design",
    subtitle: "The Spark",
    icon: PenTool,
    desc: "Modern, accessible interfaces that convert. Bold visuals with a frictionless flow.",
  },
  {
    title: "Full-Stack Development",
    subtitle: "The Build",
    icon: Code2,
    desc: "High-performance, scalable builds across web stacks. Secure, maintainable, and fast.",
  },
  {
    title: "Performance & SEO",
    subtitle: "The Fuel",
    icon: BarChart3,
    desc: "Speed, visibility, and continuous optimization. Data in, revenue out.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A237E]">Services</h2>
            <p className="mt-2 text-slate-700 max-w-2xl">
              The pillars of Lume Nova. Designed to work together and deliver measurable outcomes.
            </p>
          </div>
          <a
            href="#process"
            className="hidden sm:inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            VIEW OUR FULL PROCESS
          </a>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, subtitle, desc, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#1A237E] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold tracking-wider text-[#FF5722]">{subtitle}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-xl bg-gradient-to-r from-[#1A237E] via-[#1A237E] to-[#FF5722] opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="#process"
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            VIEW OUR FULL PROCESS
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
