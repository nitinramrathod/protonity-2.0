"use client";

import Link from "next/link";
import {
  Globe, LayoutDashboard, Smartphone, Dumbbell,
  GraduationCap, Network, Code2, Wrench, ArrowRight
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, LayoutDashboard, Smartphone, Dumbbell,
  GraduationCap, Network, Code2, Wrench,
};

export default function ServicesOverview() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Our Services</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Everything Your Business{" "}
            <span className="gradient-text">Needs to Win Online</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From a simple landing page to a full enterprise ERP — we build software that solves real problems and drives real results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="service-card group"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display font-semibold text-base text-white mb-2 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1 text-electric-400 text-xs font-medium hover:gap-2 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary inline-flex">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
