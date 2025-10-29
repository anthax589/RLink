import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-white h-fit pt-8 md:pt-10 pb-12 md:pb-16 lg:pb-20 flex items-center justify-center relative overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex items-start py-3 md:py-5">
          <div className="flex items-start mb-4 md:mb-6 relative">
            <p
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-once="true"
              className="text-2xl md:text-xl font-bold text-black lg:text-xl xl:text-2xl 2xl:text-3xl relative"
            >
              About Us
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-4 md:mb-6 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          <span className="text-[#1867D1]">R</span>Link
          Partnersは、「人と企業の可能性を最大化する」ことを使命とするHRソリューションカンパニーです。
        </p>
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-4 md:mb-6 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          2021年3月の設立以来、私たちは未上場のスタートアップ企業、IPO後も成長を志す企業、そして外資系企業の{" "}
          <br className="hidden lg:block" />
          日本法人設立・拡大支援など、挑戦と成長を続ける新興成長企業を中心にサービスを提供してきました
        </p>
        <p
          className="text-black text-sm md:text-base lg:text-base leading-relaxed mb-12 md:mb-16 lg:mb-20 2xl:text-xl tracking-widest"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-once="true"
        >
          現在、日本は少子高齢化・働き方の多様化という大きな転換期を迎えており、企業は優秀な人材を惹きつける力{" "}
          <br className="hidden lg:block" />
          が、個人は自らの可能性を発揮できる場が求められています。
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
