import React from 'react'
import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import tablebg from "../../../assets/img/OurServicesBackGround.png"
function StrategicApproach() {
  return (
    <div className="max-w-full mx-auto">
      <div
        className="h-screen flex flex-col justify-center items-center bg-white/90"
        style={{
          backgroundImage: `url(${tablebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center ">
          <h2
            className="text-3xl font-bold text-black"
            style={{ textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3 )" }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
          >
            自社採用の戦略的アプローチ、および採用ポジションの決定支援
          </h2>
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
            data-aos-offset="200"
            data-aos-delay="150"
          >
            <h3 className="text-base font-bold text-black mb-6 text-center">
              クライアント概要
            </h3>
            <ul className="space-y-2 text-sm text-black flex flex-col justify-center mx-auto">
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                企業：SaaS企業（シリーズB）
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                従業員数：約50名
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                人事部構成：採用担当1名、採用事務1名
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
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
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <h3 className="text-base font-bold text-black mb-6 text-center">
              課題
            </h3>
            <ul className="space-y-2 text-sm text-black flex flex-col justify-center mx-auto">
              <li className="flex items-start gap-2">
                <div className="flex items-center pt-2">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                  </svg>
                </div>
                複数の採用媒体を併用した結果、効果が分散し、
                <br />
                候補者の母集団形成ができていない
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                目標採用数に対し、担当人員が不足している
              </li>
              <li className="flex items-center gap-2">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="4,1 7,4 4,7 1,4" fill="black" />
                </svg>
                採用難易度の高いポジションに対する理解不足
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicApproach
