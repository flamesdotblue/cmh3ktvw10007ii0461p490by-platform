import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lume Nova moved the needle from week one. Our conversion rate jumped 34% within the first month of launch.",
    author: "VP Growth, Nimbus",
  },
  {
    quote:
      "Senior team, zero fluff. They delivered a complex build on time and under budget — and it flies.",
    author: "CTO, Helix Analytics",
  },
  {
    quote:
      "Finally a partner that speaks business and design. We saw ROI quickly with a smarter, faster site.",
    author: "Founder, Aurora Commerce",
  },
];

function EngageSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A237E]">What Clients Say</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">
            Proof that focus on outcomes beats output every time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#FF5722]" aria-hidden>
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-slate-500">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <section id="contact" className="mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A237E]">Let's build your flagship</h3>
              <p className="mt-3 text-slate-700 max-w-xl">
                Tell us about your goals and constraints. We'll respond within one business day with next steps.
              </p>
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-900">Location</dt>
                    <dd className="text-slate-600">123 Nova Street, Suite 500, Anywhere</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Email</dt>
                    <dd className="text-slate-600">hello@lumenova.agency</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Phone</dt>
                    <dd className="text-slate-600">+1 (555) 012-3456</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Social</dt>
                    <dd className="text-slate-600">@lumenova on LinkedIn, X, Dribbble</dd>
                  </div>
                </dl>
              </div>
            </div>

            <form
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch shortly.");
              }}
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A237E]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A237E]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-slate-800">Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1A237E]"
                    placeholder="Timeline, goals, budget range — whatever helps us prepare"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">We respond within one business day.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-[#FF5722] px-5 py-3 text-white font-semibold shadow-lg shadow-[#FF5722]/20 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5722]"
                  >
                    START THE CONVERSATION
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          <footer className="mt-16 border-t border-slate-200 pt-8 pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-600">© {new Date().getFullYear()} Lume Nova. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm">
                <a href="#services" className="text-slate-600 hover:text-[#1A237E]">Services</a>
                <a href="#work" className="text-slate-600 hover:text-[#1A237E]">Work</a>
                <a href="#process" className="text-slate-600 hover:text-[#1A237E]">Process</a>
                <a href="#contact" className="text-slate-600 hover:text-[#1A237E]">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </section>
  );
}

export default EngageSection;
