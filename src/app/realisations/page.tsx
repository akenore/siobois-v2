"use client";

import Link from "next/link";
import Image from "next/image";

export default function Realisations() {
     const projects = Array.from({ length: 15 }, (_, i) => i + 1);

     return (
          <main className="pt-24 min-h-screen bg-zinc-50">
               <section id="realisations" className="py-24 md:py-32 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/img/realisation-bg.jpg')" }}>
                    <div className="absolute inset-0 bg-white/80 z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                         <h1 className="text-brownred text-5xl mb-16 font-bold">Réalisations</h1>

                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 overflow-hidden shadow-2xl">
                              {projects.map((id) => (
                                   <div key={id} className="relative group aspect-square overflow-hidden cursor-pointer border border-white/10">
                                        <Image
                                             src={`/img/projets/${id}/detail/Sio${String(id).padStart(2, '0')}_Retouch.jpg`}
                                             alt={`Projet ${id}`}
                                             fill
                                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                             className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                                             <Link href={`/p${id}`} className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full text-sm font-bold uppercase transition-transform scale-90 group-hover:scale-100 mb-4">
                                                  Détail
                                             </Link>
                                             <div className="w-12 h-px bg-white/50 mb-2"></div>
                                             <h5 className="text-xl uppercase font-bold tracking-widest">Projet {id < 10 ? `0${id}` : id}</h5>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>
          </main>
     );
}
