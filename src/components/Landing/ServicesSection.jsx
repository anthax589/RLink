import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/ServicesExecutive.svg";
import ReferenceCheck from "../../assets/svg/ServicesHr.svg";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Threads from "../TextAnimation/Threads/Threads";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const serviceCards = [
    {
      title: "人材紹介",
      image: Excecutive,
      alt: "人材紹介",
      path: "/recruitment-business",
    },
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      alt: "採用戦略アドバイザリー＆RPO",
      path: "/recruitment-strategy",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      alt: "HRプロダクト",
      path: "/hr-product-business",
    },
    {
      title: "人材派遣・業務委託",
      image: Staffing,
      alt: "人材派遣・業務委託",
      path: "/staffing",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-28 bg-[#1867D1] py-12 md:py-16 lg:py-20">
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-48 lg:h-60 z-0">
        <Threads amplitude={2.5} distance={1} color={[255, 255, 255]} />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 z-10">
        <TypewriterOnScroll
          text="- サービス -"
          delay={20}
          threshold={0.5}
          className="ml-2"
          letterClassName="text-white text-base md:text-lg 2xl:text-2xl font-bold tracking-widest mb-4 text-center"
        />
        <h1
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center px-4 max-w-5xl"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Grid */}
      <div
        className="w-full max-w-7xl px-4 sm:px-6 z-10"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-3 w-full">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => navigate(card.path)}
                onKeyDown={(e) => e.key === "Enter" && navigate(card.path)}
                className="group bg-[#1867D1] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer flex flex-col relative"
                style={{
                  minHeight: "180px",
                }}
              >
                {/* Icon Section - Takes most of the space */}
                <div className="flex-1 flex items-center justify-center bg-white py-6 md:py-8">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-28 h-20 md:w-32 lg:w-36 md:h-22 lg:h-24 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Title Section - Blue background */}
                <div className="bg-[radial-gradient(circle_at_top_center,_#1867D1_0%,_#001D44_100%)] py-5 md:py-6 px-4">
                  <h3
                    className="text-xs sm:text-sm font-semibold text-white text-center"
                    style={{ fontFamily: "Inter_Bold" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Professional overlay with sophisticated animation */}
                <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-95 transition-all duration-500 ease-out rounded-lg">
                  <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-600 ease-out delay-100 mx-auto flex flex-col items-center justify-center gap-4 md:gap-5">
                    <svg
                      width="40"
                      height="36"
                      viewBox="0 0 48 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-9 md:w-12 md:h-11"
                    >
                      <path
                        d="M0 43V37.625H48V43H0ZM0 32.25V10.75H48V32.25H0ZM0 5.375V0H48V5.375H0Z"
                        fill="black"
                      />
                    </svg>

                    <p className="text-black text-base md:text-lg font-semibold mb-2 md:mb-3 tracking-wide transform scale-75 group-hover:scale-100 transition-transform duration-400 delay-200">
                      View More
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center px-4 z-10">
        <button
          onClick={() => navigate("/services")}
          className="btn flex gap-2 border-2 border-white text-black px-12 sm:px-16 md:px-20 py-4 md:py-5 rounded text-xs sm:text-sm font-normal shadow-lg hover:shadow-xl hover:bg-white bg-white transition-all duration-300"
        >
          VIEW MORE
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-[17px] md:h-[17px]"
          >
            <path
              d="M11.6641 11.127V4.99219H5.5293V3.62891H13.0273V11.127H11.6641ZM8.25586 14.5352V8.40039H2.12109V7.03711H9.61914V14.5352H8.25586Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Services;
