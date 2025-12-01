import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RLink from "../../../assets/svg/RLink.svg";
import ServicesNav from "../../../shared/ServicesNav";
import Radial from "../../../assets/img/RadialBackGround.png";
import { useTranslations } from "../../../hooks/useTranslations";

export default function SnappCheck() {
  const { t } = useTranslations();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      {/* Background container */}
      <div
        className="w-full min-h-screen"
        style={{
          backgroundImage: `url(${Radial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}

        <ServicesNav />

        {/* Content Section - Centered in remaining space */}
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 min-h-screen py-20 md:py-24 lg:pb-20 relative">
          {/* Background Logo */}

          <div
            className="absolute inset-0 flex items-center justify-center z-0 bottom-8 md:bottom-16"
            style={{ opacity: 0.4 }}
          >
            <img
              src={RLink}
              alt="RLink Logo"
              className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] 2xl:w-xl h-auto"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Header */}
            <div
              className="mb-6 md:mb-8"
              style={{
                textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)",
                fontFamily: "Lato-Bold",
              }}
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 text-white"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
              >
                <span className="text-[#1867D1]">Snapp</span>
                <span className="text-white"> Check</span>
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              className="w-full max-w-3xl h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-center mx-auto bg-[#D9D9D9] mb-6 md:mb-8"
            >
              {/* <img
              src={Executive}
              alt="Executive Search"
              className="w-full h-full"
            /> */}
              <span className="flex justify-center items-center mx-auto text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                IMAGE.JPG
              </span>
            </div>

            {/* Subtitle */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white py-4 md:py-6 lg:py-8 px-4"
              style={{ fontFamily: "Lato-Regular" }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              {t("snapp_check_subtitle")}
            </h2>

            {/* Description - Two columns side by side */}
            <div
              className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 text-white text-xs sm:text-sm md:text-base leading-relaxed max-w-6xl mx-auto mb-8 md:mb-12"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              {/* Left text box */}
              <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-4 md:p-5 lg:p-6">
                <p className="text-justify text-sm md:text-base lg:text-lg">
                  {t("snapp_check_desc_1")}
                </p>
              </div>

              {/* Right text box */}
              <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-4 md:p-5 lg:p-6">
                <p className="text-justify text-sm md:text-base lg:text-lg">
                  {t("snapp_check_desc_2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
