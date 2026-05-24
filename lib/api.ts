// lib/api.ts
import axios from "axios";
import { ContactFormData, CallbackFormData, ApiResponse } from "@/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  }
);

export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>("/send-mail", data);
  return response.data;
};

export const submitCallbackRequest = async (
  data: CallbackFormData
): Promise<ApiResponse> => {
  const response = await api.post<ApiResponse>("/send-mail", data);
  return response.data;
};

export default api;
