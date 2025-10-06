import Robot from "../../assets/img/Robot.png";
import Servicesbg from "../../assets/img/ServicesHeroSectionBg.png";
export default function HeroSection() {
  return (
    <div
      className="bg-gray-100 py-12 px-8 h-[50vh] flex items-center"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-16">
          {/* Left side - Title with robot image */}
          <div className="flex-shrink-0">
            <div className="relative bg-[#F2F2F2] border border-[#B3B3B3] rounded-lg p-8 w-72">
              <h2 className="text-4xl font-bold text-black mb-2">サービス</h2>
              <p className="text-5xl text-black"style={{fontFamily:"Lato-Thin"}}>Services</p>

              {/* Robot image placeholder */}
              <div className="absolute -right-23 top-1/2 -translate-y-1/3">
                <div className="w-44   flex items-center justify-center ">
                  <img
                    src={Robot}
                    alt="Robot"
                    className="w-auto h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Description text */}
          <div className="flex-1 space-y-4 text-black leading-relaxed ml-10">
            <p className="text-base 2xl:text-xl">
              スタートアップをはじめとする成長企業には、スピード感と柔軟 <br />
              性のある採用・人材活用が求められています。
            </p>

            <p className="text-base 2xl:text-xl">
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
