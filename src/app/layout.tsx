import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0F3D3E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PU – स्वास्थ्य NOVA 2027 | Smart Nursing & Healthcare Innovation",
  description: "International Conference on Smart Nursing and Healthcare Innovation. Advancing Predictive, Critical and Personalised Care Through AI, Digital Technologies and Nursing-Led Multidisciplinary Innovation. 18–19 February 2027, Parul University, Vadodara, Gujarat, India.",
  keywords: [
    "Smart Nursing",
    "Healthcare Innovation",
    "Parul University",
    "PU NOVA 2027",
    "Swasthya Nova 2027",
    "Critical Care AI",
    "Digital Health",
    "IoMT",
    "Nursing Informatics",
    "Vadodara Nursing Conference"
  ],
  authors: [{ name: "Faculty of Nursing, Parul University" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen w-full m-0 p-0 flex flex-col">{children}</body>
    </html>
  );
}
