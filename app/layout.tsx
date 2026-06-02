import type { Metadata } from "next";
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Panacea Solution | Enterprise Software & Tech Training in Nepal",
    template: "%s | Panacea Solution",
  },
  description:
    "Nepal's premier technology company — building enterprise-grade software, delivering AI-powered digital transformation, and training 120+ professionals. Custom web apps, mobile development, UI/UX design, and industry-leading training programs.",
  keywords: [
    "software development Nepal",
    "IT company Kathmandu",
    "web development Nepal",
    "mobile app development Nepal",
    "tech training Nepal",
    "full stack training Nepal",
    "React Next.js developer Nepal",
    "Flutter app development",
    "digital marketing Nepal",
    "IT consulting Nepal",
    "Panacea Solution",
  ],
  authors: [{ name: "Panacea Solution Pvt. Ltd." }],
  creator: "Panacea Solution Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panaceasolution.com",
    siteName: "Panacea Solution Pvt. Ltd.",
    title: "Panacea Solution | Enterprise Software & Tech Training in Nepal",
    description:
      "Build enterprise-grade software, transform your digital presence, or launch a career in tech — with Nepal's most trusted technology partner.",
    images: [
      {
        url: "/public/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Panacea Solution Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panacea Solution | Enterprise Software & Tech Training in Nepal",
    description:
      "Build enterprise-grade software and launch tech careers with Nepal's most trusted technology partner.",
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-white selection:bg-teal-500/20 selection:text-teal-900">
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
