import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Aurora Commerce", tag: "E‑Commerce", link: "#" },
  { title: "Nimbus SaaS", tag: "SaaS", link: "#" },
  { title: "Helix Analytics", tag: "B2B", link: "#" },
];

function WorkSection() {
  return (
    <section id="work" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A237E]">Selected Work</h2>
            <p className="mt-2 text-slate-700 max-w-2xl">
              A snapshot of outcomes delivered for ambitious teams.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#1A237E] px-4 py-2 text-white text-sm font-semibold hover:opacity-90"
          >
            SEE ALL PROJECTS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
            >
              <div className="h-44 bg-gradient-to-br from-slate-200 via-slate-100 to-white" aria-hidden />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <span className="text-xs font-bold tracking-wider text-[#FF5722]">{p.tag}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">High-level case study coming soon.</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#1A237E] via-indigo-600 to-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[#1A237E] px-4 py-2 text-white text-sm font-semibold hover:opacity-90"
          >
            SEE ALL PROJECTS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <section id="process" className="mt-20">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A237E]">Our Process</h3>
            <p className="mt-2 text-slate-700 max-w-2xl">
              A clear, collaborative pipeline from spark to scale.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "Discovery", desc: "Deep dive into goals, audience, and constraints. Define KPIs and success metrics." },
              { step: "Design", desc: "UX flows, wireframes, and UI systems built for clarity and conversion." },
              { step: "Build", desc: "Robust engineering, CI/CD, and QA. Fast, accessible, and secure." },
              { step: "Launch & Scale", desc: "Optimize, iterate, and grow with data-driven insights." },
            ].map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A237E] text-white text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold tracking-wider text-[#FF5722]">STEP</span>
                </div>
                <h4 className="mt-4 text-lg font-bold text-slate-900">{s.step}</h4>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1A237E]">Why Lume Nova</h3>
            <p className="mt-2 text-slate-700 max-w-3xl">
              We combine senior talent with a transparent, outcome-focused approach. Every decision is anchored to ROI.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">ROI First</h4>
              <p className="mt-2 text-sm text-slate-600">From strategy to sprint planning, we prioritize impact over output. Metrics define success.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Senior-Only Team</h4>
              <p className="mt-2 text-sm text-slate-600">Work directly with experts across product, design, and engineering. No handoffs that dilute outcomes.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Transparent Process</h4>
              <p className="mt-2 text-sm text-slate-600">Clear timelines, proactive communication, and shared dashboards keep every step visible.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default WorkSection;
