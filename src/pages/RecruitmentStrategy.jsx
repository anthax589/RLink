import React from "react";
import { useEffect } from "react";
import Header from "../shared/Header";
import HeroSection from "../components/Services/RecruitmentStrategy/HeroSection";
import Recruitment from "../components/Services/RecruitmentStrategy/RecruitmentStrategy";
import Footer from "../shared/Footer";
function RecruitmentStrategy() {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Header />
      <HeroSection />
      <Recruitment />
      <Footer />
    </div>
  );
}

export default RecruitmentStrategy;
