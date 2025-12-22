import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Infeara: IT Support Services, Security Audit & Cloud Chennai",
  description: "Leading IT Support Services and Security Audit firm in Chennai. We provide expert Cloud Solutions and Business Consulting for your Digital Transformation.",
  icons: {
    icon: "/infeara-logo-final.png",
  },
  keywords: ["IT Support Services", "IT Outsourcing", "IT Consulting", "Chennai", "Tamil Nadu", "Managed IT Services", "VAPT", "Cloud Solutions"],
  openGraph: {
    title: "Infeara: IT Support Services, Security Audit & Cloud Chennai",
    description: "Leading IT Support Services and Security Audit firm in Chennai. We provide expert Cloud Solutions and Business Consulting for your Digital Transformation.",
    url: "https://infeara.com",
    siteName: "Infeara Technologies",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Infeara Technologies",
    "image": "https://infeara.com/infeara-logo-final.png",
    "@id": "https://infeara.com",
    "url": "https://infeara.com",
    "telephone": "+916381173289",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai",
      "addressLocality": "Chennai",
      "addressRegion": "TN",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:30",
        "closes": "18:30"
      }
    ],
    "priceRange": "$$",
    "description": "Leading IT Support Services Outsourcing and Consulting firm in Chennai, specializing in Enterprise IT Infrastructure and Security."
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} antialiased font-sans overflow-x-hidden`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RCNB7MXXCQ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RCNB7MXXCQ');
          `}
        </Script>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
