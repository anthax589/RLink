import Servicesbg from "../../assets/img/Services Header.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "../../hooks/useTranslations";

export default function HeroSection() {
  const { t } = useTranslations();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      data-aos="fade-in"
      className="py-6 md:py-8 lg:py-14 px-4 md:px-8 lg:px-16 xl:pl-24 min-h-[40vh] md:h-[60vh] flex items-center justify-start w-full"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-full">
        <div className="flex items-center gap-4 md:gap-8 lg:gap-16 xl:gap-24">
          {/* Left side - Title with robot image */}
          <div className="flex flex-col">
            {/* Title Card */}
            <div className="flex-shrink-0 z-10">
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1">
                {t("services_title")}
              </h2>
              <p
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#3B4F6D] mb-3 md:mb-4 lg:mb-5"
                style={{ fontFamily: "Lato-Thin" }}
              >
                {t("services_subtitle")}
              </p>
            </div>
            {/* Right side - Description text */}
            <div className="flex-1 space-y-3 md:space-y-6 lg:space-y-9 text-white leading-relaxed">
              <p className="text-xs md:text-sm lg:text-base 2xl:text-3xl">
                {t("services_hero_desc_1")
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br className="hidden lg:block" />}
                    </span>
                  ))}
              </p>

              <p className="text-xs md:text-sm lg:text-base 2xl:text-3xl">
                {t("services_hero_desc_2")
                  .split("\n")
                  .map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br className="hidden lg:block" />}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
