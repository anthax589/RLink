const AboutSection = () => {
  return (
    <section className="bg-white px-6 lg:px-16 py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex items-center mb-6">
          <span className="text-xl font-semibold text-gray-800">
            ● About Us
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Established in 2021 and based in Shirokane, Minato-ku, Tokyo, We
          specialize in headhunting and recruitment for executive-level
          roles—including CxOs, business leaders, and tech specialists—across
          startups, growth-stage firms, and corporate spin-offs.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Built on a foundation of passion, reliability, integrity, commitment,
          and teamwork, our bilingual team of seasoned consultants provides
          comprehensive support—from tailored job searches to resume crafting
          and interview coaching.
        </p>

        {/* Button */}
        <button className="px-6 py-2 bg-black text-white text-sm tracking-wide shadow hover:bg-gray-800 transition">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
