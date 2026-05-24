import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe, LayoutDashboard, Smartphone, Dumbbell,
  GraduationCap, Network, Code2, Wrench,
  CheckCircle, ArrowRight, ChevronRight
} from "lucide-react";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | Protonity Technology",
  description:
    "Explore all services offered by Protonity Technology — from business websites and web apps to mobile apps, gym software, school management, ERP/CRM, and custom software.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, LayoutDashboard, Smartphone, Dumbbell,
  GraduationCap, Network, Code2, Wrench,
};

export default function ServicesPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Page header */}
      <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-5 inline-flex">What We Build</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Every service we offer is built around one goal: solving your business problem and driving measurable results.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-16 z-20 bg-navy-950/90 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {service.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-20">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Globe;
            const isEven = index % 2 === 0;

            return (
              <section key={service.id} id={service.id} className="scroll-mt-32">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content */}
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                          {service.title}
                        </h2>
                        <p className="text-slate-500 text-sm mt-0.5">{service.shortDesc}</p>
                      </div>
                    </div>

                    {/* Problem → Solution → Benefit */}
                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                        <span className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 mt-0.5">Problem</span>
                        <p className="text-slate-300 text-sm leading-relaxed">{service.problem}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-slate-600 rotate-90" />
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-electric-500/5 border border-electric-500/15">
                        <span className="text-electric-400 font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 mt-0.5">Solution</span>
                        <p className="text-slate-300 text-sm leading-relaxed">{service.solution}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-slate-600 rotate-90" />
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
                        <span className="text-green-400 font-mono text-xs font-bold uppercase tracking-wider flex-shrink-0 mt-0.5">Benefit</span>
                        <p className="text-slate-300 text-sm leading-relaxed">{service.benefit}</p>
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary inline-flex">
                      Get a Quote for This
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features card */}
                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="glass rounded-3xl p-6 sm:p-8 h-full">
                      <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-electric-500 to-cyan-400" />
                        What&apos;s Included
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-electric-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Badge */}
                      <div className="mt-6 pt-5 border-t border-surface-border flex items-center gap-3">
                        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${service.color}`} />
                        <span className="text-slate-500 text-xs">Custom-built for your business needs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < SERVICES.length - 1 && (
                  <div className="mt-20 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
                )}
              </section>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy-950 border-t border-surface-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            We love unique challenges. Tell us about your project — if we can build it, we will.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4 inline-flex">
            Describe Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
