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
  description: "A personal site built haha with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <nav className="flex gap-4 p-4 border-b">
    <Link href="/" className="underline">Home</Link>
    <Link href="/about" className="underline">About</Link>
    <Link href="/projects" className="underline">Projects</Link>
  </nav>
  {children}
</body>
    </html>
  );
}
