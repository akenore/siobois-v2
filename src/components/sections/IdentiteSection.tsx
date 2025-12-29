export default function IdentiteSection() {
     return (
          <section
               id="identite"
               className="relative py-48 md:py-64 bg-cover bg-fixed"
               style={{ backgroundImage: "url('/img/identite-bg.jpg')" }}
          >
               <div className="absolute inset-0 bg-white/20 z-0"></div>
               <div className="container mx-auto px-4 relative z-10 flex justify-center lg:justify-end">
                    <div className="max-w-2xl p-10 bg-white/50 lg:bg-transparent">
                         <h1 className="text-brownred text-5xl font-bold mb-10 uppercase tracking-tight">
                              Identité
                         </h1>
                         <div className="space-y-6 text-lg text-brownred font-semibold">
                              <p>Nicolas Cauret, Gérant:</p>
                              <p>
                                   Fils de charpentier creusois passionné par son métier
                                   (www.guycauret.fr)
                              </p>
                              <p>
                                   Cursus scolaire du CAP-BEP charpentier au BTS SCBH de Mouchard
                                   (39)
                              </p>
                              <p>
                                   2 ans comme technico-commercial chez l'un des plus gros
                                   fabricants de lamellé collé francais.
                              </p>
                              <p>
                                   18 ans comme responsable de la division charpente traditionnelle /
                                   lamellé-collé dans une entreprise leader dans la fourniture de
                                   charpente bois.
                              </p>
                              <p className="pt-4 font-bold border-t border-brownred/20 mt-4">
                                   Fort de ces expériences et de ce parcours professionnel, je suis à
                                   votre disposition pour tous projets bois ou mixtes bois/métal,
                                   n'hésitez pas à me contacter...
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}
