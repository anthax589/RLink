import React, { memo } from "react";
import Noise from "../../../assets/img/Noise2.png";
import { useTranslations } from "../../../hooks/useTranslations";

const PlacementSection = memo(() => {
  const { t } = useTranslations();

  const cardStyle = {
    backgroundImage: `url(${Noise})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const cards = [
    {
      title: t("placement_card_1_title"),
      items: t("placement_card_1_desc").split("\n"),
    },
    {
      title: t("placement_card_2_title"),
      items: t("placement_card_2_desc").split("\n"),
    },
    {
      title: t("placement_card_3_title"),
      items: t("placement_card_3_desc").split("\n"),
    },
    {
      title: t("placement_card_4_title"),
      items: t("placement_card_4_desc").split("\n"),
    },
    {
      title: t("placement_card_5_title"),
      items: t("placement_card_5_desc").split("\n"),
    },
    {
      title: t("placement_card_6_title"),
      items: t("placement_card_6_desc").split("\n"),
    },
    {
      title: t("placement_card_7_title"),
      items: t("placement_card_7_desc").split("\n"),
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center py-12 sm:py-16 md:py-20 lg:py-28 text-[#5B5B5B] "
          style={{ textShadow: "2px 7px 2px rgba(0, 0, 0, 0.2)" }}
          data-aos="fade-up"
        >
          {t("placement_heading")}
        </h2>

        {/* Cards Grid */}
        <div
          className="space-y-6 md:space-y-8 lg:space-y-10"
          style={{ fontFamily: "Lato-Regular" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* First 6 cards - 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {cards.slice(0, 6).map((card, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded"
                style={cardStyle}
                data-aos="fade-up"
                data-aos-delay={50 * (index + 1)}
              >
                <div className="text-center text-black">
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed break-words">
                    <span className="font-semibold">{card.title}</span>
                    <br />
                    {card.items.map((item, i) => (
                      <React.Fragment key={i}>
                        - {item}
                        {i < card.items.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Last card - centered on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Invisible spacer only on large screens */}
            <div className="hidden lg:block"></div>

            <div
              className="p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[23vh] flex items-center justify-center border border-[#5B5B5B] rounded sm:col-span-2 lg:col-span-1"
              style={cardStyle}
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="text-center text-black">
                <p className="text-xs sm:text-sm md:text-base leading-relaxed break-words">
                  <span className="font-semibold">{cards[6].title}</span>
                  <br />
                  {cards[6].items.map((item, i) => (
                    <React.Fragment key={i}>
                      - {item}
                      {i < cards[6].items.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* Invisible spacer only on large screens */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Footer Text */}
        <div
          className="text-center py-12 sm:py-16 md:py-20 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 md:gap-16 lg:gap-28 px-4"
          data-aos="fade-up"
        >
          <p
            className="text-[#5B5B5B] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-words"
            style={{ textShadow: "2px 7px 2px rgba(0, 0, 0, 0.2 )" }}
          >
            {t("placement_footer_note")}
          </p>
        </div>
      </div>
    </section>
  );
});

PlacementSection.displayName = "PlacementSection";

export default PlacementSection;
