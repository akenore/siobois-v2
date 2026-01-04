"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants/navigation";

const Navbar = () => {
     const [isSticky, setIsSticky] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsSticky(window.scrollY > 100);
          };

          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     // Lock scroll when menu is open
     useEffect(() => {
          if (isMenuOpen) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = 'unset';
          }
          return () => {
               document.body.style.overflow = 'unset';
          };
     }, [isMenuOpen]);

     // Close menu when clicking a link
     const handleLinkClick = () => {
          setIsMenuOpen(false);
     };

     return (
          <>
               <header className={`default-header w-full z-50 transition-all duration-300 ${isSticky ? "fixed top-0 left-0" : "relative"}`}>
                    <div className={`sticky-header w-full navbar-bg ${isSticky ? "py-2 shadow-md" : "py-4"}`}>
                         <div className="container mx-auto px-4">
                              <div className="header-content flex justify-between items-center">
                                   <div className="logo flex items-center">
                                        <Link href="/#top" className="smooth block">
                                             <Image
                                                  src="/img/logo.png"
                                                  alt="SioBois Logo"
                                                  width={160}
                                                  height={54}
                                                  className="object-contain"
                                                  priority
                                             />
                                        </Link>
                                   </div>
                                   <div className="right-bar flex items-center">
                                        <nav className="hidden md:flex items-center">
                                             <ul className="main-menu flex space-x-6 text-sm font-semibold uppercase text-white [&_li]:text-lg [&_li]:hover:text-primary [&_li]:transition-colors">
                                                  {NAV_LINKS.map((link) => (
                                                       <li key={link.href}>
                                                            <Link href={link.href}>{link.name}</Link>
                                                       </li>
                                                  ))}
                                             </ul>
                                        </nav>
                                        <div className="header-social ml-6 flex items-center">
                                             {SOCIAL_LINKS.map((social) => (
                                                  <a
                                                       key={social.name}
                                                       href={social.href}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-white hover:text-primary transition-colors"
                                                       aria-label={social.name}
                                                  >
                                                       {social.icon === "facebook" && (
                                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                            </svg>
                                                       )}
                                                  </a>
                                             ))}
                                        </div>
                                        <button
                                             onClick={() => setIsMenuOpen(true)}
                                             className="md:hidden ml-4 text-white hover:text-primary transition-colors p-2"
                                             aria-label="Open menu"
                                        >
                                             <svg className="w-8 h-8 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                                  <path d="M4 6h16M4 12h16M4 18h16" />
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>

               {/* Modern Mobile Menu Overlay */}
               <div className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className="absolute inset-0 bg-brownred">
                         <div className="absolute inset-0 z-0 opacity-10">
                              <Image
                                   src="/img/m-bg.jpg"
                                   alt="Menu Background"
                                   fill
                                   sizes="100vw"
                                   className="object-cover"
                              />
                         </div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col p-8">
                         <div className="flex justify-between items-center w-full">
                              <Link href="/#top" onClick={handleLinkClick}>
                                   <Image
                                        src="/img/logo.png"
                                        alt="SioBois Logo"
                                        width={160}
                                        height={54}
                                        className="brightness-0 invert object-contain"
                                   />
                              </Link>
                              <button
                                   onClick={() => setIsMenuOpen(false)}
                                   className="text-white text-4xl hover:text-primary transition-colors p-2 focus:outline-none"
                                   aria-label="Close menu"
                              >
                                   <svg className="w-10 h-10 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                        <path d="M6 18L18 6M6 6l12 12" />
                                   </svg>
                              </button>
                         </div>

                         <nav className="flex-grow flex items-center justify-center">
                              <ul className="flex flex-col items-center space-y-8">
                                   {NAV_LINKS.map((item, index) => (
                                        <li
                                             key={item.name}
                                             className={`transform transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                                             style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                             <Link
                                                  href={item.href}
                                                  onClick={handleLinkClick}
                                                  className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter hover:text-primary transition-all duration-300 block"
                                             >
                                                  {item.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </nav>

                         <div className="flex justify-center space-x-8 pb-12">
                              {SOCIAL_LINKS.map((social) => (
                                   <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-primary transition-colors"
                                        aria-label={social.name}
                                   >
                                        {social.icon === "facebook" && (
                                             <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                             </svg>
                                        )}
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Navbar;
