import React from "react";
import RPO from "../../assets/services_assets/rpo_img.svg";
import Excecutive from "../../assets/services_assets/executive_img.svg";
import ReferenceCheck from "../../assets/services_assets/reference_img.svg";
import Marquee from "react-fast-marquee";

function Services() {
  // Define service card content for reuse
  const serviceCards = [
    {
      title: "RPO",
      content: (
        <>
          End-to-end hiring support that <br />
          makes recruitment faster, <br />
          smarter, and more efficient.
        </>
      ),
      image: RPO,
      alt: "RPO",
    },
    {
      title: "EXECUTIVE SEARCH",
      content: (
        <>
          Connecting companies with top <br />
          leaders and specialists to drive <br />
          growth and success.
        </>
      ),
      image: Excecutive,
      alt: "Executive Search",
    },
    {
      title: "REFERENCE CHECK AI",
      content: (
        <>
          AI-powered reference checks <br />
          that deliver fast, reliable insights <br />
          for confident hiring decisions.
        </>
      ),
      image: ReferenceCheck,
      alt: "Reference Check AI",
    },
  ];

  return (
    <div
      className="bg-[linear-gradient(to_right,#1353AA,#051428)] min-h-fit py-20 flex flex-col items-center justify-center "
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-lg 2xl:text-2xl font-bold tracking-widest mb-4">
          - サービス -
        </h2>
        <h1 className="text-white text-3xl xl:text-4xl font-bold leading-tight text-nowrap">
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Marquee */}
      <div className="w-full mb-12 overflow-hidden">
        <Marquee
          speed={80}
          gradient={false}
          pauseOnHover={true}
          className="py-4"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitFontSmoothing: "subpixel-antialiased",
          }}
        >
          <div className="flex gap-8 px-4">
            {/* Render first set of cards */}
            {serviceCards.map((card, index) => (
              <div
                key={`card-${index}`}
                className="grid grid-cols-1 bg-white rounded-md p-3 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
                style={{
                  width: "450px",
                  minWidth: "650px",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <h3 className="text-2xl font-bold text-black text-nowrap text-center">
                  {card.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-evenly ">
                  <div className="flex items-center justify-center">
                    <p
                      className="text-black leading-relaxed self-center 2xl:text-xl text-center md:text-left tracking-wide font-normal"
                      style={{ letterSpacing: "0.025em", lineHeight: "1.7" }}
                    >
                      {card.content}
                    </p>
                  </div>
                  <div className="flex justify-center self-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-52 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Render second set of cards for continuous scrolling */}
            {serviceCards.map((card, index) => (
              <div
                key={`card-duplicate-${index}`}
                className="grid grid-cols-1 bg-white rounded-md p-3 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
                style={{
                  width: "450px",
                  minWidth: "650px",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <h3 className="text-2xl font-bold text-black text-nowrap text-center">
                  {card.title}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-evenly">
                  <div className="flex items-center justify-center">
                    <p
                      className="text-black leading-relaxed self-center 2xl:text-xl text-center md:text-left tracking-wide font-normal"
                      style={{ letterSpacing: "0.025em", lineHeight: "1.7" }}
                    >
                      {card.content}
                    </p>
                  </div>
                  <div className="flex justify-center self-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-52 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* View More Button */}
      <button className="bg-white text-black px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
        VIEW MORE
      </button>
    </div>
  );
}

export default Services;
