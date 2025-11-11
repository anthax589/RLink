import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/ServicesExecutive.svg";
import ReferenceCheck from "../../assets/svg/ServicesHr.svg";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Aos from "aos";
import "aos/dist/aos.css";
import RpoAnimation from "../../assets/gif/2.gif";
import StaffingAnimation from "../../assets/gif/4.gif";
import ExecutiveAnimation from "../../assets/gif/1.gif";
import HrProductAnimation from "../../assets/gif/3.gif";
import Servicesbg from "../../assets/img/ServicesBg.jpg";
function Services() {
  const serviceCards = [
    {
      title: "人材紹介事業",
      image: Excecutive,
      animation: ExecutiveAnimation,
      animationSize: "140%", // Adjust this value to scale the animation (e.g., "100%", "110%", "130%")
      alt: "人材紹介事業",
      path: "/recruitment-business",
      color: "bg-[#3C8FFF]",
    },
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      animation: RpoAnimation,
      animationSize: "100%", // Adjust this value to scale the animation
      alt: "採用戦略アドバイザリー＆RPO",
      path: "/recruitment-strategy",
      color: "bg-[#1867D1]",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      animation: HrProductAnimation,
      animationSize: "130%", // Adjust this value to scale the animation
      alt: "HRプロダクト",
      path: "/hr-product-business",
      color: "bg-[#165CBA]",
    },
    {
      title: "Y社連携・業務委託",
      image: Staffing,
      animation: StaffingAnimation,
      animationSize: "110%", // Adjust this value to scale the animation
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
    <div className="min-h-screen flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-20 bg-white pt-12 md:pt-12 lg:pt-14">
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
              className={`p-16 md:p-20 lg:p-24 xl:p-28 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[400px]`}
              style={{
                backgroundImage: `url(${Servicesbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Color Overlay */}
              <div
                className={`absolute inset-0 ${card.color} opacity-65 z-0`}
              ></div>
              {/* Icon container - both icons in same position */}
              <div className="relative mb-6 md:mb-8 z-10 w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 2xl:w-48 2xl:h-48">
                {/* Static Icon - visible by default, hidden on hover */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Animated GIF - hidden by default, visible on hover - individually scalable */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={card.animation}
                    alt={`${card.alt} animation`}
                    className="object-contain w-full h-full"
                    style={{
                      transform: `scale(${
                        parseFloat(card.animationSize) / 100
                      })`,
                    }}
                  />
                </div>
              </div>

              {/* Title - hidden on hover */}
              <h3 className="text-white text-sm md:text-base lg:text-lg font-bold text-center relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                {card.title}
              </h3>

              {/* "See more" text - visible on hover, positioned where title was */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 2xl:w-48 2xl:h-48 mb-6 md:mb-8"></div>
                <p className="text-white text-sm md:text-base lg:text-lg font-semibold">
                  See more
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
    </div>
  );
}

export default Services;
