import React, { memo } from "react";
import Noise from "../../../assets/img/Noise2.png";

const PlacementSection = memo(() => {
  const cardStyle = {
    backgroundImage: `url(${Noise})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="bg-white px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-2xl md:text-4xl text-center py-28 text-[#5B5B5B]"
          style={{ textShadow: "2px 7px 2px rgba(0, 0, 0, 0.2)" }}
          data-aos="fade-up"
        >
          紹介実績 2025
        </h2>

        {/* Cards Grid */}
        <div
          className="space-y-10"
          style={{ fontFamily: "Lato-Regular" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={cardStyle}
            >
              <div className="text-center text-black">
                <p className="text-md leading-relaxed">
                  ディープテック（シリーズB）
                  <br />
                  - 経理・財務責任者（リテーナー型）
                  <br />
                  - CRO（リテーナー型）
                  <br />
                  - UI・UXエンジニア × 3<br />- 人事部長
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black">
                <p className="text-sm leading-relaxed">
                  フィンテック（シリーズC）
                  <br />
                  - シニアソフトウェアエンジニア
                  <br />
                  - プロダクトマネージャー
                  <br />- シニアセールスマネージャー（リテーナー型）
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black">
                <p className="text-md leading-relaxed">
                  SaaS（シリーズB）
                  <br />
                  - フィールドセールス × 2<br />- カスタマーサクセス
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 4 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black">
                <p className="text-md leading-relaxed">
                  総合系コンサルティングファーム（IPO）
                  <br />
                  - マネージャー × 3
                  <br />- 執行役員（リテーナー型）
                  <br />- 関西事業部責任者候補（リテーナー型）
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black">
                <p className="text-md leading-relaxed">
                  SaaS（IPO）
                  <br />
                  - 経営企画
                  <br />- カスタマーサクセス
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black text-nowrap">
                <p className="text-sm leading-relaxed">
                  外資系ソフトウェア子会社（日本法人立ち上げ）
                  <br />
                  - プロジェクトマネージャー × 3（リテーナー型）
                  <br />- セールス部長
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - 1 Centered Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="invisible"></div>{" "}
            {/* Invisible placeholder for spacing */}
            <div
              className="p-6 h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
              style={{
                backgroundImage: `url(${Noise})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundwidth: "100%",
              }}
            >
              <div className="text-center text-black text-nowrap">
                <p className="text-md leading-relaxed">
                  外資系ロジスティクステック
                  <br />- カントリーマネージャー（リテーナー型）
                </p>
              </div>
            </div>
            <div className="invisible"></div>{" "}
            {/* Invisible placeholder for spacing */}
          </div>
        </div>

        {/* Footer Text */}
        <div
          className="text-center py-20 flex justify-center gap-28"
          data-aos="fade-up"
        >
          <p
            className="text-[#5B5B5B] text-sm 2xl:text-xl"
            style={{ textShadow: "2px 7px 2px rgba(0, 0, 0, 0.2 )" }}
          >
            *記載の内容は、2025年度における全実
          </p>
          <p
            className="text-[#5B5B5B] text-sm 2xl:text-xl"
            style={{ textShadow: "2px 7px 2px rgba(0, 0, 0, 0.2 )" }}
          >
            績ではなく代表的な事例を抜粋したものです
          </p>
        </div>
      </div>
    </section>
  );
});

export default PlacementSection;
