import React, { useEffect, lazy, Suspense, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useVideoContext } from "../context/useVideoContext";
import Header from "../shared/Header";
import HeroSection from "../components/Landing/HeroSection";
import PerformanceMonitor from "../components/PerformanceMonitor";

// Lazy load heavy components with preload hints
const AboutSection = lazy(() =>
  import(/* webpackChunkName: "about" */ "../components/Landing/AboutSection")
);
const Services = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../components/Landing/ServicesSection"
  )
);
const JobTitleSection = lazy(() =>
  import(
    /* webpackChunkName: "jobtitle" */ "../components/Landing/JobTitleSection"
  )
);
const ContactSection = lazy(() =>
  import(
    /* webpackChunkName: "contact" */ "../components/Landing/ContactSection"
  )
);
const Footer = lazy(() =>
  import(/* webpackChunkName: "footer" */ "../shared/Footer")
);

// Optimized loading component
const LoadingSpinner = React.memo(() => (
  <div className="h-16 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
));

const LandingPage = () => {
  const { videoEnded } = useVideoContext();
  const location = useLocation();

  // Memoize computed values
  const isLandingPage = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  // Optimize scroll handling with useCallback
  const handleScrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simple scroll to top optimization
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(handleScrollToTop);

    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, [handleScrollToTop]);

  // Memoize the class string
  const containerClass = useMemo(
    () => `${isLandingPage && videoEnded ? "" : ""}`,
    [isLandingPage, videoEnded]
  );

  return (
    <div>
      {import.meta.env.DEV && <PerformanceMonitor />}
      <Header />
      <div className={containerClass}>
        <div
          id="hero-section"
          className="bg-white"
          style={{ position: "relative", zIndex: 2, willChange: "transform" }}
        >
          <HeroSection />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <JobTitleSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default React.memo(LandingPage);
