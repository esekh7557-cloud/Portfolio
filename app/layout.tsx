import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackgroundAnimation from "@/components/background-animation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ebrahim Sekh — Software Developer & Strategic Technologist",
  description:
    "Engineering scalable web solutions and digital experiences. Full-stack developer specializing in React, AI-integrated systems, and strategic business technology.",
  keywords:
    "Ebrahim Sekh, software developer, full-stack, React, Next.js, AI engineer, web solutions, portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-charcoal text-charcoal-100 font-sans">
        <BackgroundAnimation />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
