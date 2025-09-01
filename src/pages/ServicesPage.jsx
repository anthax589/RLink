import Header from "../shared/Header";
import HeroSection from "../components/Services/HeroSection";
import OurServicesSection from "../components/Services/OurServicesSection";

import Footer from "../shared/Footer";
const LandingPage = () => {
    const footerBgColor = "bg-black";
  return (
    <>
      <Header />
      <HeroSection />
      <OurServicesSection />
      <Footer footerBgColor={footerBgColor} />
    </>
  );
};

export default LandingPage;
