import React from "react";
import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import clientbg from "../../../assets/img/vector1.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const flowData = [
  {
    title: "採用戦略構築・設計",
    color: "#1867D1",
    items: [
      "人材要件特定",
      "採用プロセス設計",
      "タレント獲得デザイン",
      "採用計画立案",
    ],
  },
  {
    title: "採用施策立案・実行",
    color: "#1867D1",
    items: [
      "母集団マーケティング",
      "候補者アプローチ",
      "候補者選考/面接（CX）",
      "候補者体験最適化",
    ],
  },
  {
    title: "オペレーション",
    color: "#D9D9D9",
    items: ["採用業務管理", "採用プロセス運用", "候補者管理", "採用進捗管理"],
  },
  {
    title: "分析・最適化",
    color: "#1867D1",
    items: ["採用効果分析", "データドリブン改善", "最適化レポート"],
  },
];

function RecruitmentStrategy() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-xl  text-black pt-10"
            style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3 )" }}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            採用戦略アドバイザリー事業
          </h1>
        </div>
        {/* Decorative Lines */}
        <div
          className="flex items-center w-1/2 mx-auto"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <div className="w-1 h-1 bg-gray-300 rotate-45"></div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="w-1 h-1 bg-gray-300 rotate-45"></div>
        </div>
        {/* Process Flow (new flowchart) */}
        <div className="w-full flex justify-center py-16 bg-white">
          <div
            className="flex flex-row items-stretch w-full max-w-5xl overflow-x-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            {flowData.map((step, idx) => (
              <div
                key={step.title}
                className={`relative flex-1 min-w-[220px] max-w-xs flex flex-col ${
                  idx > 0 ? "-ml-13" : ""
                }`}
              >
                {/* Arrow shape */}
                <div
                  className="flex flex-col relative"
                  style={{
                    background: step.color,
                    clipPath:
                      idx === 0
                        ? // Only right side arrow for the first box
                          "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)"
                        : // Both sides arrow for others (if you want both, or keep your previous polygon)
                          "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 20% 50%)",
                  }}
                >
                  <div
                    className="p-4  text-white  text-base text-center whitespace-nowrap h-20 flex justify-center items-center"
                    style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3 )" }}
                  >
                    {step.title}
                  </div>
                </div>
                <div className="mt-1">
                  <ul
                    className={`flex-1 px-4 pb-4 pt-1 text-xs w-60 h-20 ${
                      idx === 2
                        ? "bg-[#1867D1]/75 text-black"
                        : "bg-[#D9D9D9] text-[#1867D1]"
                    }`}
                  >
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="5.65723"
                            width="8"
                            height="8"
                            transform="rotate(45 5.65723 0)"
                            fill={idx === 2 ? "#1867D1" : "black"}
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second Section */}
        <div
          className="mt-16 h-screen"
          style={{
            backgroundImage: `url(${clientbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-lg font-bold text-black"
              style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3 )" }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
            >
              自社採用の戦略的アプローチ、および採用ポジションの決定支援
            </h2>
          </div>
          {/* Decorative Lines */}
          <div
            className="flex items-center w-1/2 mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-once="true"
          >
            <div className="w-1 h-1 bg-gray-300 rotate-45"></div>
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="w-1 h-1 bg-gray-300 rotate-45"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-16 w-1/2 mx-auto py-16">
            {/* Client Card */}
            <div
              className=" p-7 rounded  flex flex-col"
              style={{
                backgroundImage: `url(${Rectanglebg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
            >
              <h3 className="text-base font-bold text-black mb-6 text-center">
                クライアント概要
              </h3>
              <ul className="space-y-2 text-sm text-black flex flex-col justify-center mx-auto">
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  企業：SaaS企業（シリーズB）
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  従業員数：約50名
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  人事部構成：採用担当1名、採用事務1名
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  弊社チーム体制：2名
                </li>
              </ul>
            </div>
            {/* Challenge Card */}
            <div
              className=" p-8 rounded flex flex-col"
              style={{
                backgroundImage: `url(${Rectanglebg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
            >
              <h3 className="text-base font-bold text-black mb-6 text-center">
                課題
              </h3>
              <ul className="space-y-2 text-sm text-black flex flex-col justify-center mx-auto">
                <li className="flex items-start gap-2">
                  <div className="flex items-center pt-2">
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5.65723"
                        width="8"
                        height="8"
                        transform="rotate(45 5.65723 0)"
                        fill="black"
                      />
                    </svg>
                  </div>
                  複数の採用媒体を併用した結果、効果が分散し、
                  <br />
                  候補者の母集団形成ができていない
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  目標採用数に対し、担当人員が不足している
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5.65723"
                      width="8"
                      height="8"
                      transform="rotate(45 5.65723 0)"
                      fill="black"
                    />
                  </svg>
                  採用難易度の高いポジションに対する理解不足
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentStrategy;
