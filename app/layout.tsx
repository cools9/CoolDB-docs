import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from "next"

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "LunarDB",
  description: "Documentation & Blog for LunarDB",
  icons: {
    icon: "/public/favicon.ico",
    // apple: "/apple-icon.png",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
