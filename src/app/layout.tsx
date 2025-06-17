import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mingduo Zhao | Marketing PhD Candidate | Berkeley Haas",
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
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
