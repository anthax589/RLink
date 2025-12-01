import { useEffect, useState } from "react";
import Strength1 from "../../assets/svg/Strength1.svg";
import Strenght2 from "../../assets/svg/Strength2.svg";
import Strength3 from "../../assets/svg/Strength3.svg";
import Strength4 from "../../assets/svg/Strength4.svg";
import { useTranslations } from "../../hooks/useTranslations";

const TypewriterOnScroll = ({
  text,
  delay = 80,
  className = "",
  letterClassName = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Reset when text changes (language change)
    setDisplayedText("");
    setHasStarted(false);
  }, [text]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= text.length) {
              setDisplayedText(text.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, delay);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("typewriter-trigger");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [text, delay, hasStarted]);

  return (
    <span id="typewriter-trigger" className={className}>
      {displayedText.split("").map((char, index) => (
        <span key={index} className={letterClassName}>
          {char}
        </span>
      ))}
    </span>
  );
};

const CompanyStrengths = () => {
  const { t } = useTranslations();

  return (
    <div className="bg-transparent min-h-screen py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            <span className="text-[#1867D1]">R </span>
            <TypewriterOnScroll
              text={t("four_strengths")}
              delay={80}
              threshold={0.5}
              className="inline"
              letterClassName="inline"
            />
          </h2>
        </div>

        {/* Alternating Layout */}
        <div className="flex flex-col gap-y-12 md:gap-y-16 w-full">
          {/* Strength 01 - Image on left (desktop), top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile, left on desktop */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength1}
                  alt="Strength 01"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                {t("strength_01")}
              </h3>
              <h4 className="text-lg md:text-xl lg:text-2xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-10">
                {t("strength_01_title")}
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-black">
                {t("strength_01_desc")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t("strength_01_desc").split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
              </p>
            </div>
          </div>

          {/* Strength 02 - Text on left, Image on right (desktop), Image top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile with order-first */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0 order-first md:order-last">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strenght2}
                  alt="Strength 02"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-16">
                {t("strength_02")}
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-10">
                {t("strength_02_title")}
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed">
                {t("strength_02_desc")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t("strength_02_desc").split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
              </p>
            </div>
          </div>

          {/* Strength 03 - Image on left (desktop), top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile, left on desktop */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength3}
                  alt="Strength 03"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                {t("strength_03")}
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-10">
                {t("strength_03_title")}
              </h4>
              <p className="text-sm md:text-base text-black leading-relaxed">
                {t("strength_03_desc")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t("strength_03_desc").split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
              </p>
            </div>
          </div>

          {/* Strength 04 - Text on left, Image on right (desktop), Image top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile with order-first */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0 order-first md:order-last">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength4}
                  alt="Strength 04"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                {t("strength_04")}
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-10">
                {t("strength_04_title")}
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed">
                {t("strength_04_desc")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t("strength_04_desc").split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RLinkInterface = () => {
  return (
    <div className="min-h-screen">
      <CompanyStrengths />
    </div>
  );
};

export default RLinkInterface;
