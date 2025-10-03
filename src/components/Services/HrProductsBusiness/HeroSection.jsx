import RPO from "../../../assets/services_assets/rpo_img.svg";
import heroBg from "../../../assets/services_assets/image 9.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section
      className="relative bg-cover h-[90vh]  "
      style={{
        backgroundImage: `linear-gradient(306deg,rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%)`,
      }}
      data-aos="fade-in"
    >
      {/* Content */}
      <div
        className="max-w-8xl flex items-center justify-center pt-10 h-full text-left gap-2"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-12 ">
          <h1 className="text-5xl pl-2">HRプロダクト事業</h1>
          <p className="text-lg py-10 text-white text-nowrap text-start">
            「候補者の実績や人柄」をAIとデータで可視化し、採用の精度を高め、ミスマッチを防ぐ
          </p>
          <button className="bg-white text-black px-14 py-3 rounded ml-3 flex items-center gap-2">
            {/* {Phone Icon} */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.6049 28.425C33.3823 29.3813 32.8575 30.2405 32.1082 30.875C31.2717 31.7258 30.2732 32.4004 29.1717 32.859C28.0702 33.3175 26.888 33.5508 25.6949 33.545H25.0982C22.6217 33.416 20.1944 32.8033 17.9532 31.7417C17.4099 31.4867 16.8815 31.2484 16.2532 30.9583C13.6266 29.4749 11.2158 27.6384 9.08821 25.5C6.32245 22.9061 4.05605 19.8268 2.40154 16.415C1.49067 14.5538 0.877119 12.5613 0.583207 10.51C0.172583 8.37251 0.415351 6.16088 1.27987 4.16335C1.81764 3.25649 2.47586 2.42672 3.23654 1.69668C3.584 1.31765 4.00416 1.01239 4.47201 0.799074C4.93987 0.585761 5.44586 0.468753 5.95987 0.455017C6.52036 0.514262 7.06337 0.68483 7.55707 0.956719C8.05076 1.22861 8.48519 1.59634 8.83487 2.03835C9.61821 2.90502 10.5349 3.73835 11.3682 4.62168L12.4415 5.67835C13.0749 6.23335 13.4665 7.01502 13.5299 7.85502C13.5315 8.62835 13.2465 9.37335 12.7299 9.94835C12.4045 10.3516 12.0585 10.7376 11.6932 11.105L11.3349 11.48C11.1262 11.6739 10.9633 11.9119 10.8582 12.1767C10.7715 12.4334 10.7415 12.7067 10.7749 12.9767C11.0482 13.7167 11.4765 14.39 12.0332 14.95C12.8999 16.1234 13.7332 17.145 14.6699 18.3533C16.2853 20.2172 18.2005 21.7984 20.3365 23.0317C20.5415 23.1984 20.7865 23.31 21.0499 23.355C21.2832 23.39 21.5182 23.355 21.7299 23.2517C22.3789 22.9043 22.9563 22.4372 23.4315 21.875C24.0315 21.135 24.9015 20.665 25.8482 20.5633C26.3026 20.565 26.7521 20.6578 27.17 20.8361C27.588 21.0145 27.9659 21.2748 28.2815 21.6017C28.6704 21.9372 29.0388 22.2945 29.3865 22.6734L29.8965 23.2183L30.4249 23.7284C30.7465 24.0517 31.0532 24.3417 31.3582 24.6817C31.9138 25.1595 32.4304 25.6756 32.9082 26.23C33.3965 26.8533 33.6432 27.6333 33.6049 28.425Z"
                fill="black"
              />
            </svg>
            お問い合わせ
          </button>
        </div>
        <div>
          <div className="w-96 h-96 ">
            <img src={RPO} alt="Executive Search" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;