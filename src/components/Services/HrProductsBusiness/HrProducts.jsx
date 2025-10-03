import Rectanglebg from "../../../assets/img/Rectangle 60.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
;
export default function SnappCheck() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="min-h-screen bg-white  px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center py-8"
          style={{
            textShadow: "2px 5px 2px rgba(0, 0, 0, 0.2 )",
            fontFamily: "Lato-Bold",
          }}
        >
          <h1
            className="text-3xl  mb-2"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            <span className="text-[#1867D1]">Snapp</span>
            <span className="text-black"> Check</span>
          </h1>
        </div>
        {/* Decorative Lines */}
        <div
          class="flex items-center w-full mx-auto"
          className="text-2xl font-semi-bold"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
        >
          <div class="w-1 h-1 bg-gray-300 rotate-45"></div>
          <div class="flex-1 border-t border-gray-300"></div>
          <div class="w-1 h-1 bg-gray-300 rotate-45"></div>
        </div>
        {/* Main Content Card */}
        <div className="bg-white">
          {/* Title */}
          <h2
            className="text-xl  text-center text-black py-12"
            style={{ fontFamily: "Lato-Regular" }}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            AI搭載オンライン型リファレンスチェックサービス
          </h2>

          {/* Description Paragraphs */}
          <div
            className="space-y-6 text-black text-sm leading-relaxed flex flex-col items-center justify-center "
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            <p className="indent-8">
              人材獲得競争が激しさを増す中、早期離職やカルチャーミスマッチは企業の成長に大きな影響を及ぼします。
              <br />
              候補者の実績や働き方を過去の上司や同僚から確認するリファレンスチェックは、こうしたリスクを未然に防ぐ有効な
              <br />
              手段です。また、採用プロセスの透明性を確保することで、投資家やステークホルダーへの説明責任も果たせます。。
            </p>

            <p>
              従来のリファレンスチェックは、主に電話やアンケートを通じて第三者の評価を収集するもので、時間や手間がかるうえ、
              <br />
              得られる情報の質や一貫性にばらつきがありました。一方、Snapp
              CheckはAIを活用し、候補者データの検証やインサイ <br />
              ト抽出を自動化。短期間で客観性の高い情報を提供し、スキル適性やカルチャーフィットをより正確に判断できます。
            </p>
          </div>

          {/* Section Title */}
          <h3
            className="text-xl  text-center text-black py-12"
            style={{
              textShadow: "2px 5px 2px rgba(0, 0, 0, 0.2 )",
              fontFamily: "Lato-Regular",
            }}
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            担当職種一覧
          </h3>
          {/* Decorative Lines */}
          <div
            class="flex items-center w-full mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="50"
          >
            <div class="w-1 h-1 bg-gray-300 rotate-45"></div>
            <div class="flex-1 border-t border-gray-300"></div>
            <div class="w-1 h-1 bg-gray-300 rotate-45"></div>
          </div>
          {/* Job Categories */}
          <div className="py-8">
            {/* Back Office */}
            <div
              className="rounded p-4 w-[90vw] max-w-2xl flex flex-col justify-center mx-auto"
              style={{
                backgroundImage: `url(${Rectanglebg})`,
                backgroundSize: "100% 100%", // Changed from "contain" to stretch
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              <div className="mb-3">
                <h4 className="text-lg font-bold text-center text-black mb-3">
                  バックオフィス
                </h4>
                <p
                  className="text-center text-black text-sm text-nowrap scale-90 origin-center relative right-5"
            
                >
                  ⼀般事務、部⾨アシスタント、秘書、受付、通訳・翻訳、経理、財務、会計採⽤、労務、教育、ジェネラリスト
                </p>
              </div>
              <hr className="text-[#D4D4D4] my-3" />
              <h4 className="text-center py-2 text-black">IT</h4>
              <p className="text-center text-black text-sm scale-90 origin-center px-4">
                PM、PMO、SE、テスト、評価運⽤管理、ヘルプデスク
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
