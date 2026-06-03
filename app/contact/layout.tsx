import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote or Book a Free Demo",
  description:
    "Get in touch with Panacea Solution Pvt. Ltd. in Kathmandu, Nepal. Request a project proposal, book a free demo class, or ask about our training programs. We respond within 24 hours.",
  alternates: { canonical: "https://panaceasolution.com/contact" },
  openGraph: {
    title: "Contact Panacea Solution — Get a Quote or Book a Free Demo",
    description:
      "Start your software project or enroll in a training program. Free consultation, response within 24 hours.",
    url: "https://panaceasolution.com/contact",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Contact Panacea Solution" }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://panaceasolution.com/contact",
  name: "Contact Panacea Solution",
  description: "Contact page for Panacea Solution Pvt. Ltd., Kathmandu, Nepal.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://panaceasolution.com/contact" },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "Panacea Solution Pvt. Ltd.",
    email: "info@panaceasolution.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sankhamul Marg",
      addressLocality: "New Baneshwor, Kathmandu",
      addressCountry: "NP",
    },
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={contactSchema} />
      {children}
    </>
  );
}
