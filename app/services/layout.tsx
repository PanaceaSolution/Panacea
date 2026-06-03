import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Services — Web, Mobile, UI/UX, Marketing & IT Consulting",
  description:
    "Panacea Solution offers full-spectrum technology services: custom web development, mobile app development (Flutter, React Native), UI/UX design, digital marketing, IT consulting, e-commerce solutions, and IT outsourcing in Nepal.",
  alternates: { canonical: "https://panaceasolution.com/services" },
  openGraph: {
    title: "Technology Services — Web, Mobile, Design & Consulting | Panacea Solution",
    description:
      "Enterprise-grade web & mobile development, UI/UX design, digital marketing, and IT consulting. Serving businesses in Nepal and beyond.",
    url: "https://panaceasolution.com/services",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Panacea Solution Services" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development & IT Consulting",
  provider: {
    "@type": "Organization",
    name: "Panacea Solution Pvt. Ltd.",
    url: "https://panaceasolution.com",
  },
  areaServed: { "@type": "Country", name: "Nepal" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Full-stack web applications with React, Next.js and Node.js" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", description: "iOS and Android apps with Flutter and React Native" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design", description: "User-centered design systems and prototypes with Figma" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting", description: "Technology strategy, architecture review, and digital transformation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "SEO, SEM, social media marketing and analytics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Solutions", description: "Custom online stores with payment gateway integration" } },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://panaceasolution.com/services" },
    ],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
