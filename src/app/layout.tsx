import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

import Footer from "../components/Footer";
import Navbar from "../components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio using Nextjs and Tailwind Css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased bg-[#0F1724] text-white`}
      >
        <Navbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
        </body>
    </html>
  );
}
