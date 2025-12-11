import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

// SVG icons for workshop & extra services
import IconInterior from "../icons/001-interior.svg";
import IconCarWash from "../icons/002-car-wash.svg";
import IconSprayGun from "../icons/003-spray-gun.svg";
import IconCar from "../icons/004-car.svg";
import IconWheelPressure from "../icons/005-wheel-pressure.svg";
import IconPart from "../icons/006-part.svg";
import IconElectrical from "../icons/007-electrical-service.svg";
import IconAirConditioner from "../icons/008-air-conditioner.svg";
import IconCars from "../icons/009-cars.svg";
import IconElectricChip from "../icons/010-electric-chip.svg";
import IconVehicle from "../icons/011-vehicle.svg";
import IconFender from "../icons/fender.svg";
import IconTow from "../icons/tow.svg";
import IconExchange from "../icons/exchange.svg";

export default function Home() {
  const [statistics, setStatistics] = useState({
    serviceCount: 0,
    appointmentCount: 0,
    clientsCount: 0,
    citiesCount: 0,
  });

  const [flippedCards, setFlippedCards] = useState({
    soferi: false,
    flote: false,
    service: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics((prev) => {
        const serviceCount =
          prev.serviceCount < 237 ? prev.serviceCount + 3 : 237;
        const appointmentCount =
          prev.appointmentCount < 5423 ? prev.appointmentCount + 55 : 5423;
        const clientsCount =
          prev.clientsCount < 12548 ? prev.clientsCount + 126 : 12548;
        const citiesCount = prev.citiesCount < 32 ? prev.citiesCount + 1 : 32;

        if (
          serviceCount === 237 &&
          appointmentCount === 5423 &&
          clientsCount === 12548 &&
          citiesCount === 32
        ) {
          clearInterval(interval);
        }

        return {
          serviceCount,
          appointmentCount,
          clientsCount,
          citiesCount,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>
          Carloom - Platformă Digitală pentru Programări Auto și Gestionare
          Flote | Service Auto Online
        </title>
        <meta
          name="description"
          content="Carloom este platforma digitală modernă pentru programări auto, gestionare flote și service-uri auto. Simplifică întreținerea mașinii tale cu programări rapide, devize electronice și istoric complet. Disponibil pentru șoferi particulari, service-uri auto și flote auto."
        />
        <meta
          name="keywords"
          content="programare auto, service auto, întreținere auto, flote auto, rent a car, ride sharing, devize auto, istoric service, ITP, revizie auto, Carloom, platformă auto, gestionare flote, service online"
        />
        <meta name="author" content="Carloom" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Romanian" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carloom.ro/" />
        <meta
          property="og:title"
          content="Carloom - Platformă Digitală pentru Programări Auto"
        />
        <meta
          property="og:description"
          content="Simplifică întreținerea mașinii tale cu programări rapide, devize electronice și istoric complet. Pentru șoferi, service-uri auto și flote."
        />
        <meta property="og:image" content="https://carloom.ro/og-image.jpg" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="Carloom" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://carloom.ro/" />
        <meta
          name="twitter:title"
          content="Carloom - Platformă Digitală pentru Programări Auto"
        />
        <meta
          name="twitter:description"
          content="Simplifică întreținerea mașinii tale cu programări rapide, devize electronice și istoric complet."
        />
        <meta name="twitter:image" content="https://carloom.ro/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://carloom.ro/" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Carloom",
              url: "https://carloom.ro",
              logo: "https://carloom.ro/logo.png",
              description:
                "Platformă digitală pentru programări auto, gestionare flote și service-uri auto",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@carloom.ro",
              },
              sameAs: [
                "https://www.facebook.com/carloom",
                "https://www.instagram.com/carloom",
              ],
            }),
          }}
        />

        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Carloom",
              applicationCategory: "AutomotiveApplication",
              operatingSystem: "Web, iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "RON",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "12548",
              },
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Carloom",
              url: "https://carloom.ro",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://carloom.ro/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white font-sans">
        {/* Navigation */}

        {/* Hero Section */}
        <section className="relative bg-[#0a192f] text-white py-16 md:py-28 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-40 h-40 border-2 border-[#00f7ff] rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[#00f7ff] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-[#00f7ff] rounded-full animate-pulse delay-2000"></div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#00f7ff]/20"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#00f7ff]/20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#00f7ff]/20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#00f7ff]/20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-6 inline-block relative group">
                <span className="relative bg-[#00f7ff]/10 text-[#00f7ff] px-4 py-2 rounded-full text-sm font-semibold border border-[#00f7ff]/30 backdrop-blur-sm z-10">
                  Platformă Modernă & Securizată
                </span>
                <span className="absolute inset-0 bg-[#00f7ff]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Platformă Digitală pentru{" "}
                <span className="bg-gradient-to-r from-[#00f7ff] to-[#00d4e6] bg-clip-text text-transparent">
                  Industria Auto
                </span>
          </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Simplifică întreținerea mașinii tale cu programări rapide,
                devize electronice și istoric complet. Pentru șoferi
                particulari, service-uri auto și flote auto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="#despre"
                  className="relative border-2 border-[#00f7ff] text-[#00f7ff] px-8 py-3 rounded-xl font-bold text-base hover:bg-[#00f7ff] hover:text-[#0a192f] transition-all transform hover:scale-105 overflow-hidden group"
                >
                  <span className="relative z-10">Vreau să încep</span>
                  <span className="absolute inset-0 bg-[#00f7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-xs">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#00f7ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>100% Securizat</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#00f7ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Conform GDPR</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#00f7ff]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Gratuit pentru început</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Despre Carloom */}
        <section id="despre" className="py-16 bg-white relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#00f7ff]/50 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] mb-3">
                  Ce este{" "}
                  <span className="text-[#00f7ff] relative">
                    <span className="relative z-10">Carloom</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00f7ff]/20 -z-0"></span>
                  </span>
                  ?
                </h2>
                <div className="w-20 h-0.5 bg-[#00f7ff] mx-auto relative">
                  <div className="absolute inset-0 bg-[#00f7ff] animate-pulse"></div>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl mb-6 text-center font-medium">
                  <strong className="text-[#0a192f]">Carloom</strong> este un
                  intermediar tehnologic modern care conectează șoferii,
                  service-urile auto și flotele auto într-o platformă digitală
                  unificată. Ne propunem să simplificăm întregul proces de
                  întreținere auto, de la programare până la gestionarea
                  documentelor.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="group relative bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#00f7ff] transition-all duration-300 hover:shadow-xl">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f7ff]/0 group-hover:border-[#00f7ff] rounded-tr-2xl transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f7ff]/0 group-hover:border-[#00f7ff] rounded-bl-2xl transition-all duration-300"></div>

                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 relative z-10">
                      Soluții Complete
                    </h3>
                    <p className="text-gray-700 relative z-10">
                      Platforma noastră oferă soluții complete pentru toate
                      categoriile de utilizatori: șoferii particulari pot
                      programa rapid servicii, service-urile auto pot gestiona
                      eficient programările și devizele, iar flotele auto pot
                      administra întreaga flotă dintr-un singur loc.
                    </p>
                  </div>
                  <div className="group relative bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#00f7ff] transition-all duration-300 hover:shadow-xl">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f7ff]/0 group-hover:border-[#00f7ff] rounded-tr-2xl transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f7ff]/0 group-hover:border-[#00f7ff] rounded-bl-2xl transition-all duration-300"></div>

                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 relative z-10">
                      Infrastructură Digitală
                    </h3>
                    <p className="text-gray-700 relative z-10">
                      <strong>Carloom nu este parte</strong> în relația
                      contractuală dintre utilizator și service/flotă. Oferim
                      doar infrastructura digitală prin care aceste interacțiuni
                      se desfășoară, garantând transparență și eficiență în
                      fiecare etapă.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#0a192f] to-[#152d4d] text-white p-8 rounded-2xl my-8 shadow-xl border-2 border-[#00f7ff]/30">
                  <h3 className="text-3xl font-bold text-[#00f7ff] mb-6 text-center">
                    Principii Fundamentale
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group flex items-start bg-white/5 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-[#00f7ff]/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00f7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <span className="text-[#00f7ff] mr-3 text-2xl font-bold relative z-10">
                        ✓
                      </span>
                      <div className="relative z-10">
                        <strong className="text-lg block mb-1">
                          Transparență
                        </strong>
                        <span className="text-gray-300">
                          Toate procesele sunt transparente și urmărite în timp
                          real
                        </span>
                      </div>
                    </div>
                    <div className="group flex items-start bg-white/5 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-[#00f7ff]/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00f7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <span className="text-[#00f7ff] mr-3 text-2xl font-bold relative z-10">
                        ✓
                      </span>
                      <div className="relative z-10">
                        <strong className="text-lg block mb-1">
                          Securitate
                        </strong>
                        <span className="text-gray-300">
                          Datele tale sunt protejate conform GDPR
                        </span>
                      </div>
                    </div>
                    <div className="group flex items-start bg-white/5 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-[#00f7ff]/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00f7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <span className="text-[#00f7ff] mr-3 text-2xl font-bold relative z-10">
                        ✓
                      </span>
                      <div className="relative z-10">
                        <strong className="text-lg block mb-1">
                          Eficiență
                        </strong>
                        <span className="text-gray-300">
                          Economisești timp și bani cu programări optimizate
                        </span>
                      </div>
                    </div>
                    <div className="group flex items-start bg-white/5 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-[#00f7ff]/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00f7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      <span className="text-[#00f7ff] mr-3 text-2xl font-bold relative z-10">
                        ✓
                      </span>
                      <div className="relative z-10">
                        <strong className="text-lg block mb-1">
                          Conveniență
                        </strong>
                        <span className="text-gray-300">
                          Totul într-un singur loc: programări, devize, istoric,
                          documente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pentru Cine este Carloom */}
        <section id="pentru-cine" className="py-24 bg-gray-50 relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#00f7ff]/50 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a192f] mb-4">
                Pentru cine este{" "}
                <span className="text-[#00f7ff] relative">
                  <span className="relative z-10">Carloom</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00f7ff]/20 -z-0"></span>
                </span>
                ?
              </h2>
              <div className="w-24 h-1 bg-[#00f7ff] mx-auto relative">
                <div className="absolute inset-0 bg-[#00f7ff] animate-pulse"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card Șoferi Particulari */}
              <div
                className="relative h-[520px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.soferi
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                    transition: "transform 0.7s ease-in-out",
                  }}
                  onClick={() =>
                    setFlippedCards((prev) => ({
                      ...prev,
                      soferi: !prev.soferi,
                    }))
                  }
                >
                  {/* Fața frontală */}
                  <div
                    className="absolute inset-0 bg-gray-50 p-8 rounded-2xl shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="w-20 h-20 bg-[#0a192f] rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
                      <svg
                        className="w-10 h-10 text-[#00f7ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-4 text-center">
                      Șoferi Particulari
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Programări rapide pentru revizia mașinii personale
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Urmărirea istoricului de întreținere auto
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Reminder-uri pentru ITP și alte verificări obligatorii
                        </p>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-[#00f7ff] font-medium">
                        Apasă pentru mai multe detalii →
                      </p>
                    </div>
                  </div>

                  {/* Fața din spate */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#152d4d] p-6 rounded-2xl shadow-lg overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      Șoferi
                    </h3>
                    <div className="space-y-3 text-white">
                      <div className="rounded-lg p-4">
                        <p className="text-sm font-semibold text-[#00f7ff] mb-2">
                          Beneficii principale:
                        </p>
                        <ul className="text-sm space-y-1.5">
                          <li>• Notificări email și prin aplicație</li>
                          <li>• Istoric complet service</li>
                          <li>• Vezi mentenanța mașinii tale</li>
                          <li>• Urmărește uzura mașinii tale</li>
                          <li>• Fii la curent cu ITP & RCA</li>
                          <li>• Urmărește cheltuielile de întreținere</li>
                          <li>• Programează-te în funcție de nevoile tale</li>
                          <li>
                            • Închiriază autovehicule din flotele înscrise pe
                            platformă
                          </li>
                          <li>• Statistici complete despre mașina ta</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-[#00f7ff] font-medium">
                        ← Apasă pentru a reveni
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Service-uri Auto */}
              <div
                className="relative h-[520px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.service
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                    transition: "transform 0.7s ease-in-out",
                  }}
                  onClick={() =>
                    setFlippedCards((prev) => ({
                      ...prev,
                      service: !prev.service,
                    }))
                  }
                >
                  {/* Fața frontală */}
                  <div
                    className="absolute inset-0 bg-gray-50 p-8 rounded-2xl shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="w-20 h-20 bg-[#0a192f] rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
                      <svg
                        className="w-10 h-10 text-[#00f7ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-4 text-center">
                      Service-uri Auto
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Sistem eficient de gestionare a programărilor
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Vizibilitate crescută pentru atragerea de noi clienți
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Comunicare simplificată cu clienții și feedback
                          imediat
                        </p>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-[#00f7ff] font-medium">
                        Apasă pentru mai multe detalii →
                      </p>
                    </div>
                  </div>

                  {/* Fața din spate */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#152d4d] p-6 rounded-2xl shadow-lg overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      Ateliere auto
                    </h3>
                    <div className="space-y-3 text-white">
                      <div className="rounded-lg p-4">
                        <p className="text-sm font-semibold text-[#00f7ff] mb-2">
                          Instrumente profesionale:
                        </p>
                        <ul className="text-sm space-y-1.5">
                          <li>• Calendar inteligent</li>
                          <li>• Gestionare stocuri de piese</li>
                          <li>• Generează devize de reparație și facturi</li>
                          <li>• Statistici avansate</li>
                          <li>• Gestionare angajați</li>
                          <li>• Personalizează profilul tău de atelier</li>
                          <li>
                            • Gestionează clientela ta și clientela Carloom
                          </li>
                          <li>• Vezi recenzii clienți</li>
                          <li>• Creștere vizibilitate</li>
                          <li className="text-[#00f7ff] font-bold">
                            • 3 LUNI GRATUIT
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-[#00f7ff] font-medium">
                        ← Apasă pentru a reveni
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Flote Auto */}
              <div
                className="relative h-[520px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative w-full h-full cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.flote
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                    transition: "transform 0.7s ease-in-out",
                  }}
                  onClick={() =>
                    setFlippedCards((prev) => ({
                      ...prev,
                      flote: !prev.flote,
                    }))
                  }
                >
                  {/* Fața frontală */}
                  <div
                    className="absolute inset-0 bg-gray-50 p-8 rounded-2xl shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="w-20 h-20 bg-[#0a192f] rounded-full flex items-center justify-center mb-6 shadow-md mx-auto">
                      <svg
                        className="w-10 h-10 text-[#00f7ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-4 text-center">
                      Flote Auto
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Administrarea întregii flote de vehicule dintr-un
                          singur cont
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Programări multiple optimizate pentru timp minim de
                          nefuncționare
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#00f7ff] mt-1 mr-2 shrink-0">
                          ✓
                        </span>
                        <p className="text-gray-600">
                          Rapoarte detaliate și statistici de întreținere
                        </p>
                      </li>
                    </ul>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-[#00f7ff] font-medium">
                        Apasă pentru mai multe detalii →
                      </p>
                    </div>
                  </div>

                  {/* Fața din spate */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#152d4d] p-6 rounded-2xl shadow-lg overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      Flote Auto
                    </h3>
                    <div className="space-y-3 text-white">
                      <div className="rounded-lg p-4">
                        <p className="text-sm font-semibold text-[#00f7ff] mb-2">
                          Soluții enterprise:
                        </p>
                        <ul className="text-sm space-y-1.5">
                          <li>• Afaceri de ride-sharing sau rent a car</li>
                          <li>• Dashboard centralizat</li>
                          <li>• Incarcă rapoarte CSV Uber / Bolt</li>
                          <li>• Gestionare șoferi</li>
                          <li>• Urmărește performanța șoferiilor</li>
                          <li>
                            • Gestionează flota ta și vehiculele înscrise pe
                            platformă
                          </li>
                          <li>
                            • Gestionează o afacere de rental de autovehicule
                          </li>
                          <li>• Atrage potențiali clienți</li>
                          <li>• Calendar cu închirieri</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-[#00f7ff] font-medium">
                        ← Apasă pentru a reveni
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcționalități Principale */}
        <section id="servicii" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a192f] mb-4">
                Funcționalități{" "}
                <span className="text-[#00f7ff]">Principale</span>
              </h2>
              <div className="w-24 h-1 bg-[#00f7ff] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Programare Rapidă",
                  description:
                    "În doar câteva minute poți face o programare la service-ul auto preferat, fără telefoane și așteptare.",
                },
                {
                  title: "Devize Electronice",
                  description:
                    "Primești devize electronice direct în platformă, pe care le poți accepta sau respinge cu un singur click.",
                },
                {
                  title: "Istoric Complet",
                  description:
                    "Păstrează evidența tuturor reparațiilor și intervențiilor pentru mașina ta într-un singur loc.",
                },
                {
                  title: "Notificări Automate",
                  description:
                    "Primești notificări despre programări, expirări ITP/RCA/revizii și actualizări de status.",
                },
                {
                  title: "Service-uri Verificate",
                  description:
                    "Toate service-urile din platformă sunt verificate și evaluate de comunitatea noastră de șoferi.",
                },
                {
                  title: "Gestionare Documente",
                  description:
                    "Încarcă și gestionează toate documentele auto: ITP, RCA, asigurări, facturi, devize.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#00f7ff] transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f7ff]/0 group-hover:border-[#00f7ff] rounded-tr-xl transition-all duration-300"></div>

                  <div className="w-12 h-12 bg-[#0a192f] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00f7ff] transition-all duration-300 relative z-10 group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-[#00f7ff] group-hover:text-[#0a192f] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f7ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tipuri de Atelier */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          {/* Decorative accent line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#00f7ff]/50 to-transparent"></div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-14 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a192f] mb-4">
                Tipuri de{" "}
                <span className="text-[#00f7ff] relative">
                  <span className="relative z-10">Atelier</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00f7ff]/20 -z-0"></span>
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
                12 tipuri de ateliere auto, acoperite cap‑coadă – de la
                spălătorie și detailing, până la service mecanic, electric și
                ITP.
              </p>
              <div className="mt-6 w-24 h-1 bg-[#00f7ff] mx-auto rounded-full shadow-[0_0_25px_rgba(0,247,255,0.5)]"></div>
            </div>

            {/* Layout simplu, premium: grid simetric cu icon-uri */}
            <div className="max-w-6xl mx-auto mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Asistență Rutieră",
                  desc: "Intervenții la drum, inclusiv tractare și ajutor rapid în caz de pană.",
                  icon: IconTow,
                },
                {
                  name: "Mecanică Auto",
                  desc: "Intervenții mecanice, revizii și reparații majore cu istoric clar.",
                  icon: IconPart,
                },
                {
                  name: "Electrică Auto",
                  desc: "Diagnosticare și reparații pe partea electrică și electronică.",
                  icon: IconElectrical,
                },
                {
                  name: "Climatizare & AC",
                  desc: "Verificare și întreținere sisteme de climatizare și aer condiționat.",
                  icon: IconAirConditioner,
                },
                {
                  name: "ECU & Softuri Auto",
                  desc: "Diagnoză avansată, mapping și update-uri de software pentru ECU.",
                  icon: IconElectricChip,
                },
                {
                  name: "Tuning & Personalizare",
                  desc: "Tuning estetic și de performanță, jante, body kit și upgrade-uri speciale.",
                  icon: IconCars,
                },
                {
                  name: "Detailing Auto",
                  desc: "Curățare, protecție și finisare pentru un look de showroom.",
                  icon: IconInterior,
                },
                {
                  name: "Spălătorie Auto",
                  desc: "Spălare delicată, uscare și finisare rapidă pentru flote și mașini personale.",
                  icon: IconCarWash,
                },
                {
                  name: "Vopsitorie",
                  desc: "Reparații vizuale, vopsire completă sau parțială și retușuri premium.",
                  icon: IconSprayGun,
                },
                {
                  name: "Tinichigerie",
                  desc: "Îndreptări, sudură și corecții de caroserie după incidente.",
                  icon: IconFender,
                },
                {
                  name: "Vulcanizare",
                  desc: "Schimb cauciucuri, echilibrare roți și verificări presiune.",
                  icon: IconWheelPressure,
                },
                {
                  name: "Stație ITP",
                  desc: "Inspecții tehnice periodice și verificări legale integrate în istoric.",
                  icon: IconVehicle,
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(15,23,42,0.20)] hover:border-[#00f7ff]/80"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent opacity-80" />
                  <div className="relative p-6 flex gap-4 items-start">
                    <div className="icon-teal flex h-14 w-14 items-center justify-center rounded-xl bg-[#0a192f] border border-[#00f7ff]/60 overflow-hidden">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#0a192f] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
          </p>
        </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistici */}
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#00f7ff] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 border-2 border-[#00f7ff] rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00f7ff]/20 hover:border-[#00f7ff] transition-all transform hover:scale-105">
                <div className="text-6xl font-bold text-[#00f7ff] mb-3">
                  {statistics.serviceCount}+
                </div>
                <div className="text-gray-300 text-lg font-medium">
                  Service-uri Partenere
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00f7ff]/20 hover:border-[#00f7ff] transition-all transform hover:scale-105">
                <div className="text-6xl font-bold text-[#00f7ff] mb-3">
                  {statistics.appointmentCount}+
                </div>
                <div className="text-gray-300 text-lg font-medium">
                  Programări Realizate
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00f7ff]/20 hover:border-[#00f7ff] transition-all transform hover:scale-105">
                <div className="text-6xl font-bold text-[#00f7ff] mb-3">
                  {statistics.clientsCount}+
                </div>
                <div className="text-gray-300 text-lg font-medium">
                  Clienți Mulțumiți
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00f7ff]/20 hover:border-[#00f7ff] transition-all transform hover:scale-105">
                <div className="text-6xl font-bold text-[#00f7ff] mb-3">
                  {statistics.citiesCount}
                </div>
                <div className="text-gray-300 text-lg font-medium">
                  Orașe Acoperite
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 border-2 border-[#00f7ff] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 border-2 border-[#00f7ff] rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Gata să rezolvi problemele auto{" "}
                <span className="text-[#00f7ff]">fără stres</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                Încearcă Carloom astăzi și descoperă cât de ușor poate fi să-ți
                întreții mașina!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://app.carloom.ro/register"
                  className="group bg-[#00f7ff] text-[#0a192f] px-12 py-5 rounded-xl font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-[#00f7ff]/50 flex items-center gap-2"
                >
                  <span>Începe Acum Gratuit</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
          </a>
          <a
                  href="https://app.carloom.ro/login"
                  className="border-2 border-[#00f7ff] text-[#00f7ff] px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#00f7ff] hover:text-[#0a192f] transition-all transform hover:scale-105"
                >
                  Ai deja cont? Conectează-te
          </a>
        </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a192f] text-white py-12 border-t-2 border-[#00f7ff]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[#00f7ff] mb-4">
                  Carloom
                </h3>
                <p className="text-gray-400">
                  Platformă digitală pentru programări auto, gestionare flote și
                  service-uri auto.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Link-uri Rapide</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#despre"
                      className="hover:text-[#00f7ff] transition"
                    >
                      Despre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#servicii"
                      className="hover:text-[#00f7ff] transition"
                    >
                      Servicii
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pentru-cine"
                      className="hover:text-[#00f7ff] transition"
                    >
                      Pentru Cine
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="https://app.carloom.ro/me/terms"
                      className="hover:text-[#00f7ff] transition"
                    >
                      Termeni și Condiții
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.carloom.ro/me/gdpr"
                      className="hover:text-[#00f7ff] transition"
                    >
                      GDPR & Confidențialitate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="mailto:contact@carloom.ro"
                      className="hover:text-[#00f7ff] transition"
                    >
                      contact@carloom.ro
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:gdpr@carloom.ro"
                      className="hover:text-[#00f7ff] transition"
                    >
                      gdpr@carloom.ro
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Carloom. Toate drepturile
                rezervate.
              </p>
            </div>
          </div>
        </footer>
    </div>
    </>
  );
}
