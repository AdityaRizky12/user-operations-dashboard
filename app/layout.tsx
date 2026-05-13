import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "User Operations Dashboard",
  description:
    "A modern dashboard for managing users, posts, and todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-screen bg-muted/40">
        <Navbar />

        <div className="flex min-h-[calc(100vh-65px)]">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="flex flex-1 flex-col">
            <main className="flex-1 p-4 sm:p-6">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}