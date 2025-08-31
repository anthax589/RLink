import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutSection from "../components/Landing/AboutSection";
import Services from "../components/Landing/ServicesSection";
import JobTitleSection from "../components/Landing/JobTitleSection";
const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <JobTitleSection />
    </>
  );
};

export default LandingPage;
