// Performance utility functions
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Optimized event listener with passive option
export const addOptimizedEventListener = (
  element,
  event,
  handler,
  options = {}
) => {
  const optimizedOptions = {
    passive: true,
    ...options,
  };
  element.addEventListener(event, handler, optimizedOptions);

  return () => element.removeEventListener(event, handler, optimizedOptions);
};

// Performance observer for monitoring
export const observePerformance = () => {
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "measure") {
          console.log(
            `Performance measure: ${entry.name} took ${entry.duration}ms`
          );
        }
      });
    });

    observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
    return observer;
  }
  return null;
};

// Intersection Observer utility for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};
