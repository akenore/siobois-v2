"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="top" className="banner-area relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/banner.jpg"
            alt="Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="row justify-center">
            <div className="col-lg-8 text-center">
              <div className="banner-content">
                <p className="text-uppercase text-brownred font-bold mb-6 tracking-wide max-w-2xl mx-auto leading-relaxed">
                  Pour toutes les structures bois et mixtes bois-métal des plus modestes aux plus ambitieuses, nous mettrons toutes nos compétences acquises à votre service.
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-uppercase text-brownred font-bold leading-tight mb-12">
                  Vos projets sont nos projets,<br />votre réussite est notre réussite
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
      <section id="competences" className="competence-bg relative py-24 md:py-32 bg-fixed bg-cover" style={{ backgroundImage: "url('/img/competence-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col justify-center min-h-[400px]">
              <h3 className="text-brownred text-uppercase text-2xl md:text-3xl font-bold leading-snug">
                "Vos projets sont nos projets, <br /> votre réussite est notre réussite"
              </h3>
            </div>
            <div className="bg-white/40 p-8 rounded-lg">
              <h1 className="text-brownred text-4xl font-bold mb-8">Compétences</h1>
              <div className="text-brownred text-uppercase font-bold mb-6">
                Selon vos besoins, nous vous proposons, pour toutes vos structures bois et mixtes bois-métal:
              </div>
              <ul className="text-brownred space-y-2 mb-8 text-lg">
                {[
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
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa fa-caret-right mt-1 mr-3 text-primary"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brownred text-uppercase font-bold mb-4">
                pour toutes les structures, des plus modestes aux plus ambitieuses, nous mettrons toutes nos compétences acquises à votre service.
              </p>
              <p className="text-brownred text-uppercase font-bold">
                Par l'adaptation aux méthodes de travail de votre entreprise, nous vous apporterons l'assurance d'une optimisation technique et financière.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="realisations" className="py-24 md:py-32 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/img/realisation-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-brownred text-5xl mb-16 font-bold uppercase tracking-tight">Réalisations</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 overflow-hidden shadow-xl">
            {[1, 2, 3, 4, 5, 9, 7, 10].map((id, index) => (
              <div key={index} className="relative group aspect-square overflow-hidden cursor-pointer border border-white/20">
                <Image
                  src={`/img/projets/${id}/detail/Sio${String(id).padStart(2, '0')}_Retouch.jpg`}
                  alt={`Projet ${id}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <p className="mb-2 font-bold uppercase tracking-widest text-xs">Projet</p>
                  <div className="w-12 h-px bg-white/50 mb-2"></div>
                  <h5 className="text-2xl uppercase font-bold text-white">{id < 10 ? `0${id}` : id}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/realisations" className="primary-btn flex items-center uppercase py-3 px-10 rounded-full tracking-wider group transition-all">
              Voir plus
              <span className="lnr lnr-arrow-right ml-3 transition-transform group-hover:translate-x-1"></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="identite" className="relative py-48 md:py-64 bg-cover bg-fixed" style={{ backgroundImage: "url('/img/identite-bg.jpg')" }}>
        <div className="absolute inset-0 bg-white/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex justify-center lg:justify-end">
          <div className="max-w-2xl p-10">
            <h1 className="text-brownred text-5xl font-bold mb-10 uppercase tracking-tight">Identité</h1>
            <div className="space-y-6 text-lg text-brownred font-semibold">
              <p>Nicolas Cauret, Gérant:</p>
              <p>Fils de charpentier creusois passionné par son métier (www.guycauret.fr)</p>
              <p>Cursus scolaire du CAP-BEP charpentier au BTS SCBH de Mouchard (39)</p>
              <p>2 ans comme technico-commercial chez l'un des plus gros fabricants de lamellé collé francais.</p>
              <p>18 ans comme responsable de la division charpente traditionnelle / lamellé-collé dans une entreprise leader dans la fourniture de charpente bois.</p>
              <p className="pt-4 font-bold border-t border-brownred/20 mt-4">Fort de ces expériences et de ce parcours professionnel, je suis à votre disposition pour tous projets bois ou mixtes bois/métal, n'hésitez pas à me contacter...</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: "url('/img/contact-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* <Image src="/img/logo.png" alt="Watermark" width={800} height={300} className="brightness-0 invert object-contain opacity-40 translate-y-20" /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-16 text-center uppercase tracking-tight">Contactez-nous</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="hidden md:block"></div>

              <div className="space-y-10">
                <div className="flex items-center group">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full mr-6 group-hover:bg-primary-hover transition-colors">
                    <i className="fa fa-phone text-2xl text-white"></i>
                  </div>
                  <div>
                    <h6 className="text-white text-uppercase text-xs tracking-widest mb-1 opacity-70">Téléphone</h6>
                    <a href="tel:0645445748" className="text-white text-2xl font-bold hover:text-primary transition-colors">
                      06 45 44 57 48
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full mr-6 group-hover:bg-primary-hover transition-colors">
                    <i className="fa fa-envelope text-2xl text-white"></i>
                  </div>
                  <div>
                    <h6 className="text-white text-uppercase text-xs tracking-widest mb-1 opacity-70">Email</h6>
                    <a href="mailto:contact@siobois.com" className="text-white text-2xl font-bold hover:text-primary transition-colors">
                      contact@siobois.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
