import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Mission",
  description:
    "Learn about Panacea Solution Pvt. Ltd. — founded in 2019 in Kathmandu, Nepal. Meet our leadership team, discover our core values, and read our journey from a three-person startup to a full-spectrum technology company.",
  alternates: { canonical: "https://panaceasolution.com/about" },
  openGraph: {
    title: "About Panacea Solution — Our Story, Team & Mission",
    description:
      "Founded in 2019, Panacea Solution has grown into Nepal's premier technology partner. Meet the team and learn our story.",
    url: "https://panaceasolution.com/about",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Panacea Solution Team" }],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://panaceasolution.com/about",
  name: "About Panacea Solution Pvt. Ltd.",
  description:
    "Panacea Solution was founded in 2019 with a mission to make quality technology accessible to Nepali businesses.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://panaceasolution.com/about" },
    ],
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={aboutSchema} />
      {children}
    </>
  );
}
