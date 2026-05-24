import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle } from "lucide-react";
import { TESTIMONIALS, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Client Testimonials | Protonity Technology",
  description:
    "Read real stories from businesses across India — gyms, schools, startups, and enterprises — who scaled with Protonity Technology.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-mesh opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-5 inline-flex">Client Stories</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            What Our Clients{" "}
            <span className="gradient-text">Actually Say</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            No made-up reviews. Real businesses, real results, real names. See why clients trust us with their most important digital investments.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-navy-950 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl gradient-text mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="service-card flex flex-col group">
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-electric-500/25 mb-4 flex-shrink-0 group-hover:text-electric-500/50 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Business type badge */}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono mb-4 w-fit">
                {t.businessType}
              </span>

              {/* Content */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Result */}
              <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl px-4 py-3 mb-5">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-300 text-xs font-medium leading-relaxed">{t.result}</p>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-bold text-white flex-shrink-0 shadow-md`}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold truncate">{t.name}</div>
                  <div className="text-slate-500 text-xs truncate">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-16 bg-navy-950 border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center mb-16">
            {[
              { value: "5.0 / 5.0", label: "Average Rating", sub: "Across all projects" },
              { value: "100%", label: "Would Recommend", sub: "Client survey results" },
              { value: "3 months", label: "Free Post-Launch Support", sub: "Every single project" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-6">
                <div className="font-display font-bold text-3xl gradient-text mb-1">{item.value}</div>
                <div className="text-white font-medium text-sm mb-1">{item.label}</div>
                <div className="text-slate-500 text-xs">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Ready to Be Our Next{" "}
              <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Join 30+ businesses across India who chose Protonity to build their digital future.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-4 inline-flex">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
