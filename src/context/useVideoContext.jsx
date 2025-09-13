import { useContext } from "react";
import { VideoContext } from "./VideoContext";

// Custom hook for using the context
export const useVideoContext = () => useContext(VideoContext);
