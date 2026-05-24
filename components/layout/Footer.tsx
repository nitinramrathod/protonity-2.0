import Link from "next/link";
import { Zap, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const FOOTER_SERVICES = [
  { label: "Business Websites", href: "/services#websites" },
  { label: "Web Applications", href: "/services#web-apps" },
  { label: "Mobile Apps", href: "/services#mobile-apps" },
  { label: "Gym Software", href: "/services#gym-software" },
  { label: "School Management", href: "/services#school-software" },
  { label: "ERP / CRM", href: "/services#erp-crm" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-surface-border overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-400 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none block">Protonity</span>
                <span className="text-[10px] font-mono text-electric-400 tracking-widest uppercase leading-none">Technology</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building scalable, secure, and modern software solutions for businesses across India and beyond.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-slate-400 hover:text-electric-400 transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 8459556244</span>
              </a>
              <a href="mailto:rathod173ram@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-electric-400 transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>rathod173ram@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Jalna, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-electric-400 text-sm transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-electric-500/60" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-electric-400 text-sm transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-electric-500/60" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div>
            <div className="glass rounded-2xl p-5">
              <h4 className="font-display font-semibold text-white mb-2">Ready to Build?</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Talk to our team — free consultation, no obligation.
              </p>
              <Link href="/contact" className="btn-primary text-sm py-2.5 w-full justify-center">
                Start a Project
              </Link>
              <p className="text-slate-500 text-xs mt-3 text-center">
                Typically respond within 2 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Protonity Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-400 text-xs transition-colors">Terms</Link>
            <span className="text-slate-600 text-xs flex items-center gap-1">
              Made in <span className="text-orange-400">🇮🇳</span> India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
