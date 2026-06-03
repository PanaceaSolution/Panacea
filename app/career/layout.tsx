import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Careers — Join Our Team in Kathmandu, Nepal",
  description:
    "Explore career opportunities at Panacea Solution Pvt. Ltd. in Kathmandu. We're always looking for talented engineers, designers, and educators. Competitive salary, learning budget, flexible work, and a culture that invests in people.",
  alternates: { canonical: "https://panaceasolution.com/career" },
  openGraph: {
    title: "Careers at Panacea Solution — Join Our Team in Kathmandu",
    description:
      "Work on meaningful projects with talented people. Competitive compensation, annual learning budget, and a culture of innovation.",
    url: "https://panaceasolution.com/career",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Careers at Panacea Solution" }],
  },
};

const careerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://panaceasolution.com/career",
  name: "Careers at Panacea Solution",
  description: "Join Nepal's premier technology company. Open positions, culture, and benefits.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://panaceasolution.com/career" },
    ],
  },
};

export default function CareerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={careerSchema} />
      {children}
    </>
  );
}
