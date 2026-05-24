"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send, CheckCircle, AlertCircle, Loader2,
  Phone, Mail, MapPin, Clock, MessageSquare
} from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { BUSINESS_TYPES } from "@/types";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  businessType: z.string().min(1, "Please select your business type"),
  message: z.string().min(20, "Please describe your project in at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_DETAILS = [
  { Icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { Icon: Mail, label: "Email", value: "hello@protonity.in", href: "mailto:hello@protonity.in" },
  { Icon: MapPin, label: "Location", value: "Jalna, Maharashtra, India", href: null },
  { Icon: Clock, label: "Business Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM IST", href: null },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { businessType: "" },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-hero-mesh opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label mb-5 inline-flex">
            <MessageSquare className="w-3 h-3" /> Get in Touch
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            Let&apos;s Talk About{" "}
            <span className="gradient-text">Your Project</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll get back within 2 hours with honest advice — no sales pitch.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                We&apos;re Based in Jalna
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A tight-knit team of full-stack developers committed to building software that actually works for your business.
              </p>
            </div>

            {/* Contact detail cards */}
            <div className="flex flex-col gap-3">
              {CONTACT_DETAILS.map(({ Icon, label, value, href }) => (
                <div key={label} className="glass-light rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white text-sm font-medium hover:text-electric-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise card */}
            <div className="glass rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-display font-semibold text-white text-sm">Our Promise</span>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  "Response within 2 business hours",
                  "Free consultation, zero obligation",
                  "Transparent, fixed-price quotes",
                  "No spam, no hard sell",
                ].map((item) => (
                  <li key={item} className="text-slate-400 text-xs flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-1 w-full bg-gradient-to-r from-electric-500 to-cyan-400" />
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Success state */}
                {mutation.isSuccess && (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-white mb-3">
                      Message Sent! 🎉
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-sm mx-auto">
                      We&apos;ve received your enquiry. Our team will review it and get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => mutation.reset()}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                {/* Error alert */}
                {mutation.isError && (
                  <div className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-300 text-sm font-medium">Submission Failed</p>
                      <p className="text-red-400/70 text-xs mt-0.5">
                        {mutation.error?.message || "Please try again or email us directly at hello@protonity.in"}
                      </p>
                    </div>
                  </div>
                )}

                {/* Form */}
                {!mutation.isSuccess && (
                  <>
                    <h2 className="font-display font-bold text-2xl text-white mb-1.5">
                      Send Us a Message
                    </h2>
                    <p className="text-slate-500 text-sm mb-7">
                      Fill in the details below and we&apos;ll craft a custom proposal for your project.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            {...register("name")}
                            placeholder="Rajesh Kumar"
                            className={cn("form-input", errors.name && "border-red-500/60")}
                          />
                          {errors.name && (
                            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="rajesh@example.com"
                            className={cn("form-input", errors.email && "border-red-500/60")}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Phone + Business Type */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">
                            Mobile Number <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-mono">+91</span>
                            <input
                              {...register("phone")}
                              placeholder="98765 43210"
                              maxLength={10}
                              className={cn("form-input pl-11", errors.phone && "border-red-500/60")}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1.5">
                            Business Type <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <select
                              {...register("businessType")}
                              className={cn("form-input appearance-none pr-8 cursor-pointer", errors.businessType && "border-red-500/60")}
                            >
                              <option value="" className="bg-navy-800">Select type...</option>
                              {BUSINESS_TYPES.map((type) => (
                                <option key={type} value={type} className="bg-navy-800">{type}</option>
                              ))}
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xs">▼</span>
                          </div>
                          {errors.businessType && (
                            <p className="text-red-400 text-xs mt-1">{errors.businessType.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Tell Us About Your Project <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Describe what you're looking to build, your timeline, and any specific requirements..."
                          className={cn("form-input resize-none", errors.message && "border-red-500/60")}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Your Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-slate-600 text-xs text-center">
                        By submitting, you agree to our privacy policy. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
