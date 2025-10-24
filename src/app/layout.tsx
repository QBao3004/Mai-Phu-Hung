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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
