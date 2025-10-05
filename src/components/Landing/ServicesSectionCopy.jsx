import React, { useEffect } from "react";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/Executive.svg";
import ReferenceCheck from "../../assets/svg/ReferenceCheck.svg";
import Marquee from "react-fast-marquee";
import TypewriterOnScroll from "../../animation/TypeWriterOnScroll";
import CardSwap, { Card } from "../TextAnimation/CardSwap/CardSwap";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  const serviceCards = [
    {
      title: "人材紹介",
      image: Excecutive,
      alt: "人材紹介",
    },
    {
      title: "人材派遣・業務委託",
      image: Staffing,
      alt: "人材派遣・業務委託",
    },
    {
      title: "採用戦略アドバイザリー＆RPO",
      image: RPO,
      alt: "採用戦略アドバイザリー＆RPO",
    },
    {
      title: "HRプロダクト",
      image: ReferenceCheck,
      alt: "HRプロダクト",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="h-screen py-20 flex flex-col"
      style={{
        background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
      }}
    >
      {/* Header - positioned at top */}
      <div className="mb-40 flex flex-col items-center justify-start pt-8">
        <TypewriterOnScroll
          text="- サービス -"
          delay={20}
          threshold={0.5}
          className="ml-2"
          letterClassName="text-white text-lg 2xl:text-2xl font-bold tracking-widest mb-4 text-center"
        />
        <h1
          className="text-white text-3xl xl:text-4xl font-bold leading-tight text-nowrap text-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Grid with CardSwap - centered in remaining space */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full max-w-5xl flex justify-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <CardSwap
            width={600}
            height={300}
            cardDistance={90}
            verticalDistance={60}
            delay={2000}
            pauseOnHover={true}
            skewAmount={2}
            easing="elastic"
          >
            {serviceCards.map((card, index) => (
              <Card
                key={index}
                className="w-[600px] h-[400px] bg-white shadow-2xl hover:shadow-3xl transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  border: "2px solid #1867D1",
                }}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="flex-shrink-0 mb-4">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3
                      className="text-2xl font-bold text-black text-center leading-tight"
                      style={{ fontFamily: "Inter_Bold" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center pb-8">
        <button className="border-2 border-white text-white px-16 py-3 rounded text-lg hover:text-black transition-colors duration-300 shadow-lg hover:shadow-xl hover:bg-white">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default Services;
