import React from "react";
function TableSection() {
  return (
    <main
      className="h-fit bg-transparent "
   
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
    </main>
  );
}

export default TableSection;
