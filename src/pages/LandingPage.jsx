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
    // Prevent browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Disable smooth scrolling temporarily
    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    // Force scroll to top immediately and prevent any auto-scrolling
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll to top
    scrollToTop();

    // Additional safety measures with multiple delays to override browser behavior
    const timer1 = setTimeout(scrollToTop, 0);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 100);
    const timer4 = setTimeout(() => {
      scrollToTop();
      // Restore original scroll behavior
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 200);

    // Handle page visibility change (when user comes back to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        scrollToTop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;

      // Restore scroll restoration when component unmounts
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div>
      <Header />
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
