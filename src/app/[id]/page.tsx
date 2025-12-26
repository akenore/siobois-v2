"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectDetail() {
     const { id } = useParams();
     const router = useRouter();
     const [currentSlide, setCurrentSlide] = useState(0);

     // In a real app, this would come from a data file. 
     // For now we replicate the logic from p1.blade.php
     const projectId = (id as string).replace('p', '');

     // Mocking images since we saw p1 had 2 images
     const images = [
          `/img/projets/${projectId}/detail/Sio${projectId.padStart(2, '0')}_Retouch.jpg`,
          `/img/projets/${projectId}/detail/Sio${projectId.padStart(2, '0')}a_Retouch.jpg`,
     ];

     const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
     const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

     return (
          <main className="pt-24 min-h-screen bg-zinc-50">
               <section className="py-24 md:py-32 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/img/realisation-bg.jpg')" }}>
                    <div className="absolute inset-0 bg-white/80 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10">
                         <div className="mb-12">
                              <Link href="/realisations" className="primary-btn flex items-center w-fit text-sm uppercase">
                                   <span className="lnr lnr-chevron-left mr-2"></span> Retour
                              </Link>
                         </div>

                         <div className="relative group max-w-5xl mx-auto aspect-[16/9] bg-black overflow-hidden rounded-xl shadow-2xl">
                              {images.map((src, index) => (
                                   <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                   >
                                        <Image
                                             src={src}
                                             alt={`Projet ${projectId} - Image ${index + 1}`}
                                             fill
                                             className="object-contain"
                                        />
                                   </div>
                              ))}

                              <button
                                   onClick={prevSlide}
                                   className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                              >
                                   <span className="lnr lnr-chevron-left text-2xl"></span>
                              </button>
                              <button
                                   onClick={nextSlide}
                                   className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                              >
                                   <span className="lnr lnr-chevron-right text-2xl"></span>
                              </button>

                              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                                   {images.map((_, index) => (
                                        <div
                                             key={index}
                                             className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-white/50'}`}
                                        ></div>
                                   ))}
                              </div>
                         </div>

                         <div className="mt-12 text-center">
                              <h1 className="text-3xl font-bold text-brownred uppercase tracking-widest">Projet {projectId.padStart(2, '0')}</h1>
                         </div>
                    </div>
               </section>
          </main>
     );
}
