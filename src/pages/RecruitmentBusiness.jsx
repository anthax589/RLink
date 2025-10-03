import React, { useEffect } from "react";
import Header from "../shared/Header";
import HeroSection from "../components/Services/RecruitmentBusiness/HeroSection";
import RecruitmentBusiness from "../components/Services/RecruitmentBusiness/RecruitmentBusiness";
import Footer from "../shared/Footer";

function RecruitmentBusinessContents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <RecruitmentBusiness />
      <Footer />
    </div>
  );
}

export default RecruitmentBusinessContents;
