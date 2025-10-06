import React from "react";
import AboutTheCompany from "../../../assets/img/AboutTheCompanyBackGround.png";
import RLinkLogo from "../../../assets/img/RLinkLogo.png";

export default function CompanyMission() {
  return (
    <div
      className="max-w-full mx-auto p-8 2xl:py-20 flex items-center"
      style={{
        backgroundImage: `url(${AboutTheCompany})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-7xl mx-auto border-2 border-[#B3B3B3] rounded py-4"
      
      >
        {/* Header Section */}
        <div className="pt-8 px-6 relative">
          <div className="absolute top-0 right-6">
            <img
              src={RLinkLogo}
              alt="RLink Logo"
              className="w-16 h-auto 2xl:w-20"
            />
          </div>
          <h1 className="text-2xl 2xl:text-5xl text-center text-black tracking-widest mb-2 pt-16">
            企業理念
          </h1>
          <p className="text-black text-center text-[10px] 2xl:text-sm">
            Company Mission
          </p>
        </div>

        {/* Content Section */}
        <div className="px-6 py-8 2xl:px-12 2xl:py-12 flex flex-col justify-center items-center text-nowrap">
          {/* Mission Statement */}
          <div className="mb-8 2xl:mb-12">
            <h2 className="text-base 2xl:text-3xl font-bold text-black text-center">
              "挑戦する企業と人の成長を支える、新しいHRインフラを"
            </h2>
          </div>

          {/* Company Description */}
          <div
            className="space-y-6 2xl:space-y-8 text-black leading-relaxed text-sm 2xl:text-2xl"
            style={{ fontFamily: "Lato-Regular" }}
          >
            <p>
              <span className="text-[#1867D1]">R</span>Link
              Partnersは、「人と企業の可能性を最大化する」ことを使命とするHRソリューションカンパニーです。
            </p>

            <p>
              2021年3月の設立以来、私たちは未上場のスタートアップ企業、IPO後も成長を志す企業、そして外資系企業の{" "}
              <br />
              日本法人設立・拡大支援など、挑戦と成長を続ける新興成長企業を中心にサービスを提供してきました。
            </p>

            <p>
              現在、日本は少子高齢化・働き方の多様化という大きな転換期を迎えており、企業は優秀な人材を惹きつける力{" "}
              <br />
              が、個人は自らの可能性を発揮できる場が求められています。
            </p>

            <p>
              私たちはその変化に応えるため、人材紹介・派遣事業を通じて「最適なマッチング」を実現し、採用コンサルテ{" "}
              <br />
              ィング事業を通じて「企業の採用力そのもの」を高め、HRプロダクト事業を通じて「採用と人材活用の仕組み」
              <br />
              を提供していきます。
            </p>

            <p>
              目指すのは、企業と人が互いに選び合い、ともに成長できる新しい時代のHRインフラを築くこと。
              <br />
              人材サービスの枠を超え、挑戦する企業と個人の成長を支える"新しい当たり前"を創造していきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
