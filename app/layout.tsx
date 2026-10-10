
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Website metadata
export const metadata: Metadata = {
  title: "Yehia's Career Path",
  description:
    "A career planning website to help Yehia organize goals, explore opportunities, and track applications.",
};

// Root layout shared by all pages
export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`}>

        {/* Global Navigation */}
        <header className="site-header">
          <div className="site-header-inner">

            <Link href="/" className="site-brand">
              Yehia's Career Path
            </Link>

            <nav
              className="site-nav"
              aria-label="Main navigation"
            >
              <Link href="/">Home</Link>
              <Link href="/plan">Plan</Link>
              <Link href="/opportunities">
                Opportunities
              </Link>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </nav>

          </div>
        </header>

        {/* Active page */}
        {children}

      </body>
    </html>
  );
}
