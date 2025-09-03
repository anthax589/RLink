import { useEffect, useRef, useState } from "react";

export default function TypewriterOnScroll({
  text = "",
  delay = 80,
  threshold = 0.3,
  className = "",
  letterClassName = "",
}) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [lettersShown, setLettersShown] = useState(0);

  const letters = text.split(""); // Split into characters

  // Detect when container is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  // Animate letters
  useEffect(() => {
    if (visible && lettersShown < letters.length) {
      const timer = setTimeout(() => {
        setLettersShown((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [visible, lettersShown, letters.length, delay]);

  return (
    <div ref={containerRef} className={`flex ${className}`}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className={`transition-opacity duration-300 ${
            i < lettersShown ? "opacity-100" : "opacity-0"
          } ${letterClassName}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
