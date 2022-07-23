import Head from "next/head";
import { useState } from "react";

interface HeadProps {
  pathName: string;
}

const HeadComp = ({ pathName }: HeadProps) => {
  const [pageName, setPageName] = useState<string>(`Portfolio - ${pathName}`);
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{pageName}</title>
      <meta name="description" content="abdul muqeet portfolio" />
      <link rel="icon" href="/assets/favicon.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta name="robots" content="max-image-preview:large" />

      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://abdulmuqeet.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Abdul Muqeet Portfolio" />
      <meta
        property="og:description"
        content="Abdul Muqeet Portfolio website"
      />
      <meta property="og:url" content="https://abdulmuqeet.com" />
      <meta property="og:site_name" content="Abdul Muqeet" />
      <meta property="og:image" content="/assets/logo.png" />
      <meta property="og:image:width" content="768" />
      <meta property="og:image:height" content="400" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abdul Muqeet Portfolio" />
      <meta
        name="twitter:description"
        content="Abdul Muqeet, Software Engineer Portfolio."
      />
      <meta name="twitter:image" content="/assets/logo.png" />

      <meta name="smartbanner:title" content="Abdul Muqeet Portfolio" />
      <meta name="smartbanner:author" content="Abdul Abdul Muqeet Portfolio" />
      <meta name="smartbanner:icon-apple" content="/assets/logo.png" />
      <meta name="smartbanner:icon-google" content="/assets/logo.png" />
      <meta name="smartbanner:enabled-platforms" content="android,ios" />
      <meta name="smartbanner:close-label" content="Close" />
      <meta name="smartbanner:api" content="true" />
      {/* sitemap */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

const structuredData = `
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://abdulmuqeet.com/#website",
      "url": "https://abdulmuqeet.com",
      "name": "Abdul Muqeet Portfolio",
      "description": "Abdul Muqeet, software engineer portfolio",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": "https://abdulmuqeet.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "ImageObject",
      "@id": "https://abdulmuqeet.com/#primaryimage",
      "inLanguage": "en-US",
      "url": "/assets/logo.png",
      "width": 877,
      "height": 319,
      "caption": "abdul muqeet portfolio Logo"
    },
    {
      "@type": "WebPage",
      "@id": "https://abdulmuqeet.com/#webpage",
      "url": "https://abdulmuqeet.com/",
      "name": "Abdul Muqeet, software engineer portfolio",
      "isPartOf": { "@id": "https://abdulmuqeet.com/#website" },
      "primaryImageOfPage": {
        "@id": "https://abdulmuqeet.com/#primaryimage"
      },
      "datePublished": "2022-07-24T22:17:43+00:00",
      "dateModified": "2022-07-25T16:23:57+00:00",
      "description": "Abdul Muqeet, software engineer portfolio.",
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://abdulmuqeet.com"]
        }
      ]
    }
  ]
}
`;

export default HeadComp;
