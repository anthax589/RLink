import servicesbg from "../../../assets/img/ServicesHeroSectionBg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Executive from "../../../assets/svg/Executive1.svg";
import { useTranslations } from "../../../hooks/useTranslations";

const HeroSection = () => {
  const { t } = useTranslations();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="relative bg-cover min-h-[50vh] md:min-h-[60vh] lg:h-[70vh]"
      data-aos="fade-in"
    >
      {/* Content */}
      <div
        className="max-w-8xl flex flex-col lg:flex-row items-center justify-center pb-8 md:pt-10 px-4 md:px-6 lg:px-8 h-full text-left gap-4 md:gap-6 lg:gap-56"
        style={{
          backgroundImage: `url(${servicesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Image - Shows first on mobile */}
        <div className="order-first lg:order-last">
          <div className="w-48 md:w-56 lg:w-auto h-48 md:h-56 lg:h-72 flex items-center justify-center">
            <img
              src={Executive}
              alt="Executive Search"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 md:space-y-8 lg:space-y-12 text-black">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {t("recruitment_hero_title")}
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-4 mb-4 md:mb-8 text-black font-semibold">
            {t("recruitment_hero_desc")
              .split("\n")
              .map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br className="hidden lg:block" />}
                </span>
              ))}
          </p>
          <div className="flex justify-center mx-auto lg:justify-start">
            <button className="bg-black text-white px-12 md:px-16 lg:px-20 py-2 md:py-3 rounded flex items-center gap-2 text-sm md:text-base">
              {/* Phone Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
      </div>
    </section>
  );
};

export default HeroSection;
