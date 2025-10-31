import servicesbg from "../../../assets/img/ServicesHeroSectionBg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import HR from "../../../assets/svg/SnappCheck.svg";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleContactClick = () => {
    window.open("https://snappcheck.com", "_blank");
  };

  return (
    <section
      className="relative bg-cover min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]"
      data-aos="fade-in"
    >
      {/* Content */}
      <div
        className="max-w-8xl flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-1 py-8 sm:py-10 md:py-12 lg:pt-10 min-h-[50vh] md:min-h-[60vh] lg:h-[70vh] text-left gap-6 md:gap-8 lg:gap-56"
        style={{
          backgroundImage: `url(${servicesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-black w-full lg:w-auto order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            HRプロダクト事業
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-4 mb-8 text-black font-semibold break-words">
            「候補者の実績や人柄」をAIとデータで可視化し、
            <br className="hidden sm:block" />
            採用の精度を高め、ミスマッチを防ぐ
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-black text-white px-8 sm:px-12 md:px-16 lg:px-20 py-2 sm:py-2.5 md:py-3 rounded flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors text-sm sm:text-base"
              onClick={handleContactClick}
            >
              {/* Phone Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
              お問い合わせ
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-auto flex items-center justify-center order-1 lg:order-2">
          <div className="w-48 sm:w-56 md:w-64 lg:w-auto h-48 sm:h-56 md:h-64 lg:h-68 flex items-center justify-center">
            <img
              src={HR}
              alt="SnappCheck HR Product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
