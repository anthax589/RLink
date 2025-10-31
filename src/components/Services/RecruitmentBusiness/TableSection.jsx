import React from "react";

function TableSection() {
  return (
    <main className="h-fit bg-transparent">
      {/* Table Section */}
      <section
        className="bg-transparent px-4 sm:px-6 md:px-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="50"
      >
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1
            className="text-center py-12 sm:py-16 md:py-20 lg:py-28 text-black font-bold text-xl sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl"
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

          {/* Mobile/Tablet View - Stacked Cards */}
          <div className="block lg:hidden space-y-6">
            {[
              {
                week: "Week 1",
                items: [
                  { day: "Day 1", text: "プロジェクト契約" },
                  { day: "Day 2", text: "採用責任者とのミーティング" },
                  { day: "Day 3 to 5", text: "キックオフサーチ" },
                ],
              },
              {
                week: "Week 2",
                items: [
                  { day: "Day 6 to 10", text: "候補者との面談" },
                  { day: "", text: "サーチを継続" },
                  { day: "", text: "Week 2 レビュー" },
                ],
              },
              {
                week: "Week 3",
                items: [
                  { day: "Day 11 to 12", text: "プロジェクト契約" },
                  { day: "Day 13 to 15", text: "1次面接設定" },
                  { day: "", text: "サーチを継続" },
                ],
              },
              {
                week: "Week 4",
                items: [
                  { day: "Day 16 to 20", text: "1～2次面接実施" },
                  { day: "", text: "サーチを継続" },
                  { day: "", text: "サーチを継続" },
                ],
              },
              {
                week: "Week 5",
                items: [
                  { day: "Day 21 to 25", text: "2次面接～最終面接実施" },
                  { day: "", text: "リファレンスチェック" },
                  { day: "", text: "オファー/オファー面談実施" },
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay={index * 50}
              >
                <div
                  className="bg-[#1867D1] text-white p-4 text-center font-bold text-lg"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  {week.week}
                </div>
                <div className="divide-y divide-gray-200">
                  {week.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 text-black">
                      {item.day && (
                        <span className="font-semibold block mb-1">
                          {item.day}
                        </span>
                      )}
                      <span className="text-sm sm:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table
              className="w-full border-collapse"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              <thead>
                <tr
                  className="bg-[#1867D1] text-white"
                  style={{ fontFamily: "Lato-Bold" }}
                >
                  <th className="p-3 text-center">Week 1</th>
                  <th className="p-3 text-center">Week 2</th>
                  <th className="p-3 text-center">Week 3</th>
                  <th className="p-3 text-center">Week 4</th>
                  <th className="p-3 text-center">Week 5</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <tr className="bg-transparent">
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">Day 1</span>
                    プロジェクト契約
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      Day 6 to 10
                    </span>
                    候補者との面談
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      Day 11 to 12
                    </span>
                    プロジェクト契約
                  </td>
                  <td className="border-r border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      Day 16 to 20
                    </span>
                    1～2次面接実施
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      Day 21 to 25
                    </span>
                    2次面接～最終面接実施
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">Day 2</span>
                    採用責任者とのミーティング
                  </td>
                  <td className="border-r border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    サーチを継続
                  </td>
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">
                      Day 13 to 15
                    </span>
                    1次面接設定
                  </td>
                  <td className="border-l border-[#BEBDBD]/80 p-4 xl:p-6">
                    サーチを継続
                  </td>
                  <td className="border-l border-r border-[#BEBDBD]/80 p-4 xl:p-6">
                    リファレンスチェック
                  </td>
                </tr>
                <tr className="bg-transparent">
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    <span className="font-semibold block mb-1">Day 3 to 5</span>
                    キックオフサーチ
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    Week 2 レビュー
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    サーチを継続
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    サーチを継続
                  </td>
                  <td className="border-r border-l border-b border-[#BEBDBD]/80 p-4 xl:p-6">
                    オファー/オファー面談実施
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TableSection;
