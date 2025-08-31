import HeroImg from "../../assets/hero-img.svg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover h-[100vh] px-6 lg:px-16 py-20 flex items-center  bg-no-repeat bg-right-top "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Content */}
      <div className="max-w-5xl text-left">
        <h1
          className="text-[120px] font-bold text-[#1B2A37] "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          RLink Partners
        </h1>
        <p
          className="text-[39px] font-bold text-[#1B2A37] mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Your Gateway to the Next Leadership Stage
        </p>
        <p className="text-md text-[#1B2A37]" >
          Connecting Visionary Leaders with Breakthrough Growth-Stage Startups
          in Japan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
