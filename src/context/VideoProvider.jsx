import React, { useState, useEffect } from "react";
import { VideoContext } from "./VideoContext";

// Provider component
export const VideoProvider = ({ children }) => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [videoEnded, setVideoEnded] = useState(false);

  // Reset video state on mount/refresh
  useEffect(() => {
    setVideoEnded(false);
  }, []);

  return (
    <VideoContext.Provider
      value={{ activeVideo, setActiveVideo, videoEnded, setVideoEnded }}
    >
      {children}
    </VideoContext.Provider>
  );
};
