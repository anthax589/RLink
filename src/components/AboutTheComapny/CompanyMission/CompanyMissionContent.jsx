import React from "react";
import AboutTheCompany from "../../../assets/img/AboutTheCompanyBackGround.png";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";
import { useTranslations } from "../../../hooks/useTranslations";

export default function CompanyMission() {
  const { t } = useTranslations();

  return (
    <div
      className="max-w-full mx-auto p-4 md:p-6 lg:p-8 2xl:py-20 flex items-center min-h-screen"
      style={{
        backgroundImage: `url(${AboutTheCompany})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#F2F2F2]/40 w-full max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto border-2 border-[#B3B3B3] rounded py-4">
        {/* Header Section */}
        <div className="pt-8 px-4 md:px-6 relative">
          <div className="absolute top-0 right-4 md:right-6">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-12 md:w-14 lg:w-16 h-auto 2xl:w-16"
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl text-center text-black tracking-widest mb-2 pt-12 md:pt-16">
            {t("mission_title")}
          </h1>
          <p className="text-black text-center text-[10px] md:text-xs 2xl:text-sm">
            {t("mission_subtitle")}
          </p>
        </div>

        {/* Content Section */}
        <div className="px-4 md:px-6 py-6 md:py-8 xl:px-48 2xl:px-16 2xl:py-12 flex flex-col justify-center items-center">
          {/* Mission Statement */}
          <div className="mb-6 md:mb-8 2xl:mb-12">
            <h2 className="text-sm md:text-base lg:text-lg 2xl:text-3xl font-bold text-black text-center px-2">
              {t("mission_statement")}
            </h2>
          </div>

          {/* Company Description */}
          <div
            className="space-y-4 md:space-y-6 2xl:space-y-8 text-black leading-relaxed text-xs md:text-sm lg:text-base 2xl:text-2xl px-2"
            style={{ fontFamily: "Lato-Regular" }}
          >
            <p>
              <span className="text-[#1867D1]">R</span>Link
              {t("mission_desc_1")}
            </p>

            <p>
              {t("mission_desc_2")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br className="hidden lg:block" />}
                    {i < arr.length - 1 && " "}
                  </React.Fragment>
                ))}
            </p>

            <p>
              {t("mission_desc_3")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br className="hidden lg:block" />}
                    {i < arr.length - 1 && " "}
                  </React.Fragment>
                ))}
            </p>

            <p>
              {t("mission_desc_4")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br className="hidden lg:block" />}
                    {i < arr.length - 1 && " "}
                  </React.Fragment>
                ))}
            </p>

            <p>
              {t("mission_desc_5")
                .split("\n")
                .map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br className="hidden lg:block" />}
                    {i < arr.length - 1 && " "}
                  </React.Fragment>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
