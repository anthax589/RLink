import React from "react";
import { useTranslations } from "../../../hooks/useTranslations";

function TableSection() {
  const { t } = useTranslations();
  return (
    <main className="h-fit bg-transparent">
      {/* Table Section */}
      <section
        className="bg-transparent px-4 sm:px-6 md:px-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
      >
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1
            className="text-center py-12 sm:py-16 md:py-20 lg:py-28 text-black font-bold text-xl sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            style={{
              fontFamily: "Lato-Bold",
              textShadow: "2px 5px 2px rgba(0, 0, 0, 0.2 )",
            }}
          >
            {t("table_heading")}
          </h1>

          {/* Mobile/Tablet View - Stacked Cards */}
          <div className="block lg:hidden space-y-6">
            {[
              {
                week: t("week_1"),
                items: [
                  { day: t("day_1"), text: t("item_project_contract") },
                  { day: t("day_2"), text: t("item_meeting_hiring_manager") },
                  { day: t("day_3_5"), text: t("item_kickoff_search") },
                ],
              },
              {
                week: t("week_2"),
                items: [
                  {
                    day: t("day_6_10"),
                    text: t("item_interviews_with_candidates"),
                  },
                  { day: "", text: t("item_continue_search") },
                  { day: "", text: t("item_week2_review") },
                ],
              },
              {
                week: t("week_3"),
                items: [
                  { day: t("day_11_12"), text: t("item_project_contract") },
                  {
                    day: t("day_13_15"),
                    text: t("item_first_interview_setup"),
                  },
                  { day: "", text: t("item_continue_search") },
                ],
              },
              {
                week: t("week_4"),
                items: [
                  {
                    day: t("day_16_20"),
                    text: t("item_conduct_1_2_interviews"),
                  },
                  { day: "", text: t("item_continue_search") },
                  { day: "", text: t("item_continue_search") },
                ],
              },
              {
                week: t("week_5"),
                items: [
                  { day: t("day_21_25"), text: t("item_second_to_final") },
                  { day: "", text: t("item_reference_check") },
                  { day: "", text: t("item_offer_and_offer_meeting") },
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay={index * 50}
              >
                <div
                  className="bg-[#1867D1] text-white p-4 text-center font-bold text-lg"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  {week.week}
                </div>
                <div className="divide-y divide-gray-200">
                  {week.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 text-black">
                      {item.day && (
                        <span className="font-semibold block mb-1">
                          {item.day}
                        </span>
                      )}
                      <span className="text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table
              className="w-full border-collapse"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              <thead>
                <tr
                  className="bg-[#1867D1] text-white"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  <th className="p-3 text-center">{t("week_1")}</th>
                  <th className="p-3 text-center">{t("week_2")}</th>
                  <th className="p-3 text-center">{t("week_3")}</th>
                  <th className="p-3 text-center">{t("week_4")}</th>
                  <th className="p-3 text-center">{t("week_5")}</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr className="bg-transparent">
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_1")}
                    </span>
                    {t("item_project_contract")}
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_6_10")}
                    </span>
                    {t("item_interviews_with_candidates")}
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_11_12")}
                    </span>
                    {t("item_project_contract")}
                  </td>
                  <td className="border-r border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_16_20")}
                    </span>
                    {t("item_conduct_1_2_interviews")}
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_21_25")}
                    </span>
                    {t("item_second_to_final")}
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_2")}
                    </span>
                    {t("item_meeting_hiring_manager")}
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_continue_search")}
                  </td>
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_13_15")}
                    </span>
                    {t("item_first_interview_setup")}
                  </td>
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_continue_search")}
                  </td>
                  <td className="border-l border-r border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_reference_check")}
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      {t("day_3_5")}
                    </span>
                    {t("item_kickoff_search")}
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_week2_review")}
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_continue_search")}
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_continue_search")}
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    {t("item_offer_and_offer_meeting")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TableSection;
