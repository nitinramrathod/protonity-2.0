"use client";

import Link from "next/link";
import {
  Dumbbell, GraduationCap, Rocket, Building2, ShoppingBag, Heart,
  ShieldCheck, MessageSquare, TrendingUp, IndianRupee, Headphones, MapPin,
  Star, ArrowRight, Quote
} from "lucide-react";
import { INDUSTRIES, WHY_CHOOSE, TECH_STACK, STATS, TESTIMONIALS } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Dumbbell, GraduationCap, Rocket, Building2, ShoppingBag, Heart,
  ShieldCheck, MessageSquare, TrendingUp, IndianRupee, Headphones, MapPin,
};

/* ——— Stats Bar ——— */
export function StatsSection() {
  return (
    <section className="py-12 bg-navy-950 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-4xl gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Industries ——— */
export function IndustriesSection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Industries We Serve</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Built for Your{" "}
            <span className="gradient-text">Industry</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We understand the unique challenges of each sector. Our solutions are tailored, not templated.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.icon] || Rocket;
            return (
              <div key={ind.label} className="group text-center p-5 rounded-2xl bg-navy-800/60 border border-surface-border hover:border-electric-500/40 hover:bg-navy-800 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-electric-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-electric-400" />
                </div>
                <div className="font-display font-semibold text-sm text-white mb-1">{ind.label}</div>
                <div className="text-slate-500 text-xs leading-snug">{ind.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ——— Why Choose ——— */
export function WhyChooseSection() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-4 inline-flex">Why Protonity?</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              The Agency That{" "}
              <span className="gradient-text">Actually Delivers</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We know you&apos;ve heard promises before. Here&apos;s what makes us different — and why our clients keep coming back.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Let&apos;s Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || ShieldCheck;
              return (
                <div key={i} className="glass-light rounded-2xl p-5 group hover:border-electric-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center mb-3 group-hover:bg-electric-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <h4 className="font-display font-semibold text-white text-sm mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Tech Stack ——— */
export function TechStackSection() {
  return (
    <section className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Technology</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Modern Stack,{" "}
            <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We use the best modern tools — not because they&apos;re trendy, but because they&apos;re battle-tested and scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-4">
              <div className="text-[10px] font-mono text-electric-400 tracking-wider uppercase mb-3 border-b border-electric-500/15 pb-2">
                {group.category}
              </div>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-slate-400 text-xs flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Testimonials Preview ——— */
export function TestimonialsPreview() {
  const preview = TESTIMONIALS.slice(0, 3);

  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Client Stories</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Real Businesses.{" "}
            <span className="gradient-text">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((t) => (
            <div key={t.id} className="service-card flex flex-col">
              <Quote className="w-8 h-8 text-electric-500/40 mb-4 flex-shrink-0" />
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{t.content}</p>

              {/* Result badge */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2 mb-4">
                <p className="text-green-400 text-xs font-medium">📈 {t.result}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/testimonials" className="btn-secondary inline-flex">
            Read All Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ——— CTA Banner ——— */
export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-600/20 via-navy-900 to-cyan-500/10" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-electric-500/15 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-label mb-6 inline-flex">Ready to Start?</span>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
          Let&apos;s Build Something{" "}
          <span className="gradient-text">Amazing Together</span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Free consultation. No hidden fees. Just an honest conversation about your project and how we can help it succeed.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:+919999999999" className="btn-secondary text-base px-8 py-4">
            Call Us Now
          </a>
        </div>
        <p className="text-slate-600 text-sm mt-6">
          Based in Jalna, Maharashtra • Available Mon–Sat, 9am–7pm IST
        </p>
      </div>
    </section>
  );
}
