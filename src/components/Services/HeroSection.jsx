import Growth from "../../assets/svg/Growth.svg";
import Servicesbg from "../../assets/img/ServicesHeroSectionBg.png";
export default function HeroSection() {
  return (
    <div
      className="py-14 px-5 h-[50vh] flex items-center justify-center w-full"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-full ">
        <div className="flex items-center gap-20">
          {/* Left side - Title with robot image */}
          <div className="flex items-center -mr-36">
            {/* Title Card */}
            <div className="bg-[#F2F2F2] border border-[#B3B3B3] rounded-lg p-10 w-96 flex-shrink-0 z-10 relative left-28">
              <h2 className="text-5xl font-bold text-black mb-2">サービス</h2>
              <p
                className="text-5xl text-black"
                style={{ fontFamily: "Lato-Thin" }}
              >
                Services
              </p>
            </div>

            {/* Robot image placeholder */}
            <div className="w-96 flex items-center justify-center -ml-30 -mb-48 z-30">
              {/* <img
                src={Growth}
                alt="Robot"
                className="w-auto h-auto object-contain"
              /> */}
            </div>
          </div>

          {/* Right side - Description text */}
          <div className="flex-1 space-y-9 text-black leading-relaxed ml-10 text-nowrap">
            <p className="text-base 2xl:text-3xl ">
              スタートアップをはじめとする成長企業には、スピード感と柔軟 <br />
              性のある採用・人材活用が求められています。
            </p>

            <p className="text-base 2xl:text-3xl">
              即戦力人材の確保から、採用戦略の仕組みづくりからの実行支 <br />
              援、までを一気通貫で提供し、企業の成長ステージに応じた最適 <br />
              なHRソリューションを提供します。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
