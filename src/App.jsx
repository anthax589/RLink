// App.jsx
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CompanyProfile from "./pages/CompanyOverview";
import CompanyMission from "./pages/CompanyMission";
import "./App.css";
import { VideoProvider } from "./context/VideoProvider";

// Add global style to prevent border issues
const globalStyle = `
  .section-container, .hero-section, .about-section {
    border: none !important;
    border-top: none !important;
    border-bottom: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

function App() {
  const [page, setPage] = useState(window.location.hash || "#landing");

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash || "#landing");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <VideoProvider>
      <div className="w-full">
        {/* Add global style to prevent border issues */}
        <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
        {page === "#landing" && <LandingPage />}
        {page === "#services" && <ServicesPage />}
        {page === "#company-profile" && <CompanyProfile />}
        {page === "#company-mission" && <CompanyMission />}

      </div>
    </VideoProvider>
  );
}

export default App;
