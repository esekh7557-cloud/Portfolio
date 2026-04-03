import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Web Developer & Full-Stack Developer",
  description: "I build modern, fast-loading websites and full-stack applications for restaurants and businesses in India. Affordable web development services starting at ₹15,000.",
  keywords: "web developer, web development, full-stack developer, portfolio, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white">
        {/* Background effects */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl opacity-20"></div>
        </div>

        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
