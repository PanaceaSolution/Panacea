import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";
import { JsonLd } from "./components/JsonLd";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const BASE_URL = "https://panaceasolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Panacea Solution | Software Development & Tech Training in Nepal",
    template: "%s | Panacea Solution",
  },
  description:
    "Panacea Solution Pvt. Ltd. — Nepal's premier technology company. We build enterprise-grade web & mobile apps, deliver IT consulting, and run industry-leading training programs. 15+ projects, 120+ graduates, based in Kathmandu.",
  keywords: [
    "software development Nepal",
    "IT company Kathmandu",
    "web development Nepal",
    "mobile app development Nepal",
    "tech training Kathmandu",
    "full stack training Nepal",
    "MERN stack course Nepal",
    "Flutter developer Nepal",
    "digital marketing Nepal",
    "IT consulting Nepal",
    "Python data science course Nepal",
    "Panacea Solution",
    "software company New Baneshwor",
  ],
  authors: [{ name: "Panacea Solution Pvt. Ltd.", url: BASE_URL }],
  creator: "Panacea Solution Pvt. Ltd.",
  publisher: "Panacea Solution Pvt. Ltd.",
  category: "Technology",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Panacea Solution Pvt. Ltd.",
    title: "Panacea Solution | Software Development & Tech Training in Nepal",
    description:
      "Build enterprise software, transform your digital presence, or launch a tech career with Nepal's most trusted technology partner.",
    images: [{ url: "/assets/logo.png", width: 1200, height: 630, alt: "Panacea Solution Pvt. Ltd." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panacea Solution | Software Development & Tech Training in Nepal",
    description: "Build enterprise software and launch tech careers with Nepal's most trusted technology partner.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: [{ url: "/assets/logo.png", type: "image/png" }],
    shortcut: "/assets/logo.png",
    apple: [{ url: "/assets/logo.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Panacea Solution Pvt. Ltd.",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/logo.png`, width: 220, height: 64 },
  description: "Nepal's premier technology company specialising in enterprise software, mobile apps, UI/UX design, digital marketing, and professional tech training.",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sankhamul Marg",
    addressLocality: "New Baneshwor",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
    postalCode: "44600",
  },
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer service", email: "info@panaceasolution.com", availableLanguage: ["English", "Nepali"] },
    { "@type": "ContactPoint", contactType: "sales", email: "career@panaceasolution.com" },
  ],
  sameAs: [
    "https://www.facebook.com/panaceasolutionnepal",
    "https://www.linkedin.com/company/panacea-solution-nepal",
    "https://www.instagram.com/panaceasolutionnepal",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Panacea Solution Pvt. Ltd.",
  image: `${BASE_URL}/assets/logo.png`,
  url: BASE_URL,
  description: "Software development and professional tech training company in Kathmandu, Nepal.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sankhamul Marg",
    addressLocality: "New Baneshwor, Kathmandu",
    addressRegion: "Bagmati Province",
    addressCountry: "NP",
  },
  geo: { "@type": "GeoCoordinates", latitude: "27.6915", longitude: "85.3353" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "10:00", closes: "18:00" },
  ],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Panacea Solution",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/assets/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="antialiased min-h-screen bg-white selection:bg-teal-500/20 selection:text-teal-900">
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
