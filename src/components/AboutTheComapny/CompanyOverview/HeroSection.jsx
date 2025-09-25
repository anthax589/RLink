import React from 'react'

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover h-[70vh] px-6 lg:px-16 py-10   "
      style={{
        backgroundImage: `linear-gradient(306deg,rgba(24, 103, 209, 1) 0%, rgba(0, 0, 0, 1) 89%)`,
      }}
    >
      {/* Content */}
      <div className="max-w-5xl flex flex-col justify-end h-full  text-left">
        <h1
          className="text-[128px] leading-40  text-white "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          会社概要
        </h1>
        <p
          className="text-[36px] text-white "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Company Profile{" "}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
