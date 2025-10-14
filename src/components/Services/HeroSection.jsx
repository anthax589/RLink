import Growth from "../../assets/svg/Growth.svg";
import Servicesbg from "../../assets/img/HerSectionServicesBackGround.png";
export default function HeroSection() {
  return (
    <div
      className="py-14 pl-24 h-[55vh] flex items-center justify-start w-full"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-full ">
        <div className="flex items-center gap-20">
          {/* Left side - Title with robot image */}
          <div className="flex flex-col ">
            {/* Title Card */}
            <div className=" flex-shrink-0 z-10 ">
              <h2 className="text-6xl font-bold text-white mb-1">サービス</h2>
              <p
                className="text-6xl text-[#3B4F6D] mb-5"
                style={{ fontFamily: "Lato-Thin" }}
              >
                Services
              </p>
            </div>
            {/* Right side - Description text */}
            <div className="flex-1 space-y-9 text-white leading-relaxed  text-nowrap">
              <p className="text-base 2xl:text-3xl ">
                スタートアップをはじめとする成長企業には、スピード感と柔軟
                性のあ <br />
                る採用・人材活用が求められています。
              </p>

              <p className="text-base 2xl:text-3xl">
                即戦力人材の確保から、採用戦略の仕組みづくりからの実行支
                援、まで <br />
                を一気通貫で提供し、企業の成長ステー ジに応じた最適 なHRソリュー{" "}
                <br />
                ションを提供します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
