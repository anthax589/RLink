import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RLink from "../../../assets/svg/RLink.svg";
import ServicesNav from "../../../shared/ServicesNav";
import Radial from "../../../assets/img/RadialBackGround.png";

export default function SnappCheck() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="w-full min-h-screen lg:h-screen relative">
      {/* Background container */}
      <div
        className="w-full min-h-screen absolute inset-0"
        style={{
          backgroundImage: `url(${Radial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Tab Navigation */}
      <div className="relative z-20">
        <ServicesNav />
      </div>

      {/* Content Section - Centered in remaining space */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 min-h-[calc(100vh-100px)] py-12 md:py-16 lg:pb-20">
        {/* Background Logo */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.4 }}
        >
          <img
            src={RLink}
            alt="RLink Logo"
            className="w-64 md:w-80 lg:w-96 xl:w-[500px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
          {/* Header */}
          <div
            className="mb-6 sm:mb-8"
            style={{
              textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)",
              fontFamily: "Lato-Bold",
            }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white font-bold"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              <span className="text-[#1867D1]">Snapp</span>
              <span className="text-white"> Check</span>
            </h1>
          </div>

          {/* Image Placeholder */}
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            className="w-full max-w-3xl h-32 sm:h-36 md:h-40 lg:h-44 flex items-center justify-center mx-auto bg-[#D9D9D9] rounded mb-6 sm:mb-8"
          >
            <span className="flex justify-center items-center mx-auto text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              IMAGE.JPG
            </span>
          </div>

          {/* Subtitle */}
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white py-4 sm:py-6 md:py-8 font-semibold"
            style={{ fontFamily: "Lato-Regular" }}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
          >
            AI搭載オンライン型リファレンスチェックサービス
          </h2>

          {/* Description - Stacked on mobile, side by side on desktop */}
          <div
            className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 text-white leading-relaxed max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="150"
          >
            {/* Left text box */}
            <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-4 sm:p-5 md:p-6">
              <p className="text-sm sm:text-base md:text-lg text-left break-words">
                人材獲得競争が激しさを増す中、早期離職やカルチャーミスマッチは企業の成長に大きな影響を及ぼします。候補者の実績や働き方を過去の上司や同僚から確認するリファレンスチェックは、こうしたリスクを未然に防ぐ有効な手段です。また、採用プロセスの透明性を確保することで、投資家やステークホルダーへの説明責任も果たせます。
              </p>
            </div>

            {/* Right text box */}
            <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-4 sm:p-5 md:p-6">
              <p className="text-sm sm:text-base md:text-lg text-left break-words">
                従来のリファレンスチェックは、主に電話やアンケートを通じて第三者の評価を収集するもので、時間や手間がかるうえ、得られる情報の質や一貫性にばらつきがありました。一方、Snapp
                CheckはAIを活用し、候補者データの検証やインサイト抽出を自動化。短期間で客観性の高い情報を提供し、スキル適性やカルチャーフィットをより正確に判断できます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
