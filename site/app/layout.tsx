import type { Metadata } from "next";
import { Shantell_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Ensorcelled Expressions",
  description: "Imaginative and functional ceramic creations by Aiden Nelson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${shantellSans.variable}
          antialiased
        `}
      >
        <div className="bg-background page-main">
          <Navbar />
          {/* Main content padding */}
          <main className="-my-1 sm:-my-8 mx-4 sm:mx-14 md:mx-0 lg:mx-18">
            {/* Content */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
