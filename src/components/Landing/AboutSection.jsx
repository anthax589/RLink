import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "../../hooks/useTranslations";

const AboutSection = () => {
  const { t } = useTranslations();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-white h-fit  flex items-center justify-center relative overflow-hidden px-4 md:px-6 lg:px-8 lg:py-16">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex items-start py-3 md:py-5">
          <div className="flex items-start mb-4 md:mb-6 relative">
            <p
              justify-start
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
              className="text-2xl md:text-xl font-bold text-black lg:text-xl xl:text-2xl 2xl:text-3xl relative"
            >
              {t("about_us_title")}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-4 md:mb-6 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <span className="text-[#1867D1]">R</span>Link
          {t("about_us_desc_1")}
        </p>
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-4 md:mb-6 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          {t("about_us_desc_2")
            .split("\n")
            .map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && (
                  <>
                    {" "}
                    <br className="hidden lg:block" />
                  </>
                )}
              </span>
            ))}
        </p>
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-12 md:mb-16 lg:mb-10 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          {t("about_us_desc_3")
            .split("\n")
            .map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && (
                  <>
                    {" "}
                    <br className="hidden lg:block" />
                  </>
                )}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
