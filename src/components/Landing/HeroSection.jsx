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
    <section className="w-full h-screen min-h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full  object-cover object-center z-10"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={Fallback}
        style={{
          width: "100%",
          height: "100%",
          minWidth: "100vw",
          minHeight: "100vh",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      >
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
