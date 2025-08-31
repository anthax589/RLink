import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutSection from "../components/Landing/AboutSection";
import Services from "../components/Landing/ServicesSection";
import JobTitleSection from "../components/Landing/JobTitleSection";
import ContactSection from "../components/Landing/ContactSection";
import Footer from "../layout/Footer";
const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <JobTitleSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LandingPage;
