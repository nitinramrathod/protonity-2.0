"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, X, ChevronDown, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitCallbackRequest } from "@/lib/api";
import { CALLBACK_REASONS } from "@/types";
import { cn } from "@/lib/utils";

const callbackSchema = z.object({
  type: z.string().default("callback"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  reason: z.string().min(1, "Please select a reason"),
});

type CallbackFormValues = z.infer<typeof callbackSchema>;

export default function CallbackButton() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { reason: "" },
  });

  const mutation = useMutation({
    mutationFn: submitCallbackRequest,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: CallbackFormValues) => {
    console.log("Submitting callback request:", data);
    mutation.mutate(data);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      mutation.reset();
      reset();
    }, 300);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-body font-semibold text-sm text-white transition-all duration-300 shadow-xl",
          "bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-cyan-500",
          "hover:scale-105 hover:shadow-glow"
        )}
        style={{ boxShadow: "0 8px 30px rgba(99,102,241,0.5)" }}
        aria-label="Request a callback"
      >
        <div className="relative">
          <Phone className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>
        <span className="hidden sm:block">Request Callback</span>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md glass rounded-3xl shadow-2xl overflow-hidden animate-fade-up">
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-electric-500 to-cyan-400" />

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-display font-bold text-xl text-white">
                    We&apos;ll Call You Back
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Typically within 30 minutes during business hours.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/10 transition-colors ml-4"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Success state */}
              {mutation.isSuccess && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    Request Received! 🎉
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our team will call you within 30 minutes. Get ready to discuss your project!
                  </p>
                  <button
                    onClick={handleClose}
                    className="btn-primary mt-6 w-full justify-center"
                  >
                    Done
                  </button>
                </div>
              )}

              {/* Error state */}
              {mutation.isError && (
                <div className="mb-4 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-300 text-sm font-medium">Submission failed</p>
                    <p className="text-red-400/70 text-xs mt-0.5">
                      {mutation.error?.message || "Please try again or call us directly."}
                    </p>
                  </div>
                </div>
              )}

              {/* Form */}
              {!mutation.isSuccess && (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Your Name
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

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input {...register("type")} type="hidden" name="type" value='callback' />
                   
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

                  {/* Reason */}
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      What can we help with?
                    </label>
                    <div className="relative">
                      <select
                        {...register("reason")}
                        className={cn(
                          "form-input appearance-none pr-10 cursor-pointer",
                          errors.reason && "border-red-500/60"
                        )}
                      >
                        <option value="" className="bg-navy-800">Select a service...</option>
                        {CALLBACK_REASONS.map((r) => (
                          <option key={r} value={r} className="bg-navy-800">
                            {r}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                    </div>
                    {errors.reason && (
                      <p className="text-red-400 text-xs mt-1">{errors.reason.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4" />
                        Request Callback
                      </>
                    )}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    Free consultation • No spam • We respect your privacy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
