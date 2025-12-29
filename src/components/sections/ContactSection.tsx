/**
 * Contact Section
 * Company contact information with phone and email.
 */
export default function ContactSection() {
     return (
          <section
               id="contact"
               className="py-24 md:py-32 bg-cover bg-center bg-fixed relative"
               style={{ backgroundImage: "url('/img/contact-bg.jpg')" }}
          >
               <div className="absolute inset-0 bg-black/40 z-0"></div>
               <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
                    {/* Watermark placeholder */}
               </div>
               <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                         <h2 className="text-4xl md:text-5xl text-white font-bold mb-16 text-center uppercase tracking-tight">
                              Contactez-nous
                         </h2>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                              <div className="hidden md:block"></div>

                              <div className="space-y-10">
                                   {/* Phone */}
                                   <div className="flex items-center group">
                                        <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full mr-6 group-hover:bg-primary-hover transition-colors">
                                             <i className="fa fa-phone text-2xl text-white"></i>
                                        </div>
                                        <div>
                                             <h6 className="text-white text-uppercase text-xs tracking-widest mb-1 opacity-70">
                                                  Téléphone
                                             </h6>
                                             <a
                                                  href="tel:0645445748"
                                                  className="text-white text-2xl font-bold hover:text-primary transition-colors"
                                             >
                                                  06 45 44 57 48
                                             </a>
                                        </div>
                                   </div>

                                   {/* Email */}
                                   <div className="flex items-center group">
                                        <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full mr-6 group-hover:bg-primary-hover transition-colors">
                                             <i className="fa fa-envelope text-2xl text-white"></i>
                                        </div>
                                        <div>
                                             <h6 className="text-white text-uppercase text-xs tracking-widest mb-1 opacity-70">
                                                  Email
                                             </h6>
                                             <a
                                                  href="mailto:contact@siobois.com"
                                                  className="text-white text-2xl font-bold hover:text-primary transition-colors"
                                             >
                                                  contact@siobois.com
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
