import Image from "next/image";
export default function HeroSection() {
     return (
          <section
               id="top"
               className="banner-area relative min-h-screen flex items-center justify-center overflow-hidden"
          >
               <div className="absolute inset-0 z-0">
                    <Image
                         src="/img/banner.jpg"
                         alt="Banner"
                         fill
                         sizes="100vw"
                         className="object-cover"
                         priority
                         fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-white/60"></div>
               </div>

               <div className="container mx-auto px-4 z-10 relative">
                    <div className="row justify-center">
                         <div className="col-lg-8 text-center">
                              <div className="banner-content">
                                   <p className="text-uppercase text-brownred font-bold mb-6 tracking-wide max-w-2xl mx-auto leading-relaxed">
                                        Pour toutes les structures bois et mixtes bois-métal des plus
                                        modestes aux plus ambitieuses, nous mettrons toutes nos
                                        compétences acquises à votre service.
                                   </p>
                                   <h1 className="text-3xl md:text-5xl lg:text-6xl text-uppercase text-brownred font-bold leading-tight mb-12">
                                        Vos projets sont nos projets,
                                        <br />
                                        votre réussite est notre réussite
                                   </h1>

                                   <div className="flex flex-col items-center mt-8">
                                        <div className="chevron-container animate-bounce">
                                             <div className="w-6 h-6 border-b-2 border-r-2 border-brownred rotate-45 mb-[-12px]"></div>
                                             <div className="w-6 h-6 border-b-2 border-r-2 border-brownred rotate-45 mb-[-12px]"></div>
                                             <div className="w-6 h-6 border-b-2 border-r-2 border-brownred rotate-45"></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
