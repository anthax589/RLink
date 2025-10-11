import servicesbg from "../../../assets/img/ServicesHeroSectionBg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Executive from "../../../assets/svg/Executive1.svg";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="relative bg-cover h-[70vh]  " data-aos="fade-in">
      {/* Content */}
      <div
        className="max-w-8xl flex items-center justify-center pt-10 h-full text-left gap-2"
        style={{
          backgroundImage: `url(${servicesbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-12 text-black ">
          <h1 className="text-5xl">人材紹介事業</h1>
          <p className="text-lg mt-4 mb-8 text-black font-semibold text-nowrap ">
            企業の採用ニーズに応じて、リテーナー型によるプロジェクトベースのサーチから、
            <br />
            一般的なコンティンジェンシー型（完全成功報酬型）まで職種や要件に合わせて柔軟に対応します。
            <br />
            コアとなるCxOや経営幹部クラスから、即戦力となるスタッフレベルまで、最適な人材をご紹介します。
          </p>
          <button className="bg-black text-white px-20 py-3 rounded flex items-center gap-2">
            {/* {Phone Icon} */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0003 10H10.0003C8.15938 10 6.66699 11.4924 6.66699 13.3333V26.6667C6.66699 28.5076 8.15938 30 10.0003 30H30.0003C31.8413 30 33.3337 28.5076 33.3337 26.6667V13.3333C33.3337 11.4924 31.8413 10 30.0003 10Z"
                stroke="white"
                stroke-width="3.33333"
              />
              <path
                d="M6.66699 15L18.5103 20.9217C18.973 21.1529 19.4831 21.2732 20.0003 21.2732C20.5175 21.2732 21.0277 21.1529 21.4903 20.9217L33.3337 15"
                stroke="white"
                stroke-width="3.33333"
              />
            </svg>
            お問い合わせ
          </button>
        </div>
        <div>
          <div className="w-xl h-72 flex items-center justify-center ">
            <img
              src={Executive}
              alt="Executive Search"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;