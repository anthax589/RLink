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
    <div className="w-full min-h-screen lg:h-screen relative ">
      {/* Background container */}
      <div
        className="w-full h-full absolute inset-0"
        style={{
          backgroundImage: `url(${Radial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Tab Navigation */}
      <div className="relative z-20">
        <ServicesNav />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 min-h-[calc(100vh-100px)] py-12 md:py-16 lg:pb-36">
        {/* Background Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.4 }}
        >
          <img
            src={RLink}
            alt="RLink Logo"
            className="w-64 md:w-80 lg:w-96 xl:w-[500px] h-auto"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Two Column Content */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-36">
            {/* Left Card - リテーナー型 */}
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 lg:mb-8 text-center">
                リテーナー型
              </h3>
              <div className="bg-[#FFFFFF]/20 backdrop-blur-xs rounded p-3 sm:p-6 md:p-7 lg:p-8 xl:p-10 min-h-[200px] md:min-h-[260px] lg:min-h-[300px] flex items-center justify-center  lg:w-xl">
                <p className="text-white leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-words w-full flex justify-center">
                  主に経営幹部クラスや高度専門職、またはコン
                  <br className="hidden lg:block" />
                  フィデンシャル案件を対象とした採用手法で
                  <br className="hidden lg:block" />
                  す。プロジェクト型で採用活動を行い、業界リ
                  <br className="hidden lg:block" />
                  サーチを基にターゲットリストを作成し、ダイ
                  <br className="hidden lg:block" />
                  レクトアプローチ（ヘッドハンティング）に
                  <br className="hidden lg:block" />
                  よって最適な人材を探索・確保します。
                </p>
              </div>
            </div>

            {/* Right Card - コンティンジェンシー型 */}
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 lg:mb-8 text-center">
                コンティンジェンシー型
              </h3>
              <div className="bg-[#FFFFFF]/20 backdrop-blur-xs rounded p-3 sm:p-6 md:p-7 lg:p-8 xl:p-10 min-h-[200px] md:min-h-[260px] lg:min-h-[300px] flex items-center justify-center  lg:w-xl">
                <p className="text-white leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-words w-full flex justify-center">
                  幅広い職種やレイヤーを対象とした、完全
                  <br className="hidden lg:block" />
                  成功報酬型の人材紹介手法です。採用決定
                  <br className="hidden lg:block" />
                  まで費用が発生しないため、複数ポジショ
                  <br className="hidden lg:block" />
                  ンを同時に進めやすく、短期的な人材獲得
                  <br className="hidden lg:block" />
                  に適しています。
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
