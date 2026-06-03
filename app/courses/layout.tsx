import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Training Programs — MERN, Python, Flutter & Digital Marketing Courses",
  description:
    "Join Panacea Solution's professional training programs in Kathmandu. Full Stack MERN (6 months), Python & Data Science (4 months), Mobile App Development with Flutter (4 months), Digital Marketing (3 months). 100% placement assistance.",
  alternates: { canonical: "https://panaceasolution.com/courses" },
  openGraph: {
    title: "Tech Training Programs in Nepal — MERN, Python, Flutter | Panacea Solution",
    description:
      "Industry-designed training programs with expert instructors, real projects, and 100% placement assistance. 120+ graduates placed at top Nepal tech companies.",
    url: "https://panaceasolution.com/courses",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Panacea Solution Training Programs" }],
  },
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Professional Tech Training Programs",
  description: "Industry-focused training programs by Panacea Solution Pvt. Ltd., Kathmandu Nepal",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Full Stack MERN Development",
        description: "Complete full-stack web development using MongoDB, Express, React, and Node.js. Beginner to advanced in 6 months.",
        provider: { "@type": "Organization", name: "Panacea Solution Pvt. Ltd.", url: "https://panaceasolution.com" },
        timeRequired: "P6M",
        courseMode: "blended",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "onsite",
          location: { "@type": "Place", name: "Panacea Solution Training Center", address: "Sankhamul Marg, New Baneshwor, Kathmandu" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Python & Data Science",
        description: "Master Python programming, data analysis, machine learning, and visualization. Beginner to intermediate in 4 months.",
        provider: { "@type": "Organization", name: "Panacea Solution Pvt. Ltd.", url: "https://panaceasolution.com" },
        timeRequired: "P4M",
        courseMode: "blended",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Mobile App Development",
        description: "Build iOS and Android apps with Flutter and Dart. Beginner to advanced in 4 months.",
        provider: { "@type": "Organization", name: "Panacea Solution Pvt. Ltd.", url: "https://panaceasolution.com" },
        timeRequired: "P4M",
        courseMode: "blended",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Digital Marketing Mastery",
        description: "SEO, Google Ads, Meta Ads, analytics and content strategy. Beginner to advanced in 3 months.",
        provider: { "@type": "Organization", name: "Panacea Solution Pvt. Ltd.", url: "https://panaceasolution.com" },
        timeRequired: "P3M",
        courseMode: "blended",
      },
    },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://panaceasolution.com" },
      { "@type": "ListItem", position: 2, name: "Training Programs", item: "https://panaceasolution.com/courses" },
    ],
  },
};

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={coursesSchema} />
      {children}
    </>
  );
}
