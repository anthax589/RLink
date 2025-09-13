import React, { useState } from "react";
import { VideoContext } from "./VideoContext";

// Provider component
export const VideoProvider = ({ children }) => {
  const [activeVideo, setActiveVideo] = useState(1);

  return (
    <VideoContext.Provider value={{ activeVideo, setActiveVideo }}>
      {children}
    </VideoContext.Provider>
  );
};
