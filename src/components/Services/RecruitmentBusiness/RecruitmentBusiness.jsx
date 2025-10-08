import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import IntroductionSection from "./IntroductionSection";
import TableSection from "./TableSection";
import JobSection from "./JobSection"
import PlacementSection from "./PlacementSection";
import tablebg from "../../../assets/img/OurServicesBackGround.png";
export default function FormalDocument() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="min-h-screen">
      <IntroductionSection />
      <div
        className="bg-white/90"
        style={{
          backgroundImage: `url(${tablebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TableSection />
        <JobSection />
      </div>
      <PlacementSection />
    </div>
  );
}




