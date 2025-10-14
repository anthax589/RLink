import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RLink from "../../../assets/svg/RLink.svg";
import ServicesNav from "../../../shared/ServicesNav";
import Radial from "../../../assets/img/RadialBackGround.png";
function IntroductionSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Background container */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${Radial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}
        <ServicesNav />

        {/* Content Section - Centered in remaining space */}
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-16 h-full pb-36 relative">
          {/* Background Logo */}
          <div
            className="absolute bottom-10 inset-0 flex items-center justify-center z-0"
            style={{ opacity: 0.4 }}
          >
            <img
              src={RLink}
              alt="RLink Logo"
              className="w-96 lg:w-[500px] xl:w-96 2xl:w-xl h-auto"
              style={{
                objectFit: "contain",
              }}
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
              <div className="bg-[#FFFFFF]/20 rounded p-6 lg:p-8 min-h-[250px] lg:min-h-[250px] flex items-start">
                <p className="text-white  leading-relaxed text-base lg:text-lg xl:text-xl">
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
              <div className="bg-[#FFFFFF]/20 rounded px-6 lg:p-8 min-h-[250px] lg:min-h-[250px] flex items-start">
                <p className="text-white  leading-relaxed text-base lg:text-lg xl:text-xl">
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
