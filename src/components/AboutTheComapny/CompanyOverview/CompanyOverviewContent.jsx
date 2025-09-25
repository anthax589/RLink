import React from "react";
import companyProfile from "../../../assets/img/companyProfileBackGround.png";
export default function CompanyOverview() {
  const companyData = [
    {
      label: "会社名",
      value: "RLink Partners合同会社",
    },
    {
      label: "本社所在地",
      value: "東京都港区白金5丁目5－9",
    },
    {
      label: "代表者",
      value: "代表取締役　藤澤 尚範",
    },
    {
      label: "資本金本社",
      value: "2,000万円",
    },
    {
      label: "従業員数",
      value: "10名（業務委託含む）",
    },
    {
      label: "設立日",
      value: "2021年3月",
    },
    {
      label: "事業内容",
      value: "人材紹介・派遣事業、採用アドバイザリー事業、SaaSプロフダクト事業",
    },
    {
      label: "許認可",
      value:
        "有料職業紹介事業許可番号 13-ュ-313254\n一般労働者派遣事業許可番号 派13-315644",
    },
  ];

  return (
    <div className="max-w-full mx-auto p-8 bg-gradient-to-b from-gray-200 to-white min-h-screen">
      <div
        className="max-w-5xl mx-auto p-8"
        style={{
          backgroundImage: `url(${companyProfile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title */}
        <h1 className="text-2xl 2xl:text-4xl font-bold text-center mb-8 text-black">
          会社概要
        </h1>

        {/* Decorative line */}
        <div
          className="w-[90px]  mt-5 mx-auto mb-10"
          style={{
            height: "2px",
            backgroundImage:
              "linear-gradient(275deg,rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%)",
          }}
        />

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
              <div className="grid grid-cols-1 md:grid-cols-4 py-4">
                {/* Label column */}
                <div className="md:col-span-1  px-10 py-3">
                  <span className="text-sm 2xl:text-xl font-bold text-[#5B5B5B]">
                    {item.label}
                  </span>
                </div>

                {/* Value column */}
                <div className="md:col-span-3 px-4 py-3">
                  <span className="text-sm 2xl:text-xl text-black font-bold whitespace-pre-line">
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
