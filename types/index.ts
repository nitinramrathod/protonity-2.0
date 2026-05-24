// types/index.ts

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  benefit: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  businessType: string;
  content: string;
  result: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

export interface ContactFormData {
  name: string;
  type: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export interface CallbackFormData {
  type: string;
  phone: string;
  reason: string;
  name?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export type CallbackReason =
  | "Website Development"
  | "Web Application"
  | "Mobile Application"
  | "Gym Management Software"
  | "School Management Software"
  | "ERP / CRM Solution"
  | "Custom Software"
  | "Other";

export const CALLBACK_REASONS: CallbackReason[] = [
  "Website Development",
  "Web Application",
  "Mobile Application",
  "Gym Management Software",
  "School Management Software",
  "ERP / CRM Solution",
  "Custom Software",
  "Other",
];

export const BUSINESS_TYPES = [
  "Gym / Fitness Center",
  "School / College / Institute",
  "Startup",
  "SME / Mid-size Business",
  "Enterprise",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Restaurant / Food",
  "Other",
];
