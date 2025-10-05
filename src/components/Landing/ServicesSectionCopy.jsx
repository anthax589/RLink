import React, { useEffect } from "react";
import RPO from "../../assets/svg/RPO.svg";
import Staffing from "../../assets/svg/Staffing.svg";
import Excecutive from "../../assets/svg/Executive.svg";
import ReferenceCheck from "../../assets/svg/ReferenceCheck.svg";
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
      className="min-h-screen flex flex-col justify-center px-16 py-20"
      style={{
        background: "linear-gradient(90deg, #1867D1 0%, #000000 100%)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between flex-1 border border-white rounded p-10 relative overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-16 relative z-10">
          <div className="space-y-6">
            <TypewriterOnScroll
              text="- サービス -"
              delay={20}
              threshold={0.5}
              className="ml-2"
              letterClassName="text-white text-lg 2xl:text-2xl font-bold tracking-widest mb-4 text-center"
            />
            <h1
              className="text-white text-4xl xl:text-5xl font-bold leading-tight text-left"
              data-aos="fade-up"
              data-aos-once="true"
              style={{ fontFamily: "Inter_Bold" }}
            >
              Transforming Talent Acquisition through Expertise, Technology, and
              AI
            </h1>
          </div>
        </div>

        {/* Right Side - CardSwap with enhanced styling */}
        <div className="w-1/2 flex justify-center items-center relative z-10">
          <div className="relative" style={{ width: "600px", height: "400px" }}>
            <CardSwap
              width={600}
              height={400}
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              skewAmount={6}
              easing="elastic"
            >
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[600px] h-[400px] bg-white shadow-2xl transition-all duration-500 rounded-xl border-2 border-[#1867D1]"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-12 relative">
                    {/* Content */}
                    <div className="flex items-center gap-8">
                      <div className="flex-shrink-0">
                        <img
                          src={card.image}
                          alt={card.alt}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold text-black mb-3 leading-tight"
                          style={{ fontFamily: "Inter_Bold" }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-16">
        <button className="border-2 border-white text-white px-16 py-3 rounded text-lg hover:text-black transition-colors duration-300 shadow-lg hover:shadow-xl hover:bg-white">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default Services;
