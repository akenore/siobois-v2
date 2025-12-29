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
  title: "SioBois | Bureau d'Études Techniques Bois & Charpente en France",
  description:
    "SioBois, bureau d'études techniques spécialisé dans les structures bois et mixtes bois-métal. Plans de fabrication, notes de calculs 3D, diagnostics solidité, fichiers Hundegger et BIM. Expertise charpente traditionnelle et lamellé-collé partout en France.",
  authors: [{ name: "SioBois - Nicolas Cauret" }],
  keywords: [
    "bureau d'études bois",
    "études techniques charpente",
    "structure bois France",
    "charpente traditionnelle",
    "lamellé-collé",
    "bois-métal",
    "plans de fabrication bois",
    "note de calculs 3D",
    "diagnostic solidité charpente",
    "fichiers Hundegger",
    "BIM bois",
    "expertise charpente",
    "SioBois",
    "Nicolas Cauret",
  ],
  icons: {
    icon: "/img/fav.png",
  },
  openGraph: {
    title: "SioBois | Bureau d'Études Techniques Bois & Charpente",
    description:
      "Expertise en structures bois et mixtes bois-métal. Plans, notes de calculs, diagnostics et fichiers de fabrication pour tous vos projets charpente en France.",
    locale: "fr_FR",
    type: "website",
    siteName: "SioBois",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.linearicons.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Linearicons-Free';
            font-display: swap;
          }
          @font-face {
            font-family: 'FontAwesome';
            font-display: swap;
          }
        `}} />
      </head>
      <body
        className={`${openSans.variable} ${poppins.variable} antialiased font-open-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
