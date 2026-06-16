import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ModeToggle from "@/components/mode-toggle";
import BackgroundGrid from "@/components/shared/BackgroundGrid";
import Sidebar from "@/components/Sidebar";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <BackgroundGrid />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 md:ml-64">
              <div className="absolute top-4 right-4 z-40 md:top-6 md:right-6">
                <ModeToggle />
              </div>
              <main className="flex-1 overflow-y-auto">
                {children}
              </main>
              <footer className="flex flex-col items-center gap-2 py-6 border-t border-border text-xs text-muted-foreground bg-background">
                <span>&copy; {new Date().getFullYear()} Nahom. Built to scale.</span>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
