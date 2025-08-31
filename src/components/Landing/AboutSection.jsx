const AboutSection = () => {
  return (
    <section className="bg-white px-6 lg:px-16 py-12  border-gray-200">
      <div className="max-w-4xl pl-20">
        {/* Title */}
        <div className="flex items-start mb-6">
          <span className="text-xl font-bold text-[#5B5B5B] 2xl:text-3xl">
            ● About Us
          </span>
        </div>

        {/* Description */}
        <p className="text-black leading-relaxed mb-4 2xl:text-xl">
          Established in 2021 and based in Shirokane, Minato-ku, Tokyo, We
          specialize in headhunting and recruitment for executive-level
          roles—including CxOs, business leaders, and tech specialists—across
          startups, growth-stage firms, and corporate spin-offs.
        </p>
        <p className="text-black leading-relaxed mb-6 2xl:text-xl">
          Built on a foundation of passion, reliability, integrity, commitment,
          and teamwork, our bilingual team of seasoned consultants provides
          comprehensive support—from tailored job searches to resume crafting
          and interview coaching.
        </p>

        {/* Button */}
        <button className="px-13 2xl:px-14 py-3 bg-[#545555] text-white text-sm  2xl:text-lg tracking-wide shadow hover:bg-gray-800 transition rounded-md ">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
