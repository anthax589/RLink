import React from "react";
import servicesIcon from "../../assets/services_assets/services.svg";
import executiveImg from "../../assets/services_assets/executive_img.svg";
import rpoImg from "../../assets/services_assets/rpo_img.svg";
import hrImg from "../../assets/services_assets/reference_img.svg";
import servicesbackground from "../../assets/services_assets/image 4.svg";
import { useNavigate } from "react-router-dom";
const services = [
  {
    img: executiveImg,
    title: "人材紹介事業",
    description: (
      <>
        企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
        <br />
        一般的なコンティンジェンシー型（完全成功報酬型）まで職種や要件に合わせて柔軟に対応します。
        <br />
        コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
      </>
    ),
    route: "/recruitment-business",
  },
  {
    img: rpoImg,
    title: "採用戦略アドバイザリー事業",
    description: (
      <>
        般的なRPOの業務領域を超えた、採用の仕組みづくりから伴奏型で企業の採用課題を支援します
      </>
    ),
    route: "/recruitment-strategy",
  },
  {
    img: hrImg,
    title: "HRプロダクト事業",
    description: (
      <>
        「候補者の実績や人柄」をAIとデータで可視化し、採用の精度を高め、ミスマッチを防ぐ
      </>
    ),
    route: "/hr-product-business",
  },
];

const ServiceCard = ({ img, title, description, index, route }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-6xl mx-auto mb-16 px-4 lg:px-8">
      <div className="flex  gap-5  items-center">
        {/* Image - Always on the left */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-68 h-68 flex items-center justify-center">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content - Always on the right */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-black leading-tight">
            {title}
          </h3>
          <p
            className="text-black leading-relaxed text-base lg:text-md text-nowrap"
            style={{ fontFamily: "Lato-Regular" }}
          >
            {description}
          </p>
          <div
            className={`flex justify-end mt-20 ${
              index === 1
                ? "relative left-16"
                : index === 2
                ? "relative left-29"
                : "ml-10"
            }`}
          >
            <button
              className="inline-flex  items-center gap-2 px-16 py-2 border border-black bg-transparent text-black rounded font-medium transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
              onClick={() => navigate(route)}
            >
              VIEW MORE →
            </button>
          </div>
        </div>
      </div>

      {/* Gradient line separator */}
      {index < services.length - 1 && (
        <div
          className="mt-16 mx-auto"
          style={{
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(275deg, rgba(24,103,209,1) 0%, rgba(0,0,0,1) 89%)",
          }}
        />
      )}
    </div>
  );
};
const OurServicesSection = () => {
  return (
    <section
      className="bg-white py-16 lg:py-24"
      style={{
        backgroundImage: `url(${servicesbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12">
            サービス
          </h2>

          {/* Description and Icon */}
          <div className="flex justify-evenly mx-auto max-w-6xl items-center mb-12 ">
            <div className="text-left space-y-6 w-2xl">
              <p className="text-black leading-relaxed text-2xl font-medium text-nowrap ">
                スタートアップをはじめとする成長企業には、スピード感と柔軟
                <br className="hidden lg:block" />
                性のある採用・人材活用が求められています。
              </p>
              <p className="text-black leading-relaxed text-xl font-medium text-nowrap">
                即戦力人材の確保から、採用戦略の仕組みづくりからの実行支
                <br className="hidden lg:block" />
                援、までを一気通貫で提供し、企業の成長ステージに応じた最適
                <br className="hidden lg:block" />
                なHRソリューションを提供します。
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={servicesIcon}
                alt="Services Icon"
                className="w-auto h-68 object-contain"
              />
            </div>
          </div>

          {/* Header gradient line */}
          <div
            className="mx-auto my-28"
            style={{
              width: "100px",
              height: "2px",
              background:
                "linear-gradient(275deg, rgba(24,103,209,1) 0%, rgba(0,0,0,1) 89%)",
            }}
          />
        </div>

        {/* Service Cards */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
