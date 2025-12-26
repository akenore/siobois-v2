import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SioBois | Études Techniques",
  description: "Pour toutes les structures bois et mixtes bois-métal des plus modestes aux plus ambitieuses, nous mettrons toutes nos compétences acquises à votre service.",
  authors: [{ name: "CodePixar" }],
  keywords: ["siobois", "bois", "construction bois", "bois-metal"],
  icons: {
    icon: "/img/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${openSans.variable} ${poppins.variable} antialiased font-open-sans`}
      >
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
