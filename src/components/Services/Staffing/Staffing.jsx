import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RLink from "../../../assets/svg/RLink.svg";
import ServicesNav from "../../../shared/ServicesNav";
import Radial from "../../../assets/img/RadialBackGround.png";

function Staffing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full min-h-screen lg:h-screen relative">
      {/* Background container */}
      <div
        className="w-full min-h-screen absolute inset-0"
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

      {/* Content Section - Centered in remaining space */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 min-h-[calc(100vh-100px)] py-12 md:py-16 lg:pb-24">
        {/* Background Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.4 }}
        >
          <img
            src={RLink}
            alt="RLink Logo"
            className="w-64 md:w-80 lg:w-96 xl:w-[500px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
          {/* Header */}
          <div
            className="mb-6 sm:mb-8"
            style={{
              textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)",
              fontFamily: "Lato-Bold",
            }}
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-white font-bold"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              担当職種一覧
            </h1>
          </div>

          {/* Job Categories Section */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-16 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
          >
            {/* Back Office Section */}
            <div className="mb-6 sm:mb-8">
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4"
                style={{
                  fontFamily: "Lato-Bold",
                }}
              >
                バックオフィス
              </h3>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed break-words">
                ⼀般事務、部⾨アシスタント、秘書、受付、通訳・翻訳、経理、財務、会計採⽤、労務、教育、ジェネラリスト
              </p>
            </div>

            {/* Divider */}
            <hr className="border-white/30 my-4 sm:my-6 w-full max-w-2xl mx-auto" />

            {/* IT Section */}
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4"
                style={{
                  fontFamily: "Lato-Bold",
                }}
              >
                IT
              </h3>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed break-words">
                PM、PMO、SE、テスト、評価運用管理、ヘルプデスク
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffing;
