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
  const strengths = [
    {
      title: "Strength 01",
      subtitle: "エグゼクティブ・ハイクラス専門の転職支援",
      description: (
        <>
          独自のルートによる、企業の経営層との強いパイプライン <br />
          経験豊富なコンサルタントが、独自の方法で企業の経営層やCxOと強いパイプを持ち{" "}
          <br />
          日々情報をアップデートすることで、企業風土や事業戦略など、 <br />
          価値の高いリアルな情報を提供いたします。
        </>
      ),
      imagePosition: "left",
    },
    {
      title: "Strength 02",
      subtitle: "有望スタートアップ・グロース企業のエクスクルーシブ求人",
      description: (
        <>
          非公開求人の割合は弊社全体求人の34.6％ <br />
          弊社独自のルートによる、カントリーマネージャー、CxO、事業部責任者などの、{" "}
          <br />
          他社にはないエクスクルーシブ求人が数多くございます。
        </>
      ),
      imagePosition: "right",
    },
    {
      title: "Strength 03",
      subtitle: "バイリンガル人材への豊富なサポート実績",
      description: (
        <>
          バイリンガル求人の割合は全体の32.4％ <br />
          バイリンガル人材の転職支援において豊富な実績を誇ります。 <br />
          英語面接の対策や英文レジュメの作成など手厚いサポートがございます。
        </>
      ),
      imagePosition: "left",
    },
    {
      title: "Strength 04",
      subtitle: "高い内定条件交渉率",
      description: (
        <>
          高い内定条件交渉率 年収またはタイトルアップ率94.2% <br />
          ※2024年2月時点 <br />
          ご紹介企業のマネジメント層との強いリレーションによって
          <br />
          ご希望に応じた給与条件や職位の獲得に貢献します。
        </>
      ),
      imagePosition: "right",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
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

        {/* Alternating Layout */}
        <div className="space-y-24">
          {strengths.map((strength, index) => {
            const isImageLeft = strength.imagePosition === "left";
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start gap-12 ${
                  isImageLeft ? "" : "md:flex-row-reverse"
                }`}
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="20"
                data-aos-once="true"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#CCCCCC] aspect-[5/3] flex items-center justify-center">
                    <span className="text-black text-lg font-medium">
                      Image.jpg
                    </span>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-black mb-20">
                    {strength.title}
                  </h3>
                  <h4 className="text-xl text-[#1867D1] font-semibold mb-16 leading-relaxed">
                    {strength.subtitle}
                  </h4>
                  <p className="text-black text-base leading-relaxed text-nowrap">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main App Component that combines both
const RLinkInterface = () => {
  return (
    <div className="min-h-screen">
      <CompanyStrengths />
    </div>
  );
};

export default RLinkInterface;
