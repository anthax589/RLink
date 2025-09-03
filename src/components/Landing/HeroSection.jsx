import HeroImg from "../../assets/hero-img.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section
      className="relative bg-cover h-[100vh] px-6 lg:px-16 py-20 flex items-center  bg-no-repeat bg-right-top "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Content */}
      <div
        className="max-w-5xl text-left"
        data-aos="fade-right"
        // data-aos-offset="300"
        // data-aos-easing="ease-out-sine"
      >
        <p className="leading-20">
          {/* <h1
            className="text-[120px] font-bold text-[#1B2A37] "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            RLink Partners
          </h1> */}
          <TypewriterOnScroll
            text="RLink Partners"
            delay={30}
            threshold={0.5}
            className="text-[120px] font-bold text-[#1B2A37]"
            letterClassName=""
          />

          <p
            className="text-[39px] font-bold text-[#1B2A37]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Your Gateway to the Next Leadership Stage
          </p>
          <p className="text-lg text-[#1B2A37]">
            Connecting Visionary Leaders with Breakthrough Growth-Stage Startups
            in Japan
          </p>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
