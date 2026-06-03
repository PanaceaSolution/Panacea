import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Blog & Insights — Tech, Design, Careers & Business Strategy",
  description:
    "Read the latest articles from Panacea Solution's team on web development, mobile apps, data science, digital marketing, UI/UX design, cloud, and tech career advice for Nepal's growing tech industry.",
  alternates: { canonical: "https://panaceasolution.com/blog" },
  openGraph: {
    title: "Blog & Insights — Technology & Careers | Panacea Solution",
    description:
      "Expert articles on software development, design, digital marketing, and tech career growth from Nepal's leading tech team.",
    url: "https://panaceasolution.com/blog",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Panacea Solution Blog" }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: "https://panaceasolution.com/blog",
  name: "Panacea Solution Blog",
  description: "Technology insights, career guidance, and industry news from Nepal's premier tech company.",
  publisher: {
    "@type": "Organization",
    name: "Panacea Solution Pvt. Ltd.",
    logo: { "@type": "ImageObject", url: "https://panaceasolution.com/assets/logo.png" },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://panaceasolution.com/blog" },
    ],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={blogSchema} />
      {children}
    </>
  );
}
