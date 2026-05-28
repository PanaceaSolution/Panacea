import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panacea Solution | Premium Skill Development, Training & IT Solutions",
  description: "Empowering talent and accelerating digital innovation. We deliver world-class training programs, custom web & mobile app development, UI/UX design, and enterprise IT consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen selection:bg-blue-500/30 selection:text-blue-900 bg-slate-50/50">
        {children}
      </body>
    </html>
  );
}

