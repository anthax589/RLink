import Header from "../shared/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutSection from "../components/Landing/AboutSection";
import Services from "../components/Landing/ServicesSection";
import JobTitleSection from "../components/Landing/JobTitleSection";
import ContactSection from "../components/Landing/ContactSection";
import Footer from "../shared/Footer";
const LandingPage = () => {
  const footerBgColor = "bg-[#1867D1]";

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <JobTitleSection />
      <ContactSection />
      <Footer footerBgColor={footerBgColor} />
    </>
  );
};

export default LandingPage;
