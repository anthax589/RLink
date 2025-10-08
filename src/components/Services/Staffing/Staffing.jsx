import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";
import ServicesNav from "../../../shared/ServicesNav";
function Staffing() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Background container */}
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #1867D1 100%)",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}
        <ServicesNav />

        {/* Content Section - Centered in remaining space */}
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-16 h-full pb-20 relative">
          {/* Background Logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-96 lg:w-[500px] xl:w-[450px] h-auto object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Header */}
            <div
              className="mb-8"
              style={{
                textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)",
                fontFamily: "Lato-Bold",
              }}
            >
              <h1
                className="text-3xl lg:text-4xl mb-8 text-white"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
              >
                担当職種一覧
              </h1>
            </div>

            {/* Job Categories Section */}
            <div
              className="bg-white/10 backdrop-blur-sm rounded py-4 px-16 max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              {/* Back Office Section */}
              <div className="mb-3">
                <h3
                  className="text-xl lg:text-2xl font-bold text-white mb-3"
                  style={{
                    fontFamily: "Lato-Bold",
                  }}
                >
                  バックオフィス
                </h3>
                <p className="text-white text-sm lg:text-base leading-relaxed">
                  ⼀般事務、部⾨アシスタント、秘書、受付、通訳・翻訳、経理、財務、会計採⽤、労務、教育、ジェネラリスト
                </p>
              </div>

              {/* Divider */}
              <hr className="border-white/30 my-3 w-2xl mx-auto" />

              {/* IT Section */}
              <div>
                <h3
                  className="text-xl lg:text-2xl font-bold text-white mb-3"
                  style={{
                    fontFamily: "Lato-Bold",
                  }}
                >
                  IT
                </h3>
                <p className="text-white text-sm lg:text-base leading-relaxed">
                  PM、PMO、SE、テスト、評価運用管理、ヘルプデスク
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffing;
