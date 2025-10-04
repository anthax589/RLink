import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily
    const originalScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional safety measure with a slight delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Restore original scroll behavior
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 50);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]); // Trigger on every route change

  return null; // This component doesn't render anything
};

export default ScrollToTop;
