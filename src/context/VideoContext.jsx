import { createContext } from "react";

// Create context with default value
export const VideoContext = createContext({
  activeVideo: 1,
  setActiveVideo: () => {},
});
