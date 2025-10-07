import React, { useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import IntroductionSection from "./IntroductionSection";
import TableSection from "./TableSection";
export default function FormalDocument() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="min-h-screen">
        <IntroductionSection />
        <TableSection />
    </div>
  );
}




