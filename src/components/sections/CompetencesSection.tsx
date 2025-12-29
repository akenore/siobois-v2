const competencesList = [
     "Optimisation et rendus avant-projet",
     "Relevés de structures existantes",
     "Diagnostics solidité",
     "Vérifications, modifications, renforts",
     "Missions d'expertises, rapports",
     "Note de calculs 3D, calculs sismiques",
     "Descentes de charges",
     "Plans de fabrication 3D/2D",
     "Plans de ferrures, calepinage, nomenclatures",
     "Plans de pose 2D avec repérage",
     "Fichiers de taille Hundegger",
     "Fichiers d'échange BIM",
];

export default function CompetencesSection() {
     return (
          <section
               id="competences"
               className="competence-bg relative py-24 md:py-32 bg-fixed bg-cover"
               style={{ backgroundImage: "url('/img/competence-bg.jpg')" }}
          >
               <div className="absolute inset-0 bg-white/70 z-0"></div>
               <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="text-center lg:text-left flex flex-col justify-center min-h-[400px]">
                              <h3 className="text-brownred text-uppercase text-2xl md:text-3xl font-bold leading-snug">
                                   "Vos projets sont nos projets, <br /> votre réussite est notre
                                   réussite"
                              </h3>
                         </div>
                         <div className="bg-white/40 p-8 rounded-lg">
                              <h1 className="text-brownred text-4xl font-bold mb-8">
                                   Compétences
                              </h1>
                              <div className="text-brownred text-uppercase font-bold mb-6">
                                   Selon vos besoins, nous vous proposons, pour toutes vos structures
                                   bois et mixtes bois-métal:
                              </div>
                              <ul className="text-brownred space-y-2 mb-8 text-lg">
                                   {competencesList.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                             <i className="fa fa-caret-right mt-1 mr-3 text-primary"></i>
                                             <span>{item}</span>
                                        </li>
                                   ))}
                              </ul>
                              <p className="text-brownred text-uppercase font-bold mb-4">
                                   pour toutes les structures, des plus modestes aux plus
                                   ambitieuses, nous mettrons toutes nos compétences acquises à
                                   votre service.
                              </p>
                              <p className="text-brownred text-uppercase font-bold">
                                   Par l'adaptation aux méthodes de travail de votre entreprise,
                                   nous vous apporterons l'assurance d'une optimisation technique
                                   et financière.
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}
