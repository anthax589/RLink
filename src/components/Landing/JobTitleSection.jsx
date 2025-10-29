import { useEffect, useState } from "react";
import Strength1 from "../../assets/svg/Strength1.svg";
import Strenght2 from "../../assets/svg/Strength2.svg";
import Strength3 from "../../assets/svg/Strength3.svg";
import Strength4 from "../../assets/svg/Strength4.svg";

const TypewriterOnScroll = ({
  text,
  delay = 80,
  className = "",
  letterClassName = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= text.length) {
              setDisplayedText(text.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, delay);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("typewriter-trigger");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [text, delay, hasStarted]);

  return (
    <span id="typewriter-trigger" className={className}>
      {displayedText.split("").map((char, index) => (
        <span key={index} className={letterClassName}>
          {char}
        </span>
      ))}
    </span>
  );
};

const CompanyStrengths = () => {
  return (
    <div className="bg-transparent min-h-screen py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
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
        <div className="flex flex-col gap-y-12 md:gap-y-16 w-full">
          {/* Strength 01 - Image on left (desktop), top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile, left on desktop */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength1}
                  alt="Strength 01"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                Strength 01
              </h3>
              <h4 className="text-lg md:text-xl lg:text-2xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-16">
                エグゼクティブ・ハイクラス専門の転職支援
              </h4>
              <p className="text-sm md:text-base leading-relaxed text-black">
                独自のルートによる、企業の経営層との強いパイプライン
                <br />
                経験豊富なコンサルタントが、独自の方法で企業の経営層やCxOと強いパイプを持ち
                <br />
                日々情報をアップデートすることで、企業風土や事業戦略など、
                <br />
                価値の高いリアルな情報を提供いたします。
              </p>
            </div>
          </div>

          {/* Strength 02 - Text on left, Image on right (desktop), Image top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile with order-first */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0 order-first md:order-last">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strenght2}
                  alt="Strength 02"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                Strength 02
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-16">
                有望スタートアップ・グロース企業のエクスクルーシブ求人
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed">
                非公開求人の紹介比率は業界最大級の63.4%
                <br />
                特別な取扱いによる上記、カントリーマネージャー、CxO、事業責任者案件などの、
                <br />
                他社にはないエクスクルーシブ求人が多数そろっております。
              </p>
            </div>
          </div>

          {/* Strength 03 - Image on left (desktop), top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile, left on desktop */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength3}
                  alt="Strength 03"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                Strength 03
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-16">
                バイリンガル人材への徹底なサポート実績
              </h4>
              <p className="text-sm md:text-base text-black leading-relaxed">
                バイリンガル人材の紹介比率は業界最大級の33.4%
                <br />
                バイリンガル人材の転職支援において徹底した支援体制を誇ります。
                <br />
                英語面接の対策や英文レジュメの作成など専門サポートがございます。
              </p>
            </div>
          </div>

          {/* Strength 04 - Text on left, Image on right (desktop), Image top (mobile) */}
          <div className="flex flex-col md:flex-row w-full items-start gap-8 md:gap-16">
            {/* Image - Shows first on mobile with order-first */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0 order-first md:order-last">
              <div className="h-fit flex items-center justify-center">
                <img
                  src={Strength4}
                  alt="Strength 04"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:mb-20">
                Strength 04
              </h3>
              <h4 className="text-lg md:text-xl text-[#1867D1] font-semibold mb-6 md:mb-10 lg:mb-13">
                高い内定者年次決率
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed">
                高い内定条件交渉率 年収またはタイトルアップ率94.2%
                <br />
                ※2024年2月時点
                <br />
                ご紹介企業のマネジメント層との強いリレーションによって、
                <br />
                ご希望に応じた給与条件や職位の獲得に貢献します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RLinkInterface = () => {
  return (
    <div className="min-h-screen">
      <CompanyStrengths />
    </div>
  );
};

export default RLinkInterface;
