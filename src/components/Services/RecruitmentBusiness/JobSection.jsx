import React from "react";
import userIcon from "../../../assets/svg/User.svg";

const JobCategories = () => {
  return (
    <section className="bg-transparent px-6 md:px-12 pb-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center  text-black py-20"
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
                    className="w-auto h-8 filter brightness-0 invert"
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
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)] bg-gradient-to-r from-[#F5F5F5]/0 to-[#FFFFFF]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)] bg-gradient-to-l from-[#F5F5F5]/0 to-[#FFFFFF]"
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
              <div className="bg-black text-white px-4 flex items-center justify-center min-w-[50px] rounded-r">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 62 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5556 36.1049V29.5404H34.4444V36.1049H27.5556ZM24.1111 9.84679H37.8889V5.30086C37.8889 4.79758 37.6684 4.33478 37.2276 3.91246C36.7867 3.49014 36.301 3.28008 35.7706 3.28227H26.2294C25.7013 3.28227 25.2156 3.49233 24.7724 3.91246C24.3293 4.33259 24.1088 4.79539 24.1111 5.30086V9.84679ZM5.56622 52.5162C3.97948 52.5162 2.65567 52.0107 1.59478 50.9998C0.533889 49.9888 0.0022963 48.7263 0 47.2121V34.4637H24.1111V36.7351C24.1111 37.4966 24.3752 38.1289 24.9033 38.6322C25.4315 39.1355 26.0951 39.3871 26.8942 39.3871H35.1058C35.9049 39.3871 36.5685 39.1355 37.0967 38.6322C37.6248 38.1289 37.8889 37.4966 37.8889 36.7351V34.4637H62V47.2153C62 48.7252 61.4696 49.9856 60.4087 50.9965C59.3478 52.0074 58.024 52.514 56.4372 52.5162H5.56622ZM0 31.1815V15.1509C0 13.6389 0.531593 12.3774 1.59478 11.3665C2.65796 10.3555 3.98063 9.84898 5.56278 9.84679H20.6667V5.30086C20.6667 3.79102 21.1983 2.52954 22.2614 1.51641C23.3246 0.503287 24.6484 -0.0021811 26.2329 7.07384e-06H35.7706C37.355 7.07384e-06 38.6788 0.505475 39.742 1.51641C40.8052 2.52735 41.3356 3.78883 41.3333 5.30086V9.84679H56.4372C58.0217 9.84679 59.3443 10.3534 60.4052 11.3665C61.4661 12.3796 61.9977 13.6411 62 15.1509V31.1815H37.8889V28.9102C37.8889 28.1487 37.6248 27.5163 37.0967 27.013C36.5685 26.5097 35.9049 26.2581 35.1058 26.2581H26.8942C26.0951 26.2581 25.4315 26.5097 24.9033 27.013C24.3752 27.5163 24.1111 28.1487 24.1111 28.9102V31.1815H0Z"
                    fill="white"
                  />
                </svg>
              </div>
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
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)]  bg-gradient-to-r from-[#F5F5F5]/0 to-[#FFFFFF]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)]  bg-gradient-to-l from-[#F5F5F5]/0 to-[#FFFFFF]"
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
              <div className="bg-black text-white px-4 flex items-center justify-center min-w-[60px] rounded-r">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.7285 10.0669V5.03347H47.4569V0H42.1828V5.03347H36.9113V0H31.6371V5.03347H26.3656V0H21.0888V5.03347H15.8172V0H10.5431V5.03347H5.27153V10.0669H0V15.1029H5.27153V20.1364H0V25.1724H5.27153V30.2058H0V35.2418H5.27153V40.2753H0V45.3113H5.27153V50.3447H10.5431V55.3807H15.8172V50.3472H21.0888V55.3807H26.3629V50.3472H31.6345V55.3807H36.9086V50.3472H42.1801V55.3807H47.4543V50.3472H52.7258V45.3138H58V40.2778H52.7285V35.2443H58V30.2083H52.7285V25.1749H58V20.1364H52.7285V15.1029H58V10.0669H52.7285ZM47.4569 45.3113H10.5431V10.0694H47.4517L47.4569 45.3113Z"
                    fill="white"
                  />
                  <path
                    d="M42 15.2776H16V40.1034H41.9974L42 15.2776Z"
                    fill="white"
                  />
                </svg>
              </div>
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
                      ? "shadow-[5px_4px_4px_rgba(0,0,0,0.10)]  bg-gradient-to-r from-[#F5F5F5]/0 to-[#FFFFFF]"
                      : "shadow-[-5px_4px_4px_rgba(0,0,0,0.10)]  bg-gradient-to-l from-[#F5F5F5]/0 to-[#FFFFFF]"
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
