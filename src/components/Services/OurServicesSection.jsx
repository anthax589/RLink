import React from "react";
import RPO from "../../assets/svg/RPOv3.svg";
import HR from "../../assets/svg/SnappCheck.svg";
import Executive from "../../assets/svg/Executive1.svg";
import ourservices from "../../assets/img/OurServicesBackGround.png";
import Contact from "../../assets/svg/Contact.svg";
import Staffing from "../../assets/svg/Staffing1.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RobotServicesLayout() {
  const navigate = useNavigate();

  const handleViewMore = (path) => {
    navigate(path);
  };

  return (
    <div
      className="min-h-screen bg-gray-100 py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${ourservices})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* Top Left - AI Introduction Service */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-md p-6 md:py-8 lg:py-10 px-4 md:px-6 border border-[#1867D1]/30"
        >
          <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-full lg:w-60 flex items-center justify-center lg:ml-16 order-first">
              <img
                src={Executive}
                alt="Executive"
                className="w-48 md:w-56 lg:w-auto h-auto object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold lg:pt-16 mb-2 text-black">
                人材紹介事業
              </h2>
              <p className="text-black text-sm md:text-base mb-4 leading-relaxed tracking-wide">
                企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
                <br className="hidden lg:block" />
                一般的なコンティンジェンシー型(完全成功報酬型)まで職種や要件に合わせて柔軟に対応します。
                <br className="hidden lg:block" />
                コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
              </p>
              <div className="flex justify-end lg:pr-10">
                <button
                  onClick={() => handleViewMore("/recruitment-business")}
                  className="btn w-full lg:w-68 bg-[#F4F2F2] text-black text-sm md:text-base lg:text-lg border border-black shadow-none px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded hover:bg-gray-50 transition font-normal flex items-center gap-2"
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
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-4 md:gap-5"
        >
          {/* Recruitment Strategy */}
          <div className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-lg p-4 md:p-6 border border-[#1867D1]/30 lg:flex-[55%]">
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-black">
              採用戦略アドバイザリー事業
            </h2>
            <p className="text-black text-sm md:text-base lg:text-xl mb-3 leading-relaxed">
              般的なRPOの業務領域を超えた、採用の仕組みづくりから伴
              <br className="hidden lg:block" />
              奏型で企業の採用課題を支援します
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-end lg:relative lg:top-4">
              <div className="flex justify-center lg:justify-end order-first lg:order-none">
                <img
                  src={RPO}
                  alt="RPO"
                  className="w-64 md:w-80 lg:w-96 xl:w-[550px] h-auto object-contain"
                />
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <button
                  onClick={() => handleViewMore("/recruitment-strategy")}
                  className="btn  text-black border text-sm md:text-base lg:text-lg shadow-none border-black px-20 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded hover:bg-white transition flex items-center justify-center gap-2 font-normal bg-[#F4F2F2]"
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

          {/* HR Product Service */}
          <div className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-4 md:p-6 text-white lg:flex-[45%]">
            <h2 className="text-lg md:text-2xl font-bold mb-2">
              HRプロダクト事業
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              「候補者の実績や人柄」をAIとデータで可視化{" "}
              <br className="hidden lg:block" />
              し、採用の精度を高め、ミスマッチを防ぐ
            </p>
            <div className="flex justify-center">
              <div className="w-auto h-auto flex items-center justify-center py-4 lg:py-8">
                <img
                  src={HR}
                  alt="HR"
                  className="w-48 md:w-60 lg:w-72 h-auto object-contain"
                />
              </div>
            </div>
            <button
              onClick={() => handleViewMore("/hr-product-business")}
              className="btn w-full lg:w-68 mx-auto bg-black text-sm md:text-base lg:text-lg shadow-none text-white px-4 md:px-12 lg:px-14 py-6 md:py-6 lg:py-7 rounded border border-white flex items-center font-normal justify-center gap-2"
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
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-4 md:gap-5"
        >
          {/* Get in Touch */}
          <div className="bg-gradient-to-b from-[#1867D1] to-[#0C356B] rounded-lg shadow-md p-4 md:p-6 text-white relative overflow-visible lg:flex-[45%]">
            <h2 className="text-xl md:text-2xl font-bold pb-3">Get in Touch</h2>
            <p className="mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
              We'd love to hear from you. Whether you're a company seeking top
              executive talent or a professional exploring new career
              opportunities, RLink Partners is here to guide your next step.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:relative lg:top-12 lg:h-64 overflow-visible">
              {/* Robot Image */}
              <div className="w-48 md:w-56 lg:w-64 lg:absolute lg:-left-22 lg:-bottom-13 order-first lg:order-none">
                <img
                  src={Contact}
                  alt="Contact"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Button */}
              <div className="w-full lg:w-auto flex justify-center lg:justify-end lg:relative lg:left-45 lg:bottom-20">
                <button className="w-full md:w-auto lg:w-68 bg-black text-white py-3 px-6 rounded font-normal text-sm md:text-base lg:text-lg border border-white flex justify-center items-center gap-2 cursor-pointer">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
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
          </div>

          {/* Staffing Service */}
          <div className="bg-gradient-to-tb from-[#E4E5E5] to-[#F0F0F0] rounded-lg shadow-sm p-4 md:p-6 lg:p-8 border border-[#1867D1]/30 lg:flex-[55%]">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-black">
              人材派遣/契約・業務委託事業
            </h2>
            <p className="text-black text-sm md:text-base lg:text-xl mb-6 md:mb-8 lg:mb-10 leading-relaxed">
              バイリンガル人材を含む幅広い職種・レイヤーの即戦力人
              <br className="hidden lg:block" />
              材を、スピード感をもってご紹介します。
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-13 items-center lg:items-end lg:relative lg:top-4">
              <div className="flex justify-center lg:justify-end order-first lg:order-last">
                <div className="w-48 md:w-60 lg:w-72">
                  <img
                    src={Staffing}
                    alt="Staffing"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <button
                onClick={() => handleViewMore("/staffing")}
                className="btn text-black text-sm md:text-base lg:text-lg shadow-none border bg-[#F4F2F2] border-black px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded hover:bg-white transition flex items-center justify-center font-normal w-full lg:w-auto"
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
        </motion.div>
      </div>
    </div>
  );
}
