import React from "react";
import RPO from "../../assets/img/RPO.webp";
import Excecutive from "../../assets/img/ExecuSearch.webp";
import ReferenceCheck from "../../assets/img/ReferenceCheck.webp";
import Marquee from "react-fast-marquee";

function Services() {
  return (
    <div
      className="bg-[linear-gradient(to_right,#1353AA,#051428)] min-h-fit py-20 flex flex-col items-center justify-center "
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-lg 2xl:text-2xl font-bold tracking-widest mb-4">
          - サービス -
        </h2>
        <h1 className="text-white text-3xl xl:text-4xl font-bold leading-tight text-nowrap">
          Transforming Talent Acquisition through Expertise, Technology, and AI
        </h1>
      </div>

      {/* Services Marquee */}
      <div className="w-full mb-12 overflow-hidden">
        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          className="py-4"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitFontSmoothing: "subpixel-antialiased",
          }}
        >
          <div className="flex gap-8 px-4">
            {/* RPO Card */}
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-center">RPO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 items-center gap-5">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg">
                    End-to-end hiring support that makes recruitment faster,
                    smarter, and more efficient.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={RPO}
                    alt="RPO"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Executive Search Card */}
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95 mx-auto"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-center" >
                EXECUTIVE SEARCH
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center gap-5">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg">
                    Connecting companies with top leaders and specialists to
                    drive growth and success.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={Excecutive}
                    alt="Executive Search"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Reference Check AI Card */}
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-nowrap text-center">
                REFERENCE CHECK AI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg">
                    AI-powered reference checks that deliver fast, reliable
                    insights for confident hiring decisions.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={ReferenceCheck}
                    alt="Reference Check AI"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Duplicated cards for continuous scrolling */}
            {/* RPO Card (duplicate) */}
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-center">RPO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-1 items-center gap-5">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg">
                    End-to-end hiring support that makes recruitment faster,
                    smarter, and more efficient.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={RPO}
                    alt="RPO"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Executive Search Card (duplicate) */}
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-center">
                EXECUTIVE SEARCH
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center gap-5">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg">
                    Connecting companies with top leaders and specialists to
                    drive growth and success.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={Excecutive}
                    alt="Executive Search"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-1 bg-white rounded-md p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-95"
              style={{
                width: "650px",
                minWidth: "450px",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <h3 className="text-2xl font-bold text-black text-nowrap text-center">
                REFERENCE CHECK AI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <p className="text-black leading-relaxed self-center 2xl:text-lg ">
                    AI-powered reference checks that deliver fast, reliable
                    insights for confident hiring decisions.
                  </p>
                </div>
                <div className="flex justify-center self-center">
                  <img
                    src={ReferenceCheck}
                    alt="Reference Check AI"
                    className="w-50 h-50 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>

      {/* View More Button */}
      <button className="bg-white text-black px-12 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
        VIEW MORE
      </button>
    </div>
  );
}

export default Services;
