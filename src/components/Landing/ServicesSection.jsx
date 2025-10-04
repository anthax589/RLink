import React, { useEffect } from "react";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/Executive.svg";
import ReferenceCheck from "../../assets/svg/ReferenceCheck.svg";
import Marquee from "react-fast-marquee";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import servicesBg from "../../assets/img/servicesBackGround2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const serviceCards = [
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      alt: "採用戦略アドバイザリー＆RPO",
    },
    {
      title: "人材紹介",
      image: Excecutive,
      alt: "人材紹介",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      alt: "HRプロダクト",
    },
    {
      title: "人材派遣・業務委託",
      image: Staffing,
      alt: "人材派遣・業務委託",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="h-screen py-20 flex flex-col items-center justify-center"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

      {/* Services Marquee */}
      <div
        className="w-full mb-12 overflow-visible"
        data-aos="fade-up"
        data-aos-once="true"
      >
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
          <div className="flex gap-1 px-0.5 relative ">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 bg-white 2xl:h-80 p-3 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:z-[60]"
                style={{
                  width: "450px",
                  minWidth: "550px",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <div className="flex flex-col gap-7 md:items-center md:justify-center">
                  <h3
                    className="text-2xl font-bold text-black text-nowrap text-center"
                    style={{ fontFamily: "Inter_Bold" }}
                  >
                    {card.title}
                  </h3>
                  <div className="flex justify-center self-center">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-32 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Invisible spacer to prevent overlap */}
       
          </div>
        </Marquee>
      </div>

      {/* View More Button */}
      <button className="mt-10 border-2 border-white text-white px-16 py-3 rounded text-lg hover:text-black transition-colors duration-300 shadow-lg hover:shadow-xl hover:bg-white">
        VIEW MORE
      </button>
    </div>
  );
}

export default Services;
