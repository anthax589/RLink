import React from "react";
import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import tablebg from "../../../assets/img/OurServicesBackGround.png";
import { useTranslations } from "../../../hooks/useTranslations";

function StrategicApproach() {
  const { t } = useTranslations();
  return (
    <div className="max-w-full mx-auto">
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-white/90 py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage: `url(${tablebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center px-4">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black py-6 md:py-10"
            style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3 )" }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
          >
            {t("strategic_approach_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 w-full px-4 sm:px-8 md:w-3/4 lg:w-1/2 mx-auto py-6 md:py-8">
          {/* Client Card */}
          <div
            className="px-6  sm:p-7 md:p-8 lg:p-10 rounded flex flex-col justify-center min-h-[200px] sm:min-h-[200px] md:min-h-[320px]"
            style={{
              backgroundImage: `url(${Rectanglebg})`,
              backgroundSize: "100% 80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-black mt-2 mb-2 md:mb-6 text-center">
              {t("strategic_client_heading")}
            </h3>
            <ul className="space-y-2 text-[10px] sm:text-sm md:text-base text-black flex flex-col justify-center mx-auto">
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                {t("strategic_client_item_1")}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                {t("strategic_client_item_2")}
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                {t("strategic_client_item_3")}
              </li>
              <li className="flex items-center gap-2 mb-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                {t("strategic_client_item_4")}
              </li>
            </ul>
          </div>

          {/* Challenge Card */}
          <div
            className="px-6  sm:p-7 md:p-8 lg:p-10 rounded flex flex-col justify-center min-h-[200px] sm:min-h-[200px] md:min-h-[320px]"
            style={{
              backgroundImage: `url(${Rectanglebg})`,
              backgroundSize: "100% 80%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-black mt-2 mb-2 md:mb-6 text-center">
              {t("strategic_challenge_heading")}
            </h3>
            <ul className="space-y-1 text-[10px] sm:text-sm md:text-base text-black flex flex-col justify-center mx-auto">
              <li className="flex items-start gap-2 ">
                <div className="flex items-center pt-1 flex-shrink-0">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                  </svg>
                </div>
                <span>{t("strategic_challenge_item_1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex items-center pt-1 flex-shrink-0">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                  </svg>
                </div>
                <span>{t("strategic_challenge_item_2")}</span>
              </li>
              <li className="flex items-start gap-2 mb-2">
                <div className="flex items-center pt-1 flex-shrink-0">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                  </svg>
                </div>
                <span>{t("strategic_challenge_item_3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicApproach;
