import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Saran S P | Mechanical Design Engineer & Digital Product Builder",
  description:
    "Portfolio of Saran S P - Mechanical Design Engineer with 5+ years of experience in CAD, product development, and digital engineering. Also building apps, websites, and digital products with AI.",
  keywords: [
    "Mechanical Design Engineer",
    "CAD",
    "Product Development",
    "SolidWorks",
    "Engineering",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saransp.com",
    title: "Saran S P | Mechanical Design Engineer & Digital Product Builder",
    description:
      "Portfolio of Saran S P - Mechanical Design Engineer with 5+ years of experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
