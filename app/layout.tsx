import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gerald | My Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><nav style={{ display: "flex", gap: "16px" }}>
  <Link href="/" style={{ textDecoration: "underline" }}>Home</Link>
  <Link href="/about" style={{ textDecoration: "underline" }}>About</Link>
  <Link href="/projects" style={{ textDecoration: "underline" }}>Projects</Link>
</nav>
{children}</body>
    </html>
  );
}
