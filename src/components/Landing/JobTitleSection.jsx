import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Strength from "../../assets/img/StrenghtsBackGround.png";
import { useEffect } from "react";
import SpotlightCard from "../TextAnimation/SpotlightCard/SpotlightCard";
import TiltedCard from "../TextAnimation/TiltedCard/TiltedCard";
import FirstCard from "../../assets/img/FirstCard.png";
// Job Categories Component
const JobCategories = () => {
  const managementCategories = [
    "カントリーマネージャー",
    "CEO / COO / CFO / CxO",
    "経営企画",
    "事業企画",
    "戦略コンサルタント",
  ];

  const businessCategories = [
    "セールス",
    "マーケティング",
    "カスタマーサクセス",
    "経理・財務",
    "サプライチェーン",
    "人事・総務",
    "法務",
  ];

  const technologyCategories = [
    "エンジニア",
    "バックエンド",
    "フロントエンド",
    "SRE",
    "PM・PMO",
    "システムエンジニア",
    "ITコンサルタント",
  ];

  const CategoryButton = ({ children }) => (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(24, 103, 209, 0.7)"
    >
      <button
        className="px-4 py-2 text-sm  text-white  "
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="20"
        data-aos-once="true"
      >
        {children}
      </button>
    </SpotlightCard>
  );
  return (
    <div
      className=" h-screen flex flex-col items-center justify-center  py-12 px-4"
      style={{
        backgroundImage: `url(${Strength})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[90vw] mx-auto flex flex-now-wrap flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-white ">
            <span className="text-[#1867D1]">R</span>
            <TypewriterOnScroll
              text="Linkの担当職種一覧"
              delay={80}
              threshold={0.5}
              className="inline-flex"
              letterClassName="inline-block"
            />
          </h1>
          {/* Categories Section */}
          <div className="space-y-10">
            {/* Management & Business Leader Section */}
            <div className="">
              <h2 className="text-lg font-semibold text-white pt-12 mb-4">
                経営・ビジネスリーダー職
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {managementCategories.map((category, index) => (
                  <CategoryButton key={index}>{category}</CategoryButton>
                ))}
              </div>
            </div>
            <hr className="text-black/20" />
            {/* Business & Corporate Section */}
            <div className="">
              <h2 className="text-lg font-semibold text-white mb-4">
                ビジネス・コーポレート
              </h2>
              <div
                className="flex flex-wrap justify-center gap-4 mb-12"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="20"
                data-aos-once="true"
              >
                {businessCategories.map((category, index) => (
                  <CategoryButton key={index}>{category}</CategoryButton>
                ))}
              </div>
            </div>
            <hr className="text-black/20" />
            {/* Technology & Consulting Section */}
            <div className="">
              <h2
                className="text-lg font-semibold text-white mb-4"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="20"
                data-aos-once="true"
              >
                テクノロジー・コンサルティング
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {technologyCategories.map((category, index) => (
                  <CategoryButton key={index}>{category}</CategoryButton>
                ))}
              </div>
            </div>
            <hr className="text-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Strengths Component
const CompanyStrengths = () => {
  const StrengthCard = ({ title, subtitle, description, index }) => {
    // Apply TiltedCard without image, only display content
    if (index === 0) {
      return (
        <div className="w-full h-full min-h-[200px]">
          <TiltedCard
            imageSrc="" // Empty image source
            altText="First Strength Card"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            scaleOnHover={1.02}
            rotateAmplitude={5}
            showTooltip={false}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="bg-[#D8D8D8] p-6 border border-[#1867D1] rounded w-full h-full flex flex-col justify-center">
                <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
                <p className="text-[#1867D1] font-medium mb-3">{subtitle}</p>
                <p className="text-black text-md leading-relaxed">
                  {description}
                </p>
              </div>
            }
          />
        </div>
      );
    }

    // Regular card for other cards with unique hover effects
    const getCardClasses = () => {
      const baseClasses =
        "bg-[#D8D8D8] p-6 border border-[#1867D1] rounded min-h-[200px] flex flex-col justify-center cursor-pointer overflow-hidden relative group";

      switch (index) {
        case 1: // Strength 02 - Smooth slide and glow effect
          return `${baseClasses} transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:transform hover:translate-y-[-12px] hover:shadow-2xl hover:shadow-[#1867D1]/40 hover:border-[#1867D1] hover:bg-gradient-to-br hover:from-[#E8E8E8] hover:to-[#D8D8D8] hover:border-2`;
        case 2: // Strength 03 - Smooth scale and rotate effect
          return `${baseClasses} transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.08] hover:rotate-2 hover:shadow-xl hover:shadow-[#1867D1]/25 hover:bg-[#E0E0E0] hover:border-2 hover:border-[#1867D1]`;
        case 3: // Strength 04 - Professional elevation and depth effect
          return `${baseClasses} transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:bg-gradient-to-br hover:from-[#F5F5F5] hover:via-[#EEEEEE] hover:to-[#E8E8E8] hover:shadow-2xl hover:shadow-[#1867D1]/20 hover:border-2 hover:border-[#1867D1] hover:transform hover:translate-y-[-6px] hover:scale-[1.02]`;
        default:
          return baseClasses;
      }
    };

    const getTextEffects = () => {
      switch (index) {
        case 1: // Strength 02 - Smooth text slide effect
          return {
            title:
              "group-hover:transform group-hover:translate-x-3 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            subtitle:
              "group-hover:text-[#0f4fa8] group-hover:transform group-hover:translate-x-1 transition-all duration-400 delay-100 ease-out",
            description:
              "group-hover:text-gray-700 group-hover:transform group-hover:translate-x-2 transition-all duration-600 delay-200 ease-out",
          };
        case 2: // Strength 03 - Smooth text glow effect
          return {
            title:
              "group-hover:text-[#1867D1] group-hover:drop-shadow-lg group-hover:transform group-hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            subtitle:
              "group-hover:text-[#0f4fa8] group-hover:font-semibold group-hover:transform group-hover:translate-y-[-2px] transition-all duration-400 delay-150 ease-out",
            description:
              "group-hover:text-gray-800 group-hover:transform group-hover:translate-y-1 transition-all duration-500 delay-250 ease-out",
          };
        case 3: // Strength 04 - Professional text enhancement
          return {
            title:
              "group-hover:transform group-hover:translate-y-[-2px] group-hover:text-[#1867D1] group-hover:font-semibold transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            subtitle:
              "group-hover:text-[#0f4fa8] group-hover:font-semibold group-hover:tracking-wide transition-all duration-350 delay-75 ease-out",
            description:
              "group-hover:text-gray-700 group-hover:leading-relaxed transition-all duration-500 delay-150 ease-out",
          };
        default:
          return {
            title: "",
            subtitle: "",
            description: "",
          };
      }
    };

    const textEffects = getTextEffects();

    return (
      <div className={getCardClasses()}>
        {/* Enhanced animated background elements */}
        {index === 1 && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1867D1]/8 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1867D1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
          </>
        )}
        {index === 2 && (
          <>
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] border-b-[#1867D1]/15 transform rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
            <div className="absolute inset-0 bg-radial-gradient from-[#1867D1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-[#1867D1]/30 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300 ease-out"></div>
          </>
        )}
        {index === 3 && (
          <>
            {/* Professional elevation indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1867D1] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

            {/* Subtle depth background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1867D1]/5 via-transparent to-[#1867D1]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out"></div>

            {/* Professional corner accents */}
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#1867D1] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 ease-out"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#1867D1] opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 ease-out"></div>

            {/* Clean content highlight */}
            <div className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-[#1867D1] to-[#0f4fa8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 delay-100 ease-out"></div>
          </>
        )}

        <h3
          className={`text-lg font-bold text-black mb-2 relative z-10 ${textEffects.title}`}
        >
          {title}
        </h3>
        <p
          className={`text-[#1867D1] font-medium mb-3 relative z-10 ${textEffects.subtitle}`}
        >
          {subtitle}
        </p>
        <p
          className={`text-black text-md leading-relaxed relative z-10 ${textEffects.description}`}
        >
          {description}
        </p>
      </div>
    );
  };

  const strengths = [
    {
      title: "Strength 01",
      subtitle: "エグゼクティブ・ハイクラス専門の転職支援",
      description:
        "豊富な実績とともに、金融業界専門でのハイクラス転職支援を展開することで、その実績に基づいた業界に特化した転職支援が強みです。私た研修を通じてアップスキルしたコンサルタント達が転職希望者を転職成功まで導きます。",
    },
    {
      title: "Strength 02",
      subtitle: "直接スカウト・ヘッドハンティング・マッチングサービス提供",
      description:
        "幹部候補人材の採用は各社共通の課題となっており、クライアント企業には、ヘッドハンター・スカウト・CXO、専門機関経験者をコンサルタントとして配置しており、スカウトメールやヘッドハンティングに対応しております。",
    },
    {
      title: "Strength 03",
      subtitle: "バイリンガル人材への豊富なサポート経験",
      description:
        "バイリンガル人材の転職成功に関する豊富な実績とノウハウがあります。近年グローバル化において外国人の採用ニーズ・各市場でのプロフェッショナル人材確保が急務となっております。",
    },
    {
      title: "Strength 04",
      subtitle: "高い専門性を持つ担当者",
      description:
        "高い専門性を持つ各領域を担当するコンサルタントがクライアント企業の課題解決に貢献いたします。この専門力のノウハウと豊富な実績によってより確実なマッチングにより、早期決定に寄与いたします。",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="bg-white min-h-screen py-12 px-4 flex items-center justify-center ">
      <div className="max-w-6xl mx-auto">
        {/* Strengths Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            <span className="text-[#1867D1]">R</span>
            <TypewriterOnScroll
              text="Linkの4つの強み"
              delay={80}
              threshold={0.5}
              className="inline-flex"
              letterClassName="inline-block"
            />
          </h2>
        </div>

        <div
          className="grid md:grid-cols-2 gap-16 "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="20"
          data-aos-once="true"
        >
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              index={index}
              title={strength.title}
              subtitle={strength.subtitle}
              description={strength.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component that combines both
const RLinkInterface = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen">
        {" "}
        <JobCategories />
      </div>
      <CompanyStrengths />
    </div>
  );
};

export default RLinkInterface;
