import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = "/picture/WechatIMG5527.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  section,
}: SEOProps): Metadata {
  const siteTitle = "Mingduo Zhao | Economics Ph.D. Candidate | UC Berkeley";
  const siteDescription =
    "PhD Candidate in Economics at UC Berkeley specializing in marketing, digital platforms, and technological transformation research.";
  const baseUrl = "https://mingduo.berkeley.edu";

  const pageTitle = title
    ? `${title} | Mingduo Zhao - UC Berkeley Economics`
    : siteTitle;
  const pageDescription = description || siteDescription;
  const pageUrl = url ? `${baseUrl}${url}` : baseUrl;
  const pageImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const allKeywords = [
    "Mingduo Zhao",
    "Economics PhD",
    "UC Berkeley",
    "Marketing Research",
    "Digital Platforms",
    ...keywords,
  ];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: "Mingduo Zhao - Academic Website",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt:
            title || "Mingduo Zhao - PhD Candidate in Economics at UC Berkeley",
        },
      ],
      type: type,
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        section,
        authors: ["Mingduo Zhao"],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@mingduo_zhao",
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// Component for adding structured data to research papers
export function ResearchPaperStructuredData({
  title,
  abstract,
  url,
  publishDate,
  authors = ["Mingduo Zhao"],
  keywords = [],
}: {
  title: string;
  abstract: string;
  url: string;
  publishDate: string;
  authors?: string[];
  keywords?: string[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: title,
    abstract: abstract,
    url: url,
    datePublished: publishDate,
    author: authors.map((name) => ({
      "@type": "Person",
      name: name,
    })),
    publisher: {
      "@type": "Organization",
      name: "University of California, Berkeley",
      url: "https://www.berkeley.edu",
    },
    keywords: keywords.join(", "),
    inLanguage: "en",
    isPartOf: {
      "@type": "Website",
      name: "Mingduo Zhao - Academic Website",
      url: "https://mingduo.berkeley.edu",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
