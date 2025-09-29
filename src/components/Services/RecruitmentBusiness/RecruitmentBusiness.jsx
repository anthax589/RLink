import React from "react";
// import heroBg from "../../../assets/services_assets/image 10.svg";

import boxbg from "../../../assets/img/Rectangle 60.png";
import tablebg from "../../../assets/img/tableBackground.png";
import contentboxbg from "../../../assets/img/contentBoxbg.png";
import introbg from "../../../assets/img/introbg.png";
export default function FormalDocument() {
  return (
    <div className="min-h-screen bg-white  text-black">
      <div className="max-w-full mx-auto bg-transparent">
        <div
          style={{
            backgroundImage: `url(${introbg})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Introduction Section */}
          <IntroductionSection />
          <TwoColumnSection />
        </div>
        <TableSection />
        <ContentBoxesSection />
      </div>
    </div>
  );
}
const IntroductionSection = () => {
  return (
    <>
      {/* Header */}
      <div className=" text-black py-7 text-center">
        <h1 className="text-2xl font-semi-bold">人材紹介事業</h1>
      </div>
      {/* Introduction Section */}
      <div>
        <p
          className="text-md leading-relaxed  text-center text-black"
          style={{ fontFamily: "Lato-Regular" }}
        >
          企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
          <br />
          一般的なコンティンジェンシー型（完全成功報酬型）まで職種や要件に合わせて柔軟に対応します。
          <br />
          コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
        </p>
      </div>
    </>
  );
};
const TwoColumnSection = () => {
  return (
    <>
      {/* Two Column Section */}
      <div className=" max-w-5xl  mx-auto grid grid-cols-2 gap-10 p-2 py-16 ">
        <div className="space-y-4">
          <h1
            className="text-center text-[#1867D1] font-bold "
            style={{ textShadow: "2px 5px 3px rgba(0, 0, 0, 0.5)" }}
          >
            リテーナー型
          </h1>
          {/* Decorative Lines */}
          <div class="flex items-center w-1/2 mx-auto">
            <div class="w-2 h-2 bg-gray-300 rotate-45"></div>
            <div class="flex-1 border-t border-gray-300"></div>
            <div class="w-2 h-2 bg-gray-300 rotate-45"></div>
          </div>
          <div className="bg-gradient-to-b from-[#DFDFDF] to-white p-5 rounded  flex items-center justify-center">
            <p className="text-sm text-black text-nowrap  ">
              主に経営幹部クラスや高度専門職、またはコンフィデンシャル <br />
              案件を対象とした採用手法です。プロジェクト型で採用活動を <br />
              行い、業界リサーチを基にターゲットリストを作成し、ダイレ <br />
              クトアプローチ（ヘッドハンティング）によって最適な人材を
              <br />
              探索・確保します。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h1
            className="text-center text-[#1867D1] font-bold"
            style={{ textShadow: "2px 5px 3px rgba(0, 0, 0, 0.5)" }}
          >
            コンティンジェンシー型
          </h1>
          {/* Decorative Lines */}
          <div class="flex items-center w-1/2 mx-auto">
            <div class="w-2 h-2 bg-gray-300 rotate-45"></div>
            <div class="flex-1 border-t border-gray-300"></div>
            <div class="w-2 h-2 bg-gray-300 rotate-45"></div>
          </div>

          <div className="bg-gradient-to-b from-[#DFDFDF] to-white px-7 py-6 rounded  flex items-center justify-center">
            <p className="text-sm text-black ">
              幅広い職種やレイヤーを対象とした、完全成功報酬型の <br />
              人材紹介手法です。採用決定まで費用が発生しないため、
              <br /> 複数ポジションを同時に進めやすく、短期的な人材獲得 <br />
              に適しています。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const TableSection = () => {
  return (
    <>
      {/* Table Section */}
      <div
        className="p-8 h-[60vh] "
        style={{
          backgroundImage: `url(${tablebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <h1 className="text-end mb-3">リテーナープロジェクト例</h1>
          <table className="w-full border-collapse">
            <thead>
              <tr
                className="bg-[#1867D1]/80 text-white"
                style={{ fontFamily: "Lato-Bold" }}
              >
                <th className="border border-[#BEBDBD]/80 p-3 text-center">
                  Week 1
                </th>
                <th className="border border-[#BEBDBD]/80 p-3 text-center">
                  Week 2
                </th>
                <th className="border border-[#BEBDBD]/80 p-3 text-center">
                  Week 3
                </th>
                <th className="border border-[#BEBDBD]/80 p-3 text-center">
                  Week 4
                </th>
                <th className="border border-[#BEBDBD]/80 p-3 text-center">
                  Week 5
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#D9D9D9]/90">
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 1 <br />
                  プロジェクト契約
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 6 to 10 <br />
                  候補者との面談
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 11 to 12 <br />
                  プロジェクト契約
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 16 to 20 <br /> 1～2次面接実施
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 21 to 25 <br />
                  2次面接～最終面接実施
                </td>
              </tr>
              <tr className="bg-[#D9D9D9]/90">
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 2 <br /> 採用責任者とのミーティング
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">サーチを継続</td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Day 13 to 15 <br />1 次面接設定
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">サーチを継続</td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  リファレンスチェック
                </td>
              </tr>
              <tr className="bg-[#D9D9D9]/90">
                <td className="boder border-[#BEBDBD]/80 p-3">
                  Day 3 to 5 <br />
                  キックオフサーチ
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  Week 2 レビュー
                </td>
                <td className="border border-[#BEBDBD]/80 p-3">サーチを継続</td>
                <td className="border border-[#BEBDBD]/80 p-3">サーチを継続</td>
                <td className="border border-[#BEBDBD]/80 p-3">
                  オファー/オファー面談実施
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const ContentBoxesSection = () => {
  const contentData = [
    {
      description: (
        <>
          ディープテック（シリーズB） <br />- 経理・財務責任者（リテーナー型）
          <br /> - CRO（リテーナー型） <br />- UI・UXエンジニア × 3 <br /> -
          人事部長
        </>
      ),
    },
    {
      description: (
        <>
          フィンテック（シリーズC） <br />- シニアソフトウェアエンジニア <br />-
          プロダクトマネージャー
          <br /> - シニアセールスマネージャー（リテーナー型）
        </>
      ),
    },
    {
      description: (
        <>
          SaaS（シリーズB） <br /> - フィールドセールス × 2 <br /> -
          カスタマーサクセス
        </>
      ),
    },
    {
      description: (
        <>
          総合系コンサルティングファーム（IPO） <br /> - マネージャー × 3 <br />
          - 執行役員（リテーナー型）
          <br /> - 関西事業部責任者候補（リテーナー型
        </>
      ),
    },
    {
      description: (
        <>
          SaaS（IPO） <br /> - 経営企画 <br /> - カスタマーサクセス
        </>
      ),
    },
    {
      description: (
        <>
          外資系ソフトウェア子会社（日本法人立ち上げ）
          <br /> - プロジェクトマネージャー × 3（リテーナー型） <br /> -
          セールス部長
        </>
      ),
    },
    {
      description: (
        <>
          外資系ロジスティクステック <br /> -
          カントリーマネージャー（リテーナー型）
        </>
      ),
    },
  ];

  return (
    <>
      {/* Content Boxes Section */}
      <div
        className="px-8 space-y-10"
        style={{
          backgroundImage: `url(${contentboxbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className="text-2xl text-[#5B5B5B] text-center pt-10"
          style={{ textShadow: "2px 5px 3px rgba(0, 0, 0, 0.5)" }}
        >
          紹介実績 2025
        </h2>
        {contentData.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded  h-48 mx-auto items-center justify-center flex flex-col "
            style={{
              backgroundImage: `url(${boxbg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="text-sm text-black text-center font-semibold">
              {item.description}
            </p>
          </div>
        ))}
        <p
          className="text-xs text-[#5B5B5B] text-center font-semibold pt-4 pb-16"
          style={{ textShadow: "2px 5px 3px rgba(0, 0, 0, 0.5)" }}
        >
          *記載の内容は、2025年度における全実績ではなく代表的な事例を抜粋したものです
        </p>
      </div>
    </>
  );
};
