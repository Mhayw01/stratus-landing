import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stratus-solutions.co.uk"),
  title: "Stratus Intelligence Procurement",
  description:
    "Shared Intelligence for Insurance Supply Networks. Structured oversight. Clear performance visibility. Stronger supplier partnerships.",
  openGraph: {
    title: "Stratus Intelligence Procurement",
    description:
      "Shared Intelligence for Insurance Supply Networks. Structured oversight. Clear performance visibility. Stronger supplier partnerships.",
    url: "https://stratus-solutions.co.uk",
    siteName: "Stratus Intelligence Procurement",
    images: [
      {
        url: "/stratus-meta.png",
        width: 1200,
        height: 630,
        alt: "Stratus Intelligence Procurement — Shared Intelligence for Insurance Supply Networks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratus Intelligence Procurement",
    description:
      "Shared Intelligence for Insurance Supply Networks. Structured oversight. Clear performance visibility. Stronger supplier partnerships.",
    images: ["/stratus-meta.png"],
  },
  icons: {
    icon: [
      { url: "/stratus-cloud-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://stratus-solutions.co.uk" />
        <meta property="og:title" content="Stratus Intelligence Procurement" />
        <meta
          property="og:description"
          content="Shared Intelligence for Insurance Supply Networks. Structured oversight. Clear performance visibility. Stronger supplier partnerships."
        />
        <meta property="og:image" content="https://stratus-solutions.co.uk/stratus-meta.png" />
        <meta property="og:url" content="https://stratus-solutions.co.uk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stratus Intelligence Procurement" />
        <meta
          name="twitter:description"
          content="Shared Intelligence for Insurance Supply Networks. Structured oversight. Clear performance visibility. Stronger supplier partnerships."
        />
        <meta name="twitter:image" content="https://stratus-solutions.co.uk/stratus-meta.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
