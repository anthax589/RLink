import Fallback from "../../assets/img/FallbackImg.webp";
import { useEffect, useRef, useState } from "react";
import { useVideoContext } from "../../context/useVideoContext";
import intro from "../../assets/video/intro.mp4";
// Import additional video sources
import introVideo2 from "../../assets/video/1.mp4"; // Make sure to add these video files
import introVideo3 from "../../assets/video/2.mp4"; // Make sure to add these video files

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  // Get active video from context
  const { activeVideo } = useVideoContext();

  // Function to get the current video source based on activeVideo
  const getVideoSource = () => {
    switch (activeVideo) {
      case 1:
        return intro;
      case 2:
        return introVideo2;
      case 3:
        return introVideo3;
      default:
        return intro;
    }
  };

  useEffect(() => {
    // Attempt to play the video when the component mounts or when activeVideo changes
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

          // Add an event listener to handle when video ends
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
  }, [activeVideo]); // Re-run effect when activeVideo changes

  return (
    <div className="h-screen flex items-center overflow-hidden section-container hero-section">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="relative top-13 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster={Fallback}
        key={activeVideo} // Add key prop to force re-render when video changes
      >
        <source src={getVideoSource()} type="video/mp4" />
        {/* Fallback message if video cannot be played */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;
