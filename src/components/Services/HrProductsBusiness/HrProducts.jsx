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
    <div className="w-full h-screen relative">
      {/* Background container */}
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${Radial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Tab Navigation - Positioned to overflow above background */}
        <ServicesNav />

        {/* Content Section - Centered in remaining space */}
        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-16 h-full pb-20 relative">
          {/* Background Logo */}
          <div
            className="absolute inset-0 flex items-center justify-center z-0 bottom-16"
            style={{ opacity: 0.4 }}
          >
            <img
              src={RLink}
              alt="RLink Logo"
              className="w-96 lg:w-[500px] xl:w-[550px] h-auto object-contain"
            />
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Header */}
            <div
              className="mb-8"
              style={{
                textShadow: "2px 5px 2px rgba(0, 0, 0, 0.3)",
                fontFamily: "Lato-Bold",
              }}
            >
              <h1
                className="text-5xl mb-4 text-white"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
              >
                <span className="text-[#1867D1]">Snapp</span>
                <span className="text-white"> Check</span>
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              className="w-xl h-36 flex items-center justify-center mx-auto  bg-[#D9D9D9]"
            >
              {/* <img
              src={Executive}
              alt="Executive Search"
              className="w-full h-full"
            /> */}
              <span className="flex justify-center items-center mx-auto text-black text-5xl">
                IMAGE.JPG
              </span>
            </div>

            {/* Subtitle */}
            <h2
              className="text-3xl text-white py-8"
              style={{ fontFamily: "Lato-Regular" }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              AI搭載オンライン型リファレンスチェックサービス
            </h2>

            {/* Description - Two columns side by side */}
            <div
              className="flex gap-8 text-white text-sm leading-relaxed max-w-6xl mx-auto mb-12"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="150"
            >
              {/* Left text box */}
              <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-6 ">
                <p className="text-justify text-lg">
                  人材獲得競争が激しさを増す中、早期離職やカルチャーミス <br />
                  マッチは企業の成長に大きな影響を及ぼします。
                  <br />
                  候補者の実績や働き方を過去の上司や同僚から確認するリ <br />
                  ファレンスチェックは、こうしたリスクを未然に防ぐ有効な <br />
                  手段です。また、採用プロセスの透明性を確保することで、
                  <br />
                  投資家やステークホルダーへの説明責任も果たせます。
                </p>
              </div>

              {/* Right text box */}
              <div className="flex-1 bg-[#FFFFFF]/20 backdrop-blur-sm rounded p-6 ">
                <p className="text-justify text-lg text-nowrap">
                  従来のリファレンスチェックは、主に電話やアンケートを通じ{" "}
                  <br />
                  て第三者の評価を収集するもので、時間や手間がかるうえ、
                  <br />
                  得られる情報の質や一貫性にばらつきがありました。一方、
                  <br />
                  Snapp CheckはAIを活用し、候補者データの検証やインサイ
                  <br />
                  ト抽出を自動化。短期間で客観性の高い情報を提供し、スキル{" "}
                  <br />
                  適性やカルチャーフィットをより正確に判断できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
