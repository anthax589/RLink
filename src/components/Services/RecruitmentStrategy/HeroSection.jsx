import servicesbg from "../../../assets/img/ServicesHeroSectionBg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import RPO from "../../../assets/svg/RPOv3.svg";
import { useTranslations } from "../../../hooks/useTranslations";

const HeroSection = () => {
  const { t } = useTranslations();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="relative bg-cover min-h-[70vh]" data-aos="fade-in">
      {/* Content */}
      <div
        className="max-w-8xl flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:pt-10 min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] text-left gap-6 md:gap-8 "
        style={{
          backgroundImage: `url(${servicesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-3 lg:space-y-12 text-black w-full lg:w-auto">
          <h1 className="text-xl sm:text-4xl lg:text-5xl">
            {t("strategy_hero_title")}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 mb-4 text-black font-semibold">
            {t("strategy_hero_desc")
              .split("\n")
              .map((line, idx, arr) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < arr.length - 1 && <br className="hidden lg:block" />}
                </React.Fragment>
              ))}
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-black text-white px-8 sm:px-12 lg:px-20 py-3 rounded flex items-center gap-2 text-sm sm:text-base">
              {/* {Phone Icon} */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <path
                  d="M30.0003 10H10.0003C8.15938 10 6.66699 11.4924 6.66699 13.3333V26.6667C6.66699 28.5076 8.15938 30 10.0003 30H30.0003C31.8413 30 33.3337 28.5076 33.3337 26.6667V13.3333C33.3337 11.4924 31.8413 10 30.0003 10Z"
                  stroke="white"
                  strokeWidth="3.33333"
                />
                <path
                  d="M6.66699 15L18.5103 20.9217C18.973 21.1529 19.4831 21.2732 20.0003 21.2732C20.5175 21.2732 21.0277 21.1529 21.4903 20.9217L33.3337 15"
                  stroke="white"
                  strokeWidth="3.33333"
                />
              </svg>
              {t("service_contact_button")}
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto flex items-center justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-auto lg:h-72 flex items-center justify-center">
            <img
              src={RPO}
              alt="Executive Search"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
