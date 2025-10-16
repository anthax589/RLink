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
    <div className="h-screen flex flex-col items-center justify-center gap-28 bg-[#1867D1]">
      <div className="absolute bottom-0 left-0 w-full h-60 z-0">
        <Threads amplitude={2.5} distance={1} color={[255, 255, 255]} />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center justify-center">
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
      <div className="w-full max-w-7xl" data-aos="fade-up" data-aos-once="true">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full px-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => navigate(card.path)}
                onKeyDown={(e) => e.key === "Enter" && navigate(card.path)}
                className="bg-[#1867D1]  rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 cursor-pointer flex flex-col"
                style={{
                  minHeight: "180px",
                }}
              >
                {/* Icon Section - Takes most of the space */}
                <div className="flex-1 flex items-center justify-center bg-white py-8">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-36 h-24 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Title Section - Blue background */}
                <div className="bg-[radial-gradient(circle_at_top_center,_#1867D1_0%,_#001D44_100%)] py-6 px-4">
                  <h3
                    className="text-sm font-semibold text-white text-center"
                    style={{ fontFamily: "Inter_Bold" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => navigate("/services")}
          className="btn flex gap-2 border-2 border-white text-black px-20 py-5 rounded text-sm font-normal shadow-lg hover:shadow-xl hover:bg-white bg-white transition-all duration-300"
        >
          VIEW MORE
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
