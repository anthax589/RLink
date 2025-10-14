import Fallback from "../../assets/img/FallbackImg.webp";
import { useEffect, useRef } from "react";
import intro from "../../assets/video/RLinkIntro.mp4";
import { useVideoContext } from "../../context/useVideoContext";

const HeroSection = () => {
  const videoRef = useRef(null);
  const { setVideoEnded } = useVideoContext();

  useEffect(() => {
    setVideoEnded(false);
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoEnd = () => setVideoEnded(true);

      const playVideo = async () => {
        try {
          videoElement.currentTime = 0;
          const playPromise = videoElement.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => setVideoEnded(true));
          }
          videoElement.addEventListener("ended", handleVideoEnd);
        } catch {
          setVideoEnded(true);
        }
      };

      playVideo();
      return () => videoElement.removeEventListener("ended", handleVideoEnd);
    }
  }, [setVideoEnded]);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Ultra Responsive Video - 100000% Responsive */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={Fallback}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          minWidth: "100vw",
          minHeight: "100vh",
          maxWidth: "none",
          maxHeight: "none",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 1,
          transform: "scale(1.02)", // Slight scale to ensure no gaps
        }}
      >
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
