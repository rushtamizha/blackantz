import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import EnterpriseFooter from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👉 CHANGE THIS
const SITE_URL = "https://www.blackantz.com";
const SITE_NAME = "Blackantz Creatives";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Blackantz Creatives | Branding, Printing & Signage Company in Tamil Nadu",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Blackantz Creatives is a leading creative branding, printing, packaging, and signage company in Tamil Nadu offering logo design, advertising, packaging design, ACP sign boards, LED signage, brochures, event branding, and premium printing solutions.",

  keywords: [
    "Blackantz Creatives",
    "branding company in Tamil Nadu",
    "creative agency",
    "advertising agency",
    "printing services",
    "package design",
    "logo design",
    "graphic design",
    "sign board company",
    "ACP sign boards",
    "LED signage",
    "3D acrylic signage",
    "event branding",
    "business cards printing",
    "brochure design",
    "social media creatives",
    "retail branding",
    "office branding",
    "digital printing",
    "creative design services",
  ],

  authors: [{ name: "Blackantz Creatives" }],
  creator: "Blackantz Creatives",
  publisher: "Blackantz Creatives",

  applicationName: "Blackantz Creatives",

  category: "Business",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title:
      "Blackantz Creatives | Branding, Printing & Signage Company in Tamil Nadu",

    description:
      "Creative branding, package design, printing, advertising, event branding, and modern signage solutions for businesses across Tamil Nadu.",

    url: SITE_URL,
    siteName: SITE_NAME,

    images: [
      {
        url: "/SLIDER/CreativeDesignServices.jpg", // 👉 add image in public folder
        width: 1200,
        height: 630,
        alt: "Blackantz Creatives",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Blackantz Creatives | Branding, Printing & Signage Company in Tamil Nadu",

    description:
      "Creative branding, package design, printing, advertising, event branding, and modern signage solutions.",

    images: ["/og-image.jpg"],
  },

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

  icons: {
    icon: "/BLAC Logo /Favicon.png",
    shortcut: "/BLAC Logo /Favicon.png",
    apple: "/BLAC Logo /Favicon.png",
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  other: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Blackantz Creatives",

    url: SITE_URL,

    logo: `${SITE_URL}/logo.png`,

    description:
      "Blackantz Creatives offers branding, printing, signage, advertising, and packaging design services across Tamil Nadu.",

    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
    ],

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "Tamil Nadu",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <hea>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Additional Meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      </head>

      <body className="min-h-full flex flex-col bg-white text-black">
        <Navbar />

        <main className="flex-1">{children}</main>

        <EnterpriseFooter />
      </body>
    </html>
  );
}