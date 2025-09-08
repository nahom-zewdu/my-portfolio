import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import BrandMark from "@/components/BrandMark";
import BackgroundGrid from "@/components/shared/BackgroundGrid";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nahom Zewdu",
  description: "Hey, I'm Nahom. I'm a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <BackgroundGrid />
          <BrandMark />
          <main className="flex-1 pt-8">
        {children}
          </main>
          <footer className="w-full flex flex-col items-center gap-2 py-6 border-t border-border text-xs text-muted-foreground">
            <span>&copy; {new Date().getFullYear()} Nahom. Built to scale.</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
