"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
     const [isSticky, setIsSticky] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 100) {
                    setIsSticky(true);
               } else {
                    setIsSticky(false);
               }
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <header className={`default-header w-full z-50 transition-all duration-300 ${isSticky ? "fixed top-0 left-0" : "relative border-t-8 border-black"}`}>
               <div className={`sticky-header w-full navbar-bg ${isSticky ? "py-2 shadow-md" : "py-4"}`}>
                    <div className="container mx-auto px-4">
                         <div className="header-content flex justify-between items-center">
                              <div className="logo">
                                   <Link href="/#top" className="smooth">
                                        <Image src="/img/logo.png" alt="SioBois Logo" width={160} height={50} className="h-auto w-auto" />
                                   </Link>
                              </div>
                              <div className="right-bar flex items-center">
                                   <nav className="hidden md:flex items-center">
                                        <ul className="main-menu flex space-x-6 text-sm font-semibold uppercase text-white">
                                             <li><Link href="/#top" className="hover:text-primary transition-colors">Accueil</Link></li>
                                             <li><Link href="/#competences" className="hover:text-primary transition-colors">Compétences</Link></li>
                                             <li><Link href="/#realisations" className="hover:text-primary transition-colors">Réalisations</Link></li>
                                             <li><Link href="/#identite" className="hover:text-primary transition-colors">Identité</Link></li>
                                             <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                                        </ul>
                                   </nav>
                                   <div className="header-social ml-6 flex items-center">
                                        <a href="https://www.facebook.com/SioBois.officiel/" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary transition-colors">
                                             <i className="fa fa-facebook"></i>
                                        </a>
                                   </div>
                                   <Link href="/menu" className="md:hidden ml-4 text-2xl text-white hover:text-primary transition-colors">
                                        <span className="lnr lnr-menu"></span>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     );
};

export default Navbar;
