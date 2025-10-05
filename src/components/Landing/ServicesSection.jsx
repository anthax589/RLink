import React, { useEffect } from "react";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/Executive.svg";
import ReferenceCheck from "../../assets/svg/ReferenceCheck.svg";
import Marquee from "react-fast-marquee";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const serviceCards = [
    {
      title: "人材紹介",
      image: Excecutive,
      alt: "人材紹介",
    },
    {
      title: "人材派遣・業務委託",
      image: Staffing,
      alt: "人材派遣・業務委託",
    },
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      alt: "採用戦略アドバイザリー＆RPO",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      alt: "HRプロダクト",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="h-screen py-20 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
      }}
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-center justify-center">
        <TypewriterOnScroll
          text="- サービス -"
          delay={20}
          threshold={0.5}
          className="ml-2"
          letterClassName="text-white text-lg 2xl:text-2xl font-bold tracking-widest mb-4 text-center"
        />
        <h1
          className="text-white text-3xl xl:text-4xl font-bold leading-tight text-nowrap text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Grid */}
      <div
        className="w-full max-w-5xl mb-12"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="grid grid-cols-2 gap-16">
          {serviceCards.map((card, index) => {
            // Professional animations for each card
            const getHoverAnimation = (cardIndex) => {
              switch (cardIndex) {
                case 0:
                  return "hover:shadow-xl [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]"; // Flip animation
                case 1:
                  return "hover:-translate-x-2 hover:shadow-xl hover:scale-105"; // Slide left
                case 2:
                  return "hover:translate-x-2 hover:shadow-xl hover:scale-105"; // Slide right
                case 3:
                  return "hover:-translate-y-2 hover:shadow-xl hover:scale-105"; // Subtle drop
                default:
                  return "hover:scale-105";
              }
            };

            // Special handling for flip card (first card)
            if (index === 0) {
              return (
                <div
                  key={index}
                  className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform flex items-center justify-center relative group ${getHoverAnimation(
                    index
                  )}`}
                  style={{
                    minHeight: "120px",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center gap-4 p-6 bg-white transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-black text-center"
                      style={{ fontFamily: "Inter_Bold" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 w-full h-full bg-[#575757] flex items-center justify-center transition-transform duration-700 group-hover:[transform:rotateY(0deg)]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-white text-lg font-semibold mb-2 tracking-wide">
                        This is only a placeholder
                      </p>
                      <div className="w-16 h-0.5 bg-white mx-auto"></div>
                    </div>
                  </div>
                </div>
              );
            }

            // Card 2: Slide and Scale Animation
            if (index === 1) {
              return (
                <div
                  key={index}
                  className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform flex items-center justify-center relative group overflow-hidden hover:-translate-x-3 hover:scale-110`}
                  style={{ minHeight: "120px" }}
                >
                  {/* Original Content with slide effect */}
                  <div className="flex items-center justify-center gap-4 w-full transition-all duration-600 ease-out group-hover:translate-x-8 group-hover:opacity-0">
                    <div className="flex-shrink-0 transition-transform duration-600 group-hover:-rotate-45">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-black text-center transition-all duration-600"
                      style={{ fontFamily: "Inter_Bold" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Slide-in overlay from left */}
                  <div className="absolute inset-0 bg-[#575757] flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out">
                    <div className="text-center transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-700 ease-out delay-200">
                      <p className="text-white text-lg font-semibold mb-2 tracking-wide">
                        This is only a placeholder
                      </p>
                    
                    </div>
                  </div>
                </div>
              );
            }

            // Card 3: Professional Fade & Scale Animation
            if (index === 2) {
              return (
                <div
                  key={index}
                  className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-600 ease-out transform flex items-center justify-center relative group overflow-hidden hover:scale-105 hover:-translate-y-1`}
                  style={{ minHeight: "120px" }}
                >
                  {/* Original Content with elegant fade */}
                  <div className="flex items-center justify-center gap-4 w-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95">
                    <div className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-6">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-black text-center transition-all duration-500"
                      style={{ fontFamily: "Inter_Bold" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Professional overlay with sophisticated animation */}
                  <div className="absolute inset-0 bg-[#575757] flex items-center justify-center opacity-0 group-hover:opacity-95 transition-all duration-500 ease-out">
                    <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-600 ease-out delay-100">
                      <p className="text-white text-lg font-semibold mb-3 tracking-wide transform scale-75 group-hover:scale-100 transition-transform duration-400 delay-200">
                        This is only a placeholder
                      </p>
                      <div className="w-16 h-0.5 bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-400 origin-center"></div>
                    </div>
                  </div>
                </div>
              );
            }

            // Card 4: Accordion/Expand Animation
            if (index === 3) {
              return (
                <div
                  key={index}
                  className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform flex items-center justify-center relative group overflow-hidden hover:-translate-y-3 hover:scale-105`}
                  style={{ minHeight: "120px" }}
                >
                  {/* Original Content with compress effect */}
                  <div className="flex items-center justify-center gap-4 w-full transition-all duration-600 ease-out group-hover:scale-y-0 group-hover:-translate-y-4">
                    <div className="flex-shrink-0 transition-transform duration-600 group-hover:scale-x-0">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-black text-center transition-all duration-600"
                      style={{ fontFamily: "Inter_Bold" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Expanding overlay from bottom */}
                  <div className="absolute inset-0 bg-[#575757] flex items-center justify-center scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-out">
                    <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-600 ease-out delay-300">
                      <p className="text-white text-lg font-semibold mb-2 tracking-wide">
                        This is only a placeholder
                      </p>
                      <div className="w-16 h-0.5 bg-white mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-800 delay-600"></div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform flex items-center justify-center relative group overflow-hidden ${getHoverAnimation(
                  index
                )}`}
                style={{ minHeight: "120px" }}
              >
                {/* Original Content */}
                <div className="flex items-center justify-center gap-4 w-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-110">
                  <div className="flex-shrink-0 transition-transform duration-500 group-hover:rotate-12">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-20 object-contain"
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-black text-center transition-all duration-500"
                    style={{ fontFamily: "Inter_Bold" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Professional Hover Overlay */}
                <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-95 transition-all duration-500 ease-in-out">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-white text-lg font-semibold mb-2 tracking-wide">
                      This is only a placeholder
                    </p>
                    <div className="w-16 h-0.5 bg-white mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View More Button */}
      <button className="mt-24 border-2 border-white text-white px-16 py-3 rounded text-lg hover:text-black transition-colors duration-300 shadow-lg hover:shadow-xl hover:bg-white">
        VIEW MORE
      </button>
    </div>
  );
}

export default Services;
