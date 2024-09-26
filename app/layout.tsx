import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className='relative'>
        <div className="block fixed bottom-0 right-0 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#ff00bb] blur-[150px] rounded-full"></div>
        <div className="block fixed top-0 left-0 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#ff00bb] blur-[150px] rounded-full"></div>
        <div className="block fixed top-0 right-3 w-[380px] h-[400px] shadow-xl opacity-[0.25] bg-[#00e1ff] blur-[150px] rounded-full"></div>

        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
