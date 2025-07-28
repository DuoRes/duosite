import type { Metadata } from "next";
import "./globals.css";
import { TopPopupProvider } from "@/components/TopPopupProvider";

export const metadata: Metadata = {
  title: "Mingduo Zhao",
  description:
    "I am currently on the 2025–2026 academic job market and expect to graduate in May 2026.",
  keywords: [
    "Marketing",
    "Ph.D.",
    "Berkeley",
    "Econ",
    "Digital Platforms",
    "Consumer Behavior",
  ],
  authors: [{ name: "Mingduo Zhao" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black antialiased">
        <TopPopupProvider>
          {children}
        </TopPopupProvider>
      </body>
    </html>
  );
}
