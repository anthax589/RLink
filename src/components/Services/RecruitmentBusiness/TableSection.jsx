import React from "react";
import tablebg from "../../../assets/img/OurServicesBackGround.png";
function TableSection() {
  return (
    <main
      className="h-fit bg-white py-10"
      style={{
        backgroundImage: `url(${tablebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Table Section */}
      <section
        className=" bg-transparent py-5 px-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
      >
        <div className="max-w-7xl mx-auto flex flex-col  justify">
          <h1
            className="text-center py-10 text-black font-bold xl:text-2xl 2xl:text-3xl"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
            style={{
              fontFamily: "Lato-Bold",
              textShadow: "2px 5px 2px rgba(0, 0, 0, 0.2 )",
            }}
          >
            リテーナープロジェクト例
          </h1>
          <table
            className="max-w-[90vw] border-collapse h-full"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            <thead>
              <tr
                className="bg-[#1867D1] text-white"
                style={{ fontFamily: "Lato-Bold" }}
              >
                <th className=" p-3 text-center">Week 1</th>
                <th className=" p-3 text-center">Week 2</th>
                <th className=" p-3 text-center">Week 3</th>
                <th className=" p-3 text-center">Week 4</th>
                <th className=" p-3 text-center">Week 5</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="bg-transparent">
                <td className="border-l border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold"> Day 1</span> <br />
                  プロジェクト契約
                </td>
                <td className="border-r border-l  border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold"> Day 6 to 10</span> <br />
                  候補者との面談
                </td>
                <td className="border-r border-l border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold">Day 11 to 12</span> <br />
                  プロジェクト契約
                </td>
                <td className="border-r border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold"> Day 16 to 20</span> <br />{" "}
                  1～2次面接実施
                </td>
                <td className="border-r border-l border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold">Day 21 to 25</span> <br />
                  2次面接～最終面接実施
                </td>
              </tr>
              <tr className="bg-transparent">
                <td className="border-l border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold"> Day 2</span> <br />{" "}
                  採用責任者とのミーティング
                </td>
                <td className="border-r border-l border-[#BEBDBD]/80 p-6">
                  サーチを継続
                </td>
                <td className="border-l border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold"> Day 13 to 15</span> <br />1
                  次面接設定
                </td>
                <td className="border-l border-[#BEBDBD]/80 p-6">
                  サーチを継続
                </td>
                <td className="border-l border-r border-[#BEBDBD]/80 p-6">
                  リファレンスチェック
                </td>
              </tr>
              <tr className="bg-trasnparent">
                <td className="border-r border-l border-b border-[#BEBDBD]/80 p-6">
                  <span className="font-semibold">Day 3 to 5</span> <br />
                  キックオフサーチ
                </td>
                <td className="border-r border-l border-b border-[#BEBDBD]/80 p-6">
                  Week 2 レビュー
                </td>
                <td className="border-r border-l border-b border-[#BEBDBD]/80 p-6">
                  サーチを継続
                </td>
                <td className="border-r border-l border-b border-[#BEBDBD]/80 p-6">
                  サーチを継続
                </td>
                <td className="border-r border-l border-b border-[#BEBDBD]/80 p-6">
                  オファー/オファー面談実施
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

  
      {/* <section className="bg-transparent  px-8 h-screen">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center py-10 text-black"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            RLinkの担当職種一覧
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="100"
            >
              <div className="bg-blue-600 text-white px-6 py-4 rounded-lg flex items-center gap-3">
                <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                  01
                </div>
                <h3 className="font-bold text-lg">経営・ビジネスリーダー職</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">
                    カントリーマネージャー
                  </p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">
                    CTO / COO / CFO / CAO
                  </p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">経営企画</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">事業企画</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">
                    専務コンサルタント
                  </p>
                </div>
              </div>
            </div>

     
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
            >
              <div className="bg-blue-500 text-white px-6 py-4 rounded-lg flex items-center gap-3">
                <div className="bg-white text-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                  02
                </div>
                <h3 className="font-bold text-lg">ビジネス・コーポレート</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">セールス</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">マーケティング</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">
                    カスタマーサクセス
                  </p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">経営・財務</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">オペレーション</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">人事・総務</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">法務</p>
                </div>
              </div>
            </div>

      
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
            >
              <div className="bg-gray-800 text-white px-6 py-4 rounded-lg flex items-center gap-3">
                <div className="bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                  03
                </div>
                <h3 className="font-bold text-lg">
                  テクノロジー・コンサルティング
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">エンジニア</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">バックエンド</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">フロントエンド</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">SRE</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">PM・PMO</p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">
                    システムエンジニア
                  </p>
                </div>
                <div className="bg-white border border-gray-300 px-4 py-3 rounded shadow-sm">
                  <p className="text-gray-700 font-medium">ITコンサルタント</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default TableSection;
