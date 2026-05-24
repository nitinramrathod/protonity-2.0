"use client";

import Link from "next/link";
import { ArrowRight, Phone, Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-hero-mesh" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-600/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-mono tracking-wider mb-6 animate-fade-in">
              <Sparkles className="w-3 h-3" />
              Jalna, Maharashtra → Serving India & Beyond
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 animate-fade-up">
              Building{" "}
              <span className="gradient-text">Scalable Software</span>{" "}
              That Grows{" "}
              <span className="relative inline-block">
                Your Business
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10 Q75 2 150 8 Q225 14 298 6" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We build{" "}
              <span className="text-slate-200 font-medium">websites, web apps, and mobile applications</span>{" "}
              for gyms, schools, startups, and businesses across India — fast, affordable, and built to last.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link href="/contact" className="btn-primary">
                Request a Callback
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View Our Services
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {[
                { value: "50+", label: "Projects" },
                { value: "30+", label: "Clients" },
                { value: "4+ yrs", label: "Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <span className="font-display font-bold text-2xl gradient-text">{stat.value}</span>
                  <span className="text-slate-500 text-sm">{stat.label}</span>
                </div>
              ))}
              <div className="hidden sm:block w-px h-6 bg-surface-border" />
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {["RK", "PS", "AD"].map((init, i) => (
                    <div
                      key={init}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-electric-500 to-cyan-400 flex items-center justify-center text-[9px] font-bold text-white border-2 border-navy-950"
                      style={{ zIndex: 3 - i }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span className="text-slate-400 text-xs ml-1">Trusted by businesses</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main card */}
            <div className="relative w-full max-w-md">
              {/* Floating metric cards */}
              <div className="absolute -top-8 -left-8 glass rounded-2xl px-4 py-3 animate-float z-10 shadow-card">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-sm">↑</span>
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-sm">+35%</div>
                    <div className="text-slate-500 text-xs">Lead Conversion</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-4 py-3 animate-float z-10 shadow-card" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-sm">48hr</div>
                    <div className="text-slate-500 text-xs">Avg First Draft</div>
                  </div>
                </div>
              </div>

              {/* Main visual card */}
              <div className="glass rounded-3xl p-6 shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-electric-500/10 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-label">Live Project Dashboard</span>
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/60" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <span className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                  </div>

                  {/* Mock project list */}
                  {[
                    { name: "Gym Management System", status: "Live", color: "green" },
                    { name: "School ERP — Sunrise Academy", status: "In Review", color: "yellow" },
                    { name: "SwiftLogix Dashboard", status: "Building", color: "blue" },
                    { name: "E-commerce Platform", status: "Planning", color: "purple" },
                  ].map((project, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        project.color === "green" ? "bg-green-400" :
                        project.color === "yellow" ? "bg-yellow-400" :
                        project.color === "blue" ? "bg-blue-400" : "bg-purple-400"
                      }`} />
                      <span className="text-slate-300 text-sm flex-1">{project.name}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                        project.color === "green" ? "bg-green-500/15 text-green-400" :
                        project.color === "yellow" ? "bg-yellow-500/15 text-yellow-400" :
                        project.color === "blue" ? "bg-blue-500/15 text-blue-400" : "bg-purple-500/15 text-purple-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  ))}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "Next.js", "Node.js", "React Native", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/8">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
          <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </div>
      </div>
    </section>
  );
}
