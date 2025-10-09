import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";
import ServicesNav from "../../../shared/ServicesNav";
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

function RecruitmentAdvisory() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="w-full  h-screen">
      {/* Header */}
      <div
        className="w-full h-screen"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #1867D1 100%)",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}
        <ServicesNav />

        {/* Process Flow (new flowchart) */}
        <div className="w-full h-1/2 flex flex-col justify-center items-center ">
          <div className="text-center mb-8 flex justify-center items-center">
            <h1
              className="text-3xl text-white pt-56"
              style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
            >
              事業戦略や組織への深い理解に基づく採用支援
            </h1>
          </div>
          {/* Background Logo */}
          <div className="absolute top-70 inset-0 flex items-center justify-center opacity-20 z-0">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-96 lg:w-[500px] xl:w-[450px] h-auto object-contain"
            />
          </div>
          {/* Flowchart Container */}
          <div
            className="flex flex-row items-stretch w-full max-w-5xl justify-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
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
                    className={`p-4 text-base text-center whitespace-nowrap h-24 flex justify-center items-center ${
                      step.title === "オペレーション"
                        ? "text-black"
                        : "text-white"
                    }`}
                    style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)" }}
                  >
                    {step.title}
                  </div>
                </div>
                <div className="mt-1">
                  <ul
                    className={`flex-1 px-4 py-4 text-xs w-60 h-24 items-center ${
                      idx === 2
                        ? "bg-[#1867D1]/75 text-white"
                        : "bg-[#D9D9D9] text-[#1867D1]"
                    }`}
                  >
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polygon
                            points="4,1 7,4 4,7 1,4"
                            fill={idx === 2 ? "white" : "#1867D1"}
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
      </div>
    </div>
  );
}

export default RecruitmentAdvisory;
