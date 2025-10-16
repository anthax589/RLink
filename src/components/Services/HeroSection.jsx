import Servicesbg from "../../assets/img/HerSectionServicesBackGround.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      data-aos="fade-in"
      className="py-8 md:py-14 px-6 md:pl-24 h-[40vh] md:h-[100vh] flex items-center justify-start w-full"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: "cover",
        backgroundPosition: "80% center",
      }}
    >
      <div className="max-w-full">
        <div className="flex items-center gap-8 md:gap-24">
          {/* Left side - Title with robot image */}
          <div className="flex flex-col">
            {/* Title Card */}
            <div className="flex-shrink-0 z-10">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-1">
                サービス
              </h2>
              <p
                className="text-3xl md:text-6xl text-[#3B4F6D] mb-3 md:mb-5"
                style={{ fontFamily: "Lato-Thin" }}
              >
                Services
              </p>
            </div>
            {/* Right side - Description text */}
            <div className="flex-1 space-y-4 md:space-y-9 text-white leading-relaxed">
              <p className="text-sm md:text-base 2xl:text-3xl whitespace-normal md:text-nowrap">
                スタートアップをはじめとする成長企業には、スピード感と柔軟
                性のあ <br className="hidden md:block" />
                る採用・人材活用が求められています。
              </p>

              <p className="text-sm md:text-base 2xl:text-3xl whitespace-normal md:text-nowrap">
                即戦力人材の確保から、採用戦略の仕組みづくりからの実行支
                援、まで <br className="hidden md:block" />
                を一気通貫で提供し、企業の成長ステー ジに応じた最適 なHRソリュー{" "}
                <br className="hidden md:block" />
                ションを提供します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
