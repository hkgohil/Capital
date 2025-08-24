import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] , variable: "--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"] ,weight: ["400",  "700"], variable: "--font-ibm-plex-serif"});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capital",
  description: "Capital is a platform for managing your finances.",
  icons : {
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
