import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import Threads from "../TextAnimation/Threads/Threads";
const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="bg-white h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-auto z-0">
        <Threads amplitude={3} distance={2} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="flex items-start py-5">
          <div className="flex items-start mb-6 relative ">
            <TypewriterOnScroll
              text="About Us"
              delay={20}
              threshold={0.5}
              className="ml-2"
              letterClassName="text-xl font-bold text-black xl:text-2xl 2xl:text-3xl relative"
            />
          </div>
        </div>

        {/* Description */}
        <p
          className="text-black leading-relaxed mb-6 2xl:text-xl tracking-widest "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <span className="text-[#1867D1]">R</span>Link
          Partnersは、「人と企業の可能性を最大化する」ことを使命とするHRソリューションカンパニーです。
        </p>
        <p
          className="text-black leading-relaxed mb-6 2xl:text-xl tracking-widest "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          2021年3月の設立以来、私たちは未上場のスタートアップ企業、IPO後も成長を志す企業、そして外資系企業の{" "}
          <br />
          日本法人設立・拡大支援など、挑戦と成長を続ける新興成長企業を中心にサービスを提供してきました
        </p>
        <p
          className="text-black leading-relaxed mb-20 2xl:text-xl tracking-widest "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          現在、日本は少子高齢化・働き方の多様化という大きな転換期を迎えており、企業は優秀な人材を惹きつける力{" "}
          <br />
          が、個人は自らの可能性を発揮できる場が求められています。
        </p>

        {/* Button */}
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <button className="px-13 2xl:px-14 py-3 bg-[#545555] text-white text-sm  2xl:text-lg tracking-wide shadow hover:bg-gray-800 transition rounded ">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
