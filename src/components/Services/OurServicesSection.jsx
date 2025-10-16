import React from "react";
import RPO from "../../assets/svg/RPOv3.svg";
import HR from "../../assets/svg/SnappCheck.svg";
import Executive from "../../assets/svg/Executive1.svg";
import ourservices from "../../assets/img/OurServicesBackGround.png";
import Contact from "../../assets/svg/Contact.svg";
import Staffing from "../../assets/svg/Staffing1.svg";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RobotServicesLayout() {
  const navigate = useNavigate();

  const handleViewMore = (path) => {
    navigate(path);
  };

  useEffect(() => {
    Aos.init({
      duration: 1500,
      startEvent: "load",
    });
  }, []);

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
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-once="true"
          data-aos-delay="0"
          className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-md py-10 px-4 border border-[#1867D1]/30"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-60 flex items-center justify-center ml-16">
              <img
                src={Executive}
                alt="Executive"
                className="w-auto h-auto object-contain self-center"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold pt-16 mb-2 text-black">
                人材紹介事業
              </h2>
              <p className="text-black mb-4 leading-relaxed text-nowrap tracking-wide">
                企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
                <br />
                一般的なコンティンジェンシー型(完全成功報酬型)まで職種や要件に合わせて柔軟に対応します。
                <br />
                コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
              </p>
              <div className="flex justify-end pr-10">
                <button
                  onClick={() => handleViewMore("/recruitment-business")}
                  className="btn bg-[#F4F2F2] text-black text-lg border border-black shadow-none px-14 py-7 f rounded hover:bg-gray-50 transition font-normal flex items-center gap-2"
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

        {/* Middle Section - Individual card animations */}
        <div className="flex gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-once="true"
            data-aos-delay="200"
            className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-lg p-6 border border-[#1867D1]/30"
            style={{ flexBasis: "55%" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              採用戦略アドバイザリー事業
            </h2>
            <p className="text-black mb-3 text-md leading-relaxed text-xl">
              般的なRPOの業務領域を超えた、採用の仕組みづくりから伴
              <br />
              奏型で企業の採用課題を支援します
            </p>
            <div className="flex gap-6 items-end relative top-4">
              <div className="flex justify-end">
                <div className="flex items-center justify-end">
                  <img
                    src={RPO}
                    alt="RPO"
                    className="w-96 lg:w-[500px] xl:w-[550px] h-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <button
                  onClick={() => handleViewMore("/recruitment-strategy")}
                  className="btn text-black border text-lg shadow-none border-black px-14 py-7 rounded hover:bg-white transition flex items-center justify-center gap-2 font-normal text-nowrap bg-[#F4F2F2]"
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

          {/* Middle Right - HR Product Service */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-once="true"
            data-aos-delay="200"
            className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-6 text-white"
            style={{ flexBasis: "45%" }}
          >
            <h2 className="text-2xl font-bold mb-2">HRプロダクト事業</h2>
            <p className="text-lg leading-relaxed text-nowrap">
              「候補者の実績や人柄」をAIとデータで可視化 <br />
              し、採用の精度を高め、ミスマッチを防ぐ
            </p>
            <div className="flex justify-center">
              <div className="w-auto h-auto flex items-center justify-center py-4">
                <img
                  src={HR}
                  alt="HR"
                  className="w-72 h-auto object-contain self-end"
                />
              </div>
            </div>
            <button
              onClick={() => handleViewMore("/hr-product-business")}
              className="btn mx-auto bg-black text-lg shadow-none text-white px-14 py-7 rounded border border-white flex items-center font-normal justify-center gap-2"
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
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Section - Fast animation trigger */}
        <div className="flex gap-5">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos-delay="0"
            className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-6 text-white relative overflow-visible"
            style={{ flexBasis: "45%" }}
          >
            <h2 className="text-2xl font-bold pb-3">Get in Touch</h2>
            <p className="mb-6 text-sm leading-relaxed">
              We'd love to hear from you. Whether you're a company seeking top
              executive talent or a professional exploring new career
              opportunities, RLink Partners is here to guide your next step.
            </p>

            <div className="flex items-end gap-4 relative top-12 h-64 overflow-visible">
              {/* Robot Image - Positioned to overflow outside */}
              <div className="absolute -left-22 -bottom-13 w-64">
                <img
                  src={Contact}
                  alt="Contact"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Buttons - Right Side with left margin to avoid robot */}
            <div className="w-full flex flex-col justify-end-safe relative left-45 bottom-20 self-end">
              <button className="w-68 bg-black text-white py-3 rounded font-normal text-lg border border-white flex justify-center items-center gap-2 cursor-pointer">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0003 10H10.0003C8.15938 10 6.66699 11.4924 6.66699 13.3333V26.6667C6.66699 28.5076 8.15938 30 10.0003 30H30.0003C31.8413 30 33.3337 28.5076 33.3337 26.6667V13.3333C33.3337 11.4924 31.8413 10 30.0003 10Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.66699 15L18.5103 20.9217C18.973 21.1529 19.4831 21.2732 20.0003 21.2732C20.5175 21.2732 21.0277 21.1529 21.4903 20.9217L33.3337 15"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                お問い合わせ
              </button>
            </div>
          </div>

          {/* Bottom Right - Material Search */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos-delay="0"
            className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-lg shadow-sm p-8 border border-[#1867D1]/30"
            style={{ flexBasis: "55%" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">
              人材派遣/契約・業務委託事業
            </h2>
            <p className="text-black mb-10 leading-relaxed text-xl">
              バイリンガル人材を含む幅広い職種・レイヤーの即戦力人
              <br />
              材を、スピード感をもってご紹介します。
            </p>
            <div className="flex gap-13 items-end flex-row-reverse flex-1 relative top-4">
              <div className="flex justify-end">
                <div className="w-72 flex items-center justify-end">
                  <img
                    src={Staffing}
                    alt="Staffing"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <button
                onClick={() => handleViewMore("/staffing")}
                className="btn text-black text-lg shadow-none border bg-[#F4F2F2] border-black px-14 py-7 rounded hover:bg-white transition flex items-center justify-center font-normal w-auto"
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
    </div>
  );
}
