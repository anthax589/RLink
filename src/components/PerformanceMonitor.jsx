import { useEffect } from "react";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    onCLS(console.log);
    onINP(console.log); // Replaced FID with INP
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);

    // Monitor specific performance metrics
    if ("PerformanceObserver" in window) {
      // Monitor Long Tasks (tasks over 50ms)
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`);
          }
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ["longtask"] });
      } catch {
        // Long task API not supported
      }

      // Monitor Layout Shifts
      const layoutShiftObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.hadRecentInput) return;
          console.log("Layout shift detected:", entry.value);
        });
      });

      try {
        layoutShiftObserver.observe({ entryTypes: ["layout-shift"] });
      } catch {
        // Layout shift API not supported
      }

      return () => {
        longTaskObserver.disconnect();
        layoutShiftObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
