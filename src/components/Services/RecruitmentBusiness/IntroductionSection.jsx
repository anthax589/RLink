import React from "react";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";

function IntroductionSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "人材紹介事業",
    "採用戦略アドバイザリー事業",
    "HRプロダクト事業",
    "人材派遣/契約・業務委託事業",
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Background container */}
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #1e3a8a 100%)",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}
        <div className="relative -top-6 w-full flex justify-center z-20">
          <div className="flex justify-center items-end gap-8">
            {tabs.map((tab, index) => (
              <button
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="150"
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:w-68 font-semibold text-xs sm:text-sm lg:text-base text-nowrap border border-[#5B5B5B]/40 rounded shadow-[6px_0px_2px_rgba(0,0,0,0.15)] ${
                  activeTab === index
                    ? "bg-white text-black"
                    : "bg-white text-black "
                }`}
                style={{
                  marginLeft: index > 0 ? "-1px" : "0",
                  position: "relative",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section - Centered in remaining space */}
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-16 h-full pb-36 relative">
          {/* Background Logo */}
          <div className="absolute bottom-10 inset-0 flex items-center justify-center opacity-20 z-0">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-96 lg:w-[500px] xl:w-[450px] h-auto object-contain"
            />
          </div>

          {/* Two Column Content */}
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-36 justify-center items-center relative z-10">
            {/* Left Card - リテーナー型 */}
            <div
              className="w-full max-w-md lg:max-w-lg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 text-center">
                リテーナー型
              </h3>
              <div className="bg-gradient-to-r from-[#D9D9D9] to-[#FFFFFF] rounded p-6 lg:p-8 min-h-[250px] lg:min-h-[250px] flex items-start">
                <p className="text-black font-semibold leading-relaxed text-base lg:text-lg xl:text-xl">
                  主に経営幹部クラスや高度専門職、またはコンフィデンシャル案件を対象とした採用手法です。プロジェクト型で採用活動を行い、業界リサーチを基にターゲットリストを作成し、ダイレクトアプローチ（ヘッドハンティング）によって最適な人材を探索・確保します。
                </p>
              </div>
            </div>

            {/* Right Card - コンティンジェンシー型 */}
            <div
              className="w-full max-w-md lg:max-w-lg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 text-center">
                コンティンジェンシー型
              </h3>
              <div className="bg-gradient-to-r from-[#D9D9D9] to-[#FFFFFF] rounded px-6 lg:p-8 min-h-[250px] lg:min-h-[250px] flex items-start">
                <p className="text-black font-semibold leading-relaxed text-base lg:text-lg xl:text-xl">
                  幅広い職種やレイヤーを対象とした、完全成功報酬型の人材紹介手法です。採用決定まで費用が発生しないため、複数ポジションを同時に進めやすく、短期的な人材獲得に適しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
