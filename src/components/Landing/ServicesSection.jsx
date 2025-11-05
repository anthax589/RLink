import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/ServicesExecutives.svg";
import ReferenceCheck from "../../assets/svg/ServicesHr.svg";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const serviceCards = [
    {
      title: "人材紹介事業",
      image: Excecutive,
      alt: "人材紹介事業",
      path: "/recruitment-business",
      color: "bg-[#3C8FFF]",
    },
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      alt: "採用戦略アドバイザリー＆RPO",
      path: "/recruitment-strategy",
      color: "bg-[#1867D1]",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      alt: "HRプロダクト",
      path: "/hr-product-business",
      color: "bg-[#165CBA]",
    },
    {
      title: "Y社連携・業務委託",
      image: Staffing,
      alt: "Y社連携・業務委託",
      path: "/staffing",
      color: "bg-[#083571]",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20 bg-white py-12 md:py-12 lg:py-14">
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4">
        <TypewriterOnScroll
          text="- サービス -"
          delay={20}
          threshold={0.5}
          className="ml-2"
          letterClassName="text-black text-base  md:text-3xl 2xl:text-4xl font-bold tracking-widest mb-6 text-center"
        />
        <h1
          className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center px-4 max-w-8xl"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Grid - 2x2 */}
      <div className="w-full" data-aos="fade-up" data-aos-once="true">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(card.path)}
              onKeyDown={(e) => e.key === "Enter" && navigate(card.path)}
              className={`${card.color} p-16 md:p-20 lg:p-24 xl:p-28 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[400px]`}
            >
              {/* Icon */}
              <div className="mb-6 md:mb-8 relative z-10">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-sm md:text-base lg:text-lg font-bold text-center relative z-10">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center px-4">
        <button
          onClick={() => navigate("/services")}
          className="btn  border-none  bg-[#1867D1]  text-white font-normal px-12 sm:px-16 md:px-16 py-3 md:py-6 rounded  flex items-center gap-2 text-xs sm:text-sm md:text-base lg:mb-12"
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
              d="M11.5879 10.9062V4.77148H5.45312V3.4082H12.9512V10.9062H11.5879ZM8.17969 14.3145V8.17969H2.04492V6.81641H9.54297V14.3145H8.17969Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Services;
