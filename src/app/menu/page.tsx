"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MenuPage() {
     const [mounted, setMounted] = useState(false);

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) return null;

     return (
          <main className="fixed inset-0 z-[100] bg-brownred flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                         src="/img/m-bg.jpg"
                         alt="Menu Background"
                         fill
                         sizes="100vw"
                         className="object-cover"
                    />
               </div>

               <div className="absolute top-8 left-0 right-0 px-8 flex justify-between items-center z-10">
                    <Link href="/" className="transition-transform hover:scale-105">
                         <Image
                              src="/img/logo.png"
                              alt="SioBois Logo"
                              width={160}
                              height={54}
                              className="brightness-0 invert object-contain"
                         />
                    </Link>
                    <Link
                         href="/"
                         className="text-white text-4xl hover:text-primary transition-colors focus:outline-none"
                         aria-label="Close menu"
                    >
                         <span className="lnr lnr-cross"></span>
                    </Link>
               </div>

               <nav className="relative z-10 w-full max-w-4xl px-4">
                    <ul className="flex flex-col items-center space-y-8 md:space-y-12">
                         {[
                              { name: "Accueil", href: "/#top" },
                              { name: "Compétences", href: "/#competences" },
                              { name: "Réalisations", href: "/#realisations" },
                              { name: "Identité", href: "/#identite" },
                              { name: "Contact", href: "/#contact" },
                         ].map((item, index) => (
                              <li
                                   key={item.name}
                                   className="transform translate-y-8 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
                                   style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                   <Link
                                        href={item.href}
                                        className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-all duration-300 block"
                                   >
                                        {item.name}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </nav>

               <div className="absolute bottom-12 z-10 flex space-x-8">
                    <a
                         href="https://www.facebook.com/SioBois.officiel/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-white text-2xl hover:text-primary transition-colors"
                    >
                         <i className="fa fa-facebook"></i>
                    </a>
               </div>

               <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
          </main>
     );
}
