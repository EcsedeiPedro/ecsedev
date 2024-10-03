import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderContent from "@/src/components/header";
import navData from "@/src/components/header/data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ecsedev - Portfólio Profissional",
  description: "Olá! Este é meu portfólio profissional como desenvolvedor front-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <HeaderContent navData={navData} />
        {children}
      </body>
    </html>
  );
}
