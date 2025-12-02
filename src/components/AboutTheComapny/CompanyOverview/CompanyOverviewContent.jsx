import React from "react";
import AboutTheCompany from "../../../assets/img/AboutTheCompanyBackGround.png";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";
import { useTranslations } from "../../../hooks/useTranslations";

export default function CompanyOverview() {
  const { t } = useTranslations();

  const companyData = [
    {
      label: t("overview_company_name"),
      value: t("overview_company_name_value"),
    },
    {
      label: t("overview_head_office_location"),
      value: t("overview_head_office_location_value"),
    },
    {
      label: t("overview_representative"),
      value: t("overview_representative_value"),
    },
    {
      label: t("overview_capital"),
      value: t("overview_capital_value"),
    },
    {
      label: t("overview_employees"),
      value: t("overview_employees_value"),
    },
    {
      label: t("overview_established"),
      value: t("overview_established_value"),
    },
    {
      label: t("overview_business_content"),
      value: t("overview_business_content_value"),
    },
    {
      label: t("overview_licenses"),
      value: t("overview_licenses_value"),
    },
  ];

  return (
    <div
      className="max-w-full mx-auto p-4 md:p-6 lg:p-8 2xl:py-20 flex items-center min-h-screen"
      style={{
        backgroundImage: `url(${AboutTheCompany})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#F2F2F2]/40 max-w-5xl mx-auto py-4 px-4 md:px-8 lg:px-12 xl:px-20 pb-12 md:pb-16 lg:pb-20 border-2 border-[#B3B3B3] rounded">
        {/* Title */}
        <div className="relative">
          <div className="absolute top-0 right-0 md:-right-6 lg:-right-13">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-12 md:w-14 lg:w-16 h-auto 2xl:w-16"
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl text-center text-black pt-20 md:pt-16 tracking-widest">
            {t("overview_title")}
          </h1>
        </div>
        <p className="text-black text-center font-extralight mt-2 mb-4 md:mb-6 text-xs md:text-sm lg:text-[16px]">
          {t("overview_subtitle")}
        </p>

        {/* Company information table */}
        <div className="space-y-0">
          {companyData.map((item, index) => (
            <div
              key={index}
              className="border-b"
              style={{
                borderImage:
                  "linear-gradient(275deg, rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%) 1",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 py-2">
                {/* Label column */}
                <div className="md:col-span-1 px-2 md:px-6 lg:px-10 py-2 md:py-3">
                  <span className="text-xs md:text-sm 2xl:text-xl font-bold text-[#5B5B5B]">
                    {item.label}
                  </span>
                </div>

                {/* Value column */}
                <div className="md:col-span-3 px-2 md:px-4 py-2 md:py-3">
                  <span className="text-xs md:text-sm 2xl:text-xl text-black font-bold whitespace-pre-line">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
