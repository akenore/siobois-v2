"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

/**
 * Project IDs to display in the gallery.
 * These correspond to folders in /public/img/projets/
 */
const projectIds = [1, 2, 3, 4, 5, 9, 7, 10];

/**
 * Réalisations Section
 * Displays a grid of project images with a lightbox for fullscreen viewing.
 */
export default function RealisationsSection() {
     const [lightboxImage, setLightboxImage] = useState<string | null>(null);

     /**
      * Get the image path for a project
      */
     const getProjectImagePath = (id: number) =>
          `/img/projets/${id}/detail/Sio${String(id).padStart(2, "0")}_Retouch.jpg`;

     return (
          <>
               <section
                    id="realisations"
                    className="py-24 md:py-32 bg-cover bg-center bg-fixed relative"
                    style={{ backgroundImage: "url('/img/realisation-bg.jpg')" }}
               >
                    <div className="absolute inset-0 bg-white/70 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                         <h1 className="text-brownred text-5xl mb-16 font-bold uppercase tracking-tight">
                              Réalisations
                         </h1>

                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 overflow-hidden shadow-xl">
                              {projectIds.map((id) => (
                                   <div
                                        key={id}
                                        className="relative group aspect-square overflow-hidden cursor-pointer border border-white/20"
                                        onClick={() => setLightboxImage(getProjectImagePath(id))}
                                   >
                                        <Image
                                             src={getProjectImagePath(id)}
                                             alt={`Projet ${id}`}
                                             fill
                                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                             className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                             <p className="mb-2 font-bold uppercase tracking-widest text-xs">
                                                  Projet
                                             </p>
                                             <div className="w-12 h-px bg-white/50 mb-2"></div>
                                             <h5 className="text-2xl uppercase font-bold text-white">
                                                  {id < 10 ? `0${id}` : id}
                                             </h5>
                                        </div>
                                   </div>
                              ))}
                         </div>

                         <div className="mt-16 flex justify-center">
                              <Link
                                   href="/realisations"
                                   className="primary-btn flex items-center uppercase py-3 px-10 rounded-full tracking-wider group transition-all"
                              >
                                   Voir plus
                                   <span className="lnr lnr-arrow-right ml-3 transition-transform group-hover:translate-x-1"></span>
                              </Link>
                         </div>
                    </div>
               </section>

               {/* Lightbox for fullscreen image viewing */}
               {lightboxImage && (
                    <Lightbox
                         src={lightboxImage}
                         alt="Projet"
                         onClose={() => setLightboxImage(null)}
                    />
               )}
          </>
     );
}
