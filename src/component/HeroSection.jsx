import HeroImg from "../assets/hero-img.svg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover h-[100vh] px-6 lg:px-16 py-20 flex items-center  bg-no-repeat bg-right-top "
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Content */}
      <div className="max-w-5xl text-left">
        <h1 className="text-[120px] font-extrabold text-gray-900 ">
          RLink Partners
        </h1>
        <p className="text-[39px] font-semibold text-gray-700 mb-2">
          Your Gateway to the Next Leadership Stage
        </p>
        <p className="text-sm text-gray-500">
          Connecting Visionary Leaders with Breakthrough Growth-Stage Startups
          in Japan
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
