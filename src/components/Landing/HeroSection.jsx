import Fallback from "../../assets/img/FallbackImg.webp";
import { useEffect, useRef } from "react";
import intro from "../../assets/video/intro.mp4";
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
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={Fallback}
      >
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
