import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ZaloFloatingButton from "@/components/ZaloFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mai Phú Hưng - Building the Future of Technology",
  description: "Transform your ideas into reality with our innovative solutions. We help businesses grow and thrive in the digital age.",
  keywords: ["Mai Phú Hưng", "technology", "innovation", "business solutions", "digital transformation"],
  authors: [{ name: "Mai Phú Hưng" }],
  creator: "Mai Phú Hưng",
  publisher: "Mai Phú Hưng",
  metadataBase: new URL('https://maiphuhung.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mai Phú Hưng - Building the Future of Technology",
    description: "Transform your ideas into reality with our innovative solutions. We help businesses grow and thrive in the digital age.",
    url: 'https://maiphuhung.com',
    siteName: 'Mai Phú Hưng',
    images: [
      {
        url: '/mph.png',
        width: 1200,
        height: 630,
        alt: 'Mai Phú Hưng Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mai Phú Hưng - Building the Future of Technology",
    description: "Transform your ideas into reality with our innovative solutions. We help businesses grow and thrive in the digital age.",
    images: ['/mph.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mai Phú Hưng",
    "url": "https://maiphuhung.com",
    "logo": "https://maiphuhung.com/mph.png",
    "description": "Transform your ideas into reality with our innovative solutions. We help businesses grow and thrive in the digital age.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-79-886-8886",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": ["vi", "en"]
    },
    "sameAs": [
      "https://zalo.me/0798868886"
    ]
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        {/* Floating Zalo Chat Button */}
        <ZaloFloatingButton 
          phoneNumber="0798868886"
          zaloLink="https://zalo.me/0798868886"
        />
      </body>
    </html>
  );
}
