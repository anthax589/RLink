import React from "react";
import RPO from "../../assets/img/RPO.png";
import HR from "../../assets/img/HR.png";
import Executive from "../../assets/img/Executive.png";
import ourservices from "../../assets/img/OurServicesBackGround.png";
import Contact from "../../assets/img/ContactUs.png";
import Staffing from "../../assets/img/Staffing.png";
import { useNavigate } from "react-router-dom";

export default function RobotServicesLayout() {
  const navigate = useNavigate();

  const handleViewMore = (path) => {
    navigate(path);
  };
  return (
    <div
      className="min-h-screen bg-gray-100 py-20"
      style={{
        backgroundImage: `url(${ourservices})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Top Left - AI Introduction Service */}
        <div className="bg-transparent rounded-md  p-8  border border-[#1867D1]/50">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-64  flex items-center justify-center">
              <img
                src={Executive}
                alt="Executive"
                className="w-auto h-auto object-contain self-center"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-black">
                人材紹介事業
              </h2>
              <p className="text-black mb-4 leading-relaxed text-nowrap ">
                企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
                <br />
                一般的なコンティンジェンシー型（完全成功報酬型）まで職種や要件に合わせて柔軟に対応します。
                <br />
                コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
              </p>
              <div className="flex justify-end pr-10">
                <button
                  onClick={() => handleViewMore("/recruitment-business")}
                  className="text-black border border-gray-400 px-6 py-2 rounded hover:bg-gray-50 transition flex items-center gap-2"
                >
                  VIEW MORE
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66406 8.12695V1.99219H3.5293V0.628906H11.0273V8.12695H9.66406ZM6.25586 11.5352V5.40039H0.121094V4.03711H7.61914V11.5352H6.25586Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Left - Recruitment Strategy Advisory */}
        <div className="flex gap-5">
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-[#1867D1]/50"
            style={{ flexBasis: "55%" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              採用戦略アドバイザリー事業
            </h2>
            <p className="text-black mb-8 text-md leading-relaxed text-xl">
              般的なRPOの業務領域を超えた、採用の仕組みづくりから伴
              <br />
              奏型で企業の採用課題を支援します
            </p>
            <div className="flex  gap-6 items-end relative top-13">
              <div className="flex justify-center">
                <div className="w-64 flex items-center justify-center relative bottom-10">
                  <img
                    src={RPO}
                    alt="RPO"
                    className="w-auto h-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 flex justify-end ">
                <button className="text-black border border-black px-16 py-3 rounded hover:bg-white transition flex items-center justify-center gap-2 text-sm font-medium w-full text-nowrap">
                  VIEW MORE
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66406 8.12695V1.99219H3.5293V0.628906H11.0273V8.12695H9.66406ZM6.25586 11.5352V5.40039H0.121094V4.03711H7.61914V11.5352H6.25586Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Middle Right - HR Product Service */}
          <div
            className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-8 text-white"
            style={{ flexBasis: "45%" }}
          >
            <h2 className="text-xl font-bold mb-2">HRプロダクト事業</h2>
            <p className="mb-2 text-lg leading-relaxed text-nowrap">
              「候補者の実績や人柄」をAIとデータで可視化 <br />
              し、採用の精度を高め、ミスマッチを防ぐ
            </p>
            <div className="flex justify-center ">
              <div className="w-auto h-auto flex items-center justify-center">
                <img
                  src={HR}
                  alt="HR"
                  className="w-auto h-auto object-contain self-end"
                />
              </div>
            </div>
            <button className="w-1/2 mx-auto bg-black text-white px-6 py-2 rounded  border border-white flex items-center justify-center gap-2">
              VIEW MORE
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66406 8.12695V1.99219H3.5293V0.628906H11.0273V8.12695H9.66406ZM6.25586 11.5352V5.40039H0.121094V4.03711H7.61914V11.5352H6.25586Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-5">
          <div
            className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-6 text-white relative overflow-visible"
            style={{ flexBasis: "45%" }}
          >
            <h2 className="text-2xl font-bold mb-3">Get in Touch</h2>
            <p className="mb-6 text-sm leading-relaxed">
              We'd love to hear from you. Whether you're a company seeking top
              executive talent or a professional exploring new career
              opportunities, RLink Partners is here to guide your next step.
            </p>

            <div className="flex items-end gap-4 relative">
              {/* Robot Image - Positioned to overflow outside */}
              <div className="absolute -left-22 -bottom-25 w-64">
                <img
                  src={Contact}
                  alt="Contact"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Buttons - Right Side with left margin to avoid robot */}
              <div className="w-full space-y-10 flex flex-col justify-end-safe relative left-60">
                <button className="w-48 bg-black text-white px-4 py-4 rounded hover:bg-white hover:text-blue-600 transition font-normal text-xs border border-white">
                  サービスについて(法人)
                </button>
                <button className="w-48 bg-black text-white px-4 py-4 rounded hover:bg-white hover:text-blue-600 transition font-normal text-xs border border-white">
                  サービスについて(法人)
                </button>
                <button className="w-48 bg-black text-white px-4 py-4 rounded hover:bg-white hover:text-blue-600 transition font-normal text-xs border border-white">
                  サービスについて(法人)
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right - Material Search */}
          <div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-8 border border-[#1867D1]/50"
            style={{ flexBasis: "55%" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              人材派遣/契約・業務委託事業
            </h2>
            <p className="text-black mb-8 leading-relaxed text-xl">
              バイリンガル人材を含む幅広い職種・レイヤーの即戦力人
              <br />
              材を、スピード感をもってご紹介します。
            </p>
            <div className="flex justify-end ">
              <div className="w-64">
                <img
                  src={Staffing}
                  alt="Staffing"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <button className="text-black border border-black px-20 py-3 rounded hover:bg-white transition flex items-center justify-center gap-2 text-sm font-medium w-auto">
              VIEW MORE
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66406 8.12695V1.99219H3.5293V0.628906H11.0273V8.12695H9.66406ZM6.25586 11.5352V5.40039H0.121094V4.03711H7.61914V11.5352H6.25586Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
