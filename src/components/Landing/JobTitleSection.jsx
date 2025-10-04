import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Strength from "../../assets/img/StrenghtsBackGround.png";
import { useEffect } from "react";
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
    <button
      className="px-4 py-2 text-sm  text-white bg-[#161616] border border-[#1867D1]/40 rounded hover:bg-gray-800 transition-colors duration-200"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="20"
      data-aos-once="true"
    >
      {children}
    </button>
  );
  return (
    <div className=" h-screen flex flex-col items-center justify-center  py-12 px-4"
    style={{ backgroundImage: `url(${Strength})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl mx-auto">
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
              <h2 className="text-lg font-semibold text-white pt-12 mb-2">
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
  const StrengthCard = ({ title, subtitle, description }) => (
    <div className="bg-[#D8D8D8] p-6 border border-[#1867D1] rounded">
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-[#1867D1] font-medium mb-3">{subtitle}</p>
      <p className="text-black text-md leading-relaxed">{description}</p>
    </div>
  );

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
  
    (
      <div className="bg-white min-h-screen py-12 px-4 flex items-center justify-center "
      >
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

          <div className="grid md:grid-cols-2 gap-16 "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="20"
          data-aos-once="true">
            {strengths.map((strength, index) => (
              <StrengthCard
                key={index}
                title={strength.title}
                subtitle={strength.subtitle}
                description={strength.description}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

// Main App Component that combines both
const RLinkInterface = () => {
  return (
    <div className="min-h-screen">
     <div className="h-screen"> <JobCategories /></div>
      <CompanyStrengths />
    </div>
  );
};

export default RLinkInterface;
