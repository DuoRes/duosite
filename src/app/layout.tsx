import type { Metadata } from "next";
import "./globals.css";
import { TopPopupProvider } from "@/components/TopPopupProvider";

export const metadata: Metadata = {
  title: {
    default: "Mingduo Zhao | Economics Ph.D. Candidate | UC Berkeley",
    template: "%s | Mingduo Zhao - UC Berkeley Economics",
  },
  description:
    "Mingduo Zhao is a PhD Candidate in Economics at UC Berkeley, specializing in marketing, digital platforms, social media, and technological transformation. Research focuses on intersection of marketing, economics, computer science, and statistics.",
  keywords: [
    "Mingduo Zhao",
    "Economics PhD",
    "UC Berkeley",
    "Berkeley Economics",
    "Marketing Research",
    "Digital Platforms",
    "Social Media Research",
    "Recommender Systems",
    "Consumer Behavior",
    "Technological Transformation",
    "Political Economics",
    "User Generated Content",
    "Human Computer Interaction",
    "Statistics",
    "Quantitative Marketing",
    "Academic Research",
    "Job Market Candidate",
  ],
  authors: [{ name: "Mingduo Zhao", url: "https://mingduo.berkeley.edu" }],
  creator: "Mingduo Zhao",
  publisher: "Mingduo Zhao",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mingduo.berkeley.edu",
    siteName: "Mingduo Zhao - Academic Website",
    title: "Mingduo Zhao | Economics Ph.D. Candidate | UC Berkeley",
    description:
      "PhD Candidate in Economics at UC Berkeley specializing in marketing, digital platforms, and technological transformation research.",
    images: [
      {
        url: "/picture/WechatIMG5527.jpg",
        width: 400,
        height: 400,
        alt: "Mingduo Zhao - PhD Candidate in Economics at UC Berkeley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mingduo Zhao | Economics Ph.D. Candidate | UC Berkeley",
    description:
      "PhD Candidate in Economics at UC Berkeley specializing in marketing, digital platforms, and technological transformation research.",
    images: ["/picture/WechatIMG5527.jpg"],
    creator: "@mingduo_zhao",
  },
  alternates: {
    canonical: "https://mingduo.berkeley.edu",
  },
  category: "education",
  classification: "Academic Website",
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  other: {
    "google-site-verification": "your-google-verification-code", // Replace with actual verification code
    "academic-field": "Economics, Marketing",
    institution: "University of California, Berkeley",
    department: "Department of Economics",
    status: "PhD Candidate",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mingduo Zhao",
              alternateName: "赵鸣铎",
              jobTitle: "PhD Candidate in Economics",
              affiliation: {
                "@type": "Organization",
                name: "University of California, Berkeley",
                department: "Department of Economics",
              },
              url: "https://mingduo.berkeley.edu",
              email: "mingduo@berkeley.edu",
              image: "https://mingduo.berkeley.edu/picture/WechatIMG5527.jpg",
              sameAs: [
                "https://www.linkedin.com/in/mingduo-zhao",
                "https://scholar.google.com/citations?user=USERID",
                "https://orcid.org/0000-0000-0000-0000",
              ],
              knowsAbout: [
                "Economics",
                "Marketing",
                "Digital Platforms",
                "Social Media",
                "Recommender Systems",
                "Consumer Behavior",
                "Political Economics",
                "Statistics",
                "Computer Science",
              ],
              alumniOf: "University of California, Berkeley",
              "@id": "https://mingduo.berkeley.edu#person",
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased">
        <TopPopupProvider>{children}</TopPopupProvider>
      </body>
    </html>
  );
}
