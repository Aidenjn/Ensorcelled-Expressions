import type { Metadata } from 'next';
import { Shantell_Sans, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const shantellSans = Shantell_Sans({
  variable: '--font-shantell-sans',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Ensorcelled Expressions',
  description: 'Imaginative and functional ceramic creations by Aiden Nelson',
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
          <main className="-my-1 sm:-my-8 mx-8 sm:mx-20 md:mx-22 lg:mx-24">
            {/* Content */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
