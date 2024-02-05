import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import 'dotenv/config'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "A Template For Building Next App",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(
        inter.className,
        'relative h-full font-sans antialiased'
      )}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
