import type { Metadata } from "next";
import "./globals.css";
import { TopPopupProvider } from "@/components/TopPopupProvider";

export const metadata: Metadata = {
  title: "Mingduo Zhao | Economics Ph.D. Candidate | Berkeley Econ",
  description:
    "Mingduo Zhao is a Marketing PhD Candidate at Berkeley Haas, specializing in quantitative marketing and digital platforms.",
  keywords: [
    "Marketing",
    "PhD",
    "Berkeley",
    "Haas",
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
