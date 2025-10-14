import Fallback from "../../assets/img/FallbackImg.webp";
import { useEffect, useRef } from "react";
import intro from "../../assets/video/intro.mp4";
import { useVideoContext } from "../../context/useVideoContext";

const HeroSection = () => {
  const videoRef = useRef(null);
  const { setVideoEnded } = useVideoContext();

  useEffect(() => {
    // Reset video state when component mounts
    setVideoEnded(false);

    // Attempt to play the video when the component mounts
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleVideoEnd = () => {
        console.log("Video playback ended");
        setVideoEnded(true);
      };

      const playVideo = async () => {
        try {
          // Reset video to beginning on refresh
          videoElement.currentTime = 0;

          const playPromise = videoElement.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log("Video playing successfully");
              })
              .catch((error) => {
                console.error("Error playing video:", error);
                // Auto-play was prevented, handle accordingly
                setVideoEnded(true); // Show fallback content if video can't play
              });
          }

          // Add event listener for when video ends
          videoElement.addEventListener("ended", handleVideoEnd);
        } catch (error) {
          console.error("Error playing video:", error);
          setVideoEnded(true);
        }
      };

      playVideo();

      // Cleanup function to remove event listeners when component unmounts
      return () => {
        if (videoElement) {
          videoElement.removeEventListener("ended", handleVideoEnd);
        }
      };
    }
  }, [setVideoEnded]); // Include dependencies

  return (
    <div className="h-screen w-full flex items-center overflow-hidden relative z-50">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover "
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={Fallback}
        style={{
          objectFit: "cover",
          objectPosition: "center center",
          width: "100vw",
          height: "100vh",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <source src={intro} type="video/mp4" />
        {/* Fallback message if video cannot be played */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;
