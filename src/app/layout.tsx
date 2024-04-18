import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './shared/Footer';
import Header from './shared/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "그린농장 뻥튀기",
  description: "단호박, 양파, 자색 고구마 쌀 도매 뻥튀기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
