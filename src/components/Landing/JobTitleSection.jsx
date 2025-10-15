import { useEffect, useState } from "react";

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
  // const strengths = [
  //   {
  //     title: "Strength 01",
  //     subtitle: "エグゼクティブ・ハイクラス専門の転職支援",
  //     description: (
  //       <>
  //         独自のルートによる、企業の経営層との強いパイプライン <br />
  //         経験豊富なコンサルタントが、独自の方法で企業の経営層やCxOと強いパイプを持ち{" "}
  //         <br />
  //         日々情報をアップデートすることで、企業風土や事業戦略など、 <br />
  //         価値の高いリアルな情報を提供いたします。
  //       </>
  //     ),
  //     imagePosition: "left",
  //   },
  //   {
  //     title: "Strength 02",
  //     subtitle: "有望スタートアップ・グロース企業のエクスクルーシブ求人",
  //     description: (
  //       <>
  //         非公開求人の割合は弊社全体求人の34.6％ <br />
  //         弊社独自のルートによる、カントリーマネージャー、CxO、事業部責任者などの、{" "}
  //         <br />
  //         他社にはないエクスクルーシブ求人が数多くございます。
  //       </>
  //     ),
  //     imagePosition: "right",
  //   },
  //   {
  //     title: "Strength 03",
  //     subtitle: "バイリンガル人材への豊富なサポート実績",
  //     description: (
  //       <>
  //         バイリンガル求人の割合は全体の32.4％ <br />
  //         バイリンガル人材の転職支援において豊富な実績を誇ります。 <br />
  //         英語面接の対策や英文レジュメの作成など手厚いサポートがございます。
  //       </>
  //     ),
  //     imagePosition: "left",
  //   },
  //   {
  //     title: "Strength 04",
  //     subtitle: "高い内定条件交渉率",
  //     description: (
  //       <>
  //         高い内定条件交渉率 年収またはタイトルアップ率94.2% <br />
  //         ※2024年2月時点 <br />
  //         ご紹介企業のマネジメント層との強いリレーションによって
  //         <br />
  //         ご希望に応じた給与条件や職位の獲得に貢献します。
  //       </>
  //     ),
  //     imagePosition: "right",
  //   },
  // ];

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Alternating Layout - Add vertical gap between sections */}
        <div className="flex flex-col gap-y-16 w-full">
          {/* Strength 01 */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-start mb-0 md:mb-0 gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <div className="bg-[#CCCCCC] aspect-[5/3] flex items-center justify-center mb-0 md:mb-0">
                <span className="text-black text-lg font-medium">
                  Image.jpg
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <h3 className="text-3xl font-bold text-black mb-20 mt-2 md:mt-0">
                Strength 01
              </h3>
              <h4 className="text-2xl text-[#1867D1] font-semibold mb-16">
                エグゼクティブ・ハイクラス専門の転職支援
              </h4>
              <p className="text-md leading-relaxed text-black ">
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
          {/* Strength 02 */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-start mt-8 md:mt-8 gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <h3 className="text-3xl font-bold text-black mb-20 mt-2 md:mt-0">
                Strength 02
              </h3>
              <h4 className="text-xl text-[#1867D1] font-semibold mb-16">
                有望スタートアップ・グロース企業のエクスクルーシブ求人
              </h4>
              <p className="text-black text-md leading-relaxed ">
                非公開求人の紹介比率は業界最大級の63.4%
                <br />
                特別な取扱いによる上記、カントリーマネージャー、CxO、事業責任者案件などの、
                <br />
                他社にはないエクスクルーシブ求人が多数そろっております。
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <div className="bg-[#CCCCCC] aspect-[5/3] flex items-center justify-center mb-0 md:mb-0">
                <span className="text-black text-lg font-medium">
                  Image.jpg
                </span>
              </div>
            </div>
          </div>
          {/* Strength 03 */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-start mt-8 md:mt-8 gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <div className="bg-[#CCCCCC] aspect-[5/3] flex items-center justify-center mb-0 md:mb-0">
                <span className="text-black text-lg font-medium">
                  Image.jpg
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <h3 className="text-3xl font-bold text-black mb-20 mt-2 md:mt-0">
                Strength 03
              </h3>
              <h4 className="text-xl text-[#1867D1] font-semibold mb-16">
                バイリンガル人材への徹底なサポート実績
              </h4>
              <p className="text-md text-black  leading-relaxed">
                バイリンガル人材の紹介比率は業界最大級の33.4%
                <br />
                バイリンガル人材の転職支援において徹底した支援体制を誇ります。
                <br />
                英語面接の対策や英文レジュメの作成など専門サポートがございます。
              </p>
            </div>
          </div>
          {/* Strength 04 */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-start mt-8 md:mt-8 gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <h3 className="text-3xl font-bold text-black mb-20 mt-2 md:mt-0">
                Strength 04
              </h3>
              <h4 className="text-xl text-[#1867D1] font-semibold mb-16">
                高い内定者年次決率
              </h4>
              <p className="text-black text-md leading-relaxed">
                高い内定条件交渉率 年収またはタイトルアップ率94.2%
                <br />
                ※2024年2月時点
                <br />
                ご紹介企業のマネジメント層との強いリレーションによって、
                <br />
                ご希望に応じた給与条件や職位の獲得に貢献します。
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-0 px-8 md:px-0 pt-2 md:pt-0">
              <div className="bg-[#CCCCCC] aspect-[5/3] flex items-center justify-center mb-0 md:mb-0">
                <span className="text-black text-lg font-medium">
                  Image.jpg
                </span>
              </div>
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
