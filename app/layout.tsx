import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/lib/query-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CallbackButton from "@/components/ui/CallbackButton";

export const metadata: Metadata = {
  title: {
    default: "Protonity Technology Pvt. Ltd. | Software Development Company in Jalna",
    template: "%s | Protonity Technology",
  },
  description:
    "Protonity Technology builds scalable websites, web apps, mobile apps, and custom software for businesses in India and beyond. Expert developers in Jalna, Maharashtra.",
  keywords: [
    "software development company Jalna",
    "web development Maharashtra",
    "mobile app development India",
    "gym management software",
    "school management system",
    "custom software development",
    "ERP CRM solution India",
  ],
  authors: [{ name: "Protonity Technology Pvt. Ltd." }],
  creator: "Protonity Technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://protonity.in",
    siteName: "Protonity Technology",
    title: "Protonity Technology | Scalable Software Solutions",
    description:
      "We build websites, web apps, and mobile apps that grow your business. Based in Jalna, serving clients across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Protonity Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protonity Technology | Software Development",
    description: "Scalable websites, web apps & mobile apps for Indian businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-navy-900 text-slate-200 font-body antialiased">
        <QueryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CallbackButton />
        </QueryProvider>
      </body>
    </html>
  );
}
