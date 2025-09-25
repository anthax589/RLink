import React from "react";

export default function CompanyMission() {
  return (
    <div className="max-w-full mx-auto p-8 py-16 bg-gradient-to-b from-gray-200 to-white min-h-fit">
      <div className="bg-transparent max-w-5xl mx-auto p-2 mb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-black mb-4">企業理念</h1>

          {/* Decorative line */}
          <div
            className="w-[90px]  mt-5 mx-auto mb-10"
            style={{
              height: "2px",
              backgroundImage:
                "linear-gradient(275deg,rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%)",
            }}
          />
        </div>

        {/* Mission Statement */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-12 text-center">
            ”挑戦する企業と人の成長を支える、新しいHRインフラを”
          </h2>
        </div>

        {/* Company Description */}
        <div
          className="space-y-6 text-black leading-relaxed text-lg "
          style={{ fontFamily: "Lato-Regular" }}
        >
          <p>
            <span className="text-[#1867D1]">R</span>Link
            Partnersは、「人と企業の可能性を最大化する」ことを使命とするHRソリューションカンパニーです。
          </p>

          <p>
            2021年3月の設立以来、私たちは未上場のスタートアップ企業、IPO後も成長を志す企業、そして外資系企業の
            日本法人設立・拡大支援など、挑戦と成長を続ける新興成長企業を中心にサービスを提供してきました。
          </p>

          <p>
            現在、日本は少子高齢化・働き方の多様化という大きな転換期を迎えており、企業は優秀な人材を惹きつける力が、個人は自らの可能性を発揮できる場が求められています。
          </p>

          <p>
            私たちはその変化に応えるため、人材紹介・派遣事業を通じて「最適なマッチング」を実現し、採用コンサルテ
            ィング事業を通じて「企業の採用力そのもの」を高め、HRプロダクト事業を通じて「採用と人材活用の仕組み」を提供していきます。
          </p>

          <p>
            目指すのは、企業と人が互いに選び合い、ともに成長できる新しい時代のHRインフラを築くこと。
            人材サービスの枠を超え、挑戦する企業と個人の成長を支える“新しい当たり前”を創造していきます。
          </p>
        </div>
      </div>
    </div>
  );
}
