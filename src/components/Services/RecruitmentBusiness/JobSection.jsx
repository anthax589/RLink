import React from "react";
import userIcon from "../../../assets/svg/User.svg";

const JobCategories = () => {
  return (
    <section className="bg-transparent px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-12 text-black"
          data-aos="fade-up"
        >
          <span className="text-[#1867D1]">R</span>
          Link の担当職種一覧
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* --- 01 経営・ビジネスリーダー職 --- */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {/* Header */}
            <div className="flex h-16 rounded-lg  relative">
              {/* Blue section with number - Triangle/Arrow shape */}
              <div className="bg-[#1867D1] text-white px-4 py-5 flex items-center justify-center min-w-[50px] rounded-l relative left-1 z-10">
                <span className="font-bold text-lg ">01</span>
              </div>
              {/* Triangle arrow pointing right */}
              <div className="absolute left-[50px] top-5.5 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#1867D1] z-30"></div>
              {/* Dark section with title */}
              <div className="bg-[#05152A] text-white px-4 pl-8 flex items-center rounded-l-md flex-1 z-20">
                <h3 className="font-bold text-sm">経営・ビジネスリーダー職</h3>
              </div>
              {/* Black section with icon */}
              <div className="bg-black text-white px-4 flex items-center justify-center min-w-[50px] rounded-r">
                <div className="w-auto h-auto">
                  <img
                    src={userIcon}
                    alt="User Icon"
                    className="w-auto h-10 filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-0">
              {[
                "カントリーマネージャー",
                "CEO / COO / CFO / CAO",
                "経営企画",
                "事業企画",
                "戦略コンサルタント",
              ].map((item, i) => (
                <div
                  key={i}
                  className={` rounded-md px-4 py-5 text-center ${
                    [0, 2, 4, 6].includes(i)
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  <p
                    className="text-black text-[15px]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- 02 ビジネス・コーポレート --- */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="flex h-16  relative">
              {/* Blue section with number - Triangle/Arrow shape */}
              <div className="bg-[#1867D1] text-white px-4 flex items-center justify-center min-w-[50px] rounded-l relative left-1 z-10">
                <span className="font-bold text-lg">02</span>
              </div>
              {/* Triangle arrow pointing right - positioned to overlap */}
              <div className="absolute left-[54px] top-5.5 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#1867D1] z-30"></div>
              {/* Dark section with title */}
              <div className="bg-[#05152A] text-white   flex items-center rounded-l-md flex-1 z-20">
                <h3 className="font-bold text-sm text-nowrap w-full text-center">
                  ビジネス・コーポレート
                </h3>
              </div>
              {/* Black section with icon */}
              <div className="bg-black text-white px-4 flex items-center justify-center min-w-[60px] rounded-r"></div>
            </div>

            <div className="space-y-0">
              {[
                "セールス",
                "マーケティング",
                "カスタマーサクセス",
                "経理・財務",
                "サプライチェーン",
                "人事・総務",
                "法務",
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-transparent  rounded-md px-4 py-5 text-center ${
                    [0, 2, 4, 6].includes(i)
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  <p className="text-black font-medium text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- 03 テクノロジー・コンサルティング --- */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="flex h-16  relative">
              {/* Blue section with number - Triangle/Arrow shape */}
              <div className="bg-[#1867D1] text-white px-4 flex items-center justify-center min-w-[50px] rounded-l relative left-1 z-10">
                <span className="font-bold text-lg">03</span>
              </div>
              {/* Triangle arrow pointing right - positioned to overlap */}
              <div className="absolute left-[50px] top-5.5 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#1867D1] z-30"></div>
              {/* Dark section with title */}
              <div className="bg-[#05152A] text-white px-4 pl-8 flex items-center rounded-l-md flex-1 z-20">
                <h3 className="font-bold text-sm text-nowrap">
                  テクノロジー・コンサルティング
                </h3>
              </div>
              {/* Black section with icon */}
              <div className="bg-black text-white px-4 flex items-center justify-center min-w-[60px] rounded-r"></div>
            </div>

            <div className="space-y-0">
              {[
                "エンジニア",
                "バックエンド",
                "フロントエンド",
                "SRE",
                "PM・PMO",
                "システムエンジニア",
                "ITコンサルタント",
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-transparent  rounded-md px-4 py-5 text-center ${
                    [0, 2, 4, 6].includes(i)
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)]"
                  }`}
                >
                  <p className="text-black font-medium text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
