import { useEffect } from "react";
import Header from "../shared/Header";
import HeroSection from "../components/Landing/HeroSection";
import AboutSection from "../components/Landing/AboutSection";
import Services from "../components/Landing/ServicesSection";
import JobTitleSection from "../components/Landing/JobTitleSection";
import ContactSection from "../components/Landing/ContactSection";
import Footer from "../shared/Footer";

const LandingPage = () => {
  useEffect(() => {
    // Disable smooth scrolling temporarily
    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    // Force scroll to top immediately and prevent any auto-scrolling
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional safety measure with a slight delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Restore original scroll behavior
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 100);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  return (
    <div>
      <div className="bg-white">
        <Header />
      </div>
      <div id="hero-section" style={{ position: "relative", zIndex: "2" }}>
        <HeroSection />
      </div>
      <AboutSection />
      <Services />
      <JobTitleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
