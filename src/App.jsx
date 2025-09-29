// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CompanyProfile from "./pages/CompanyOverview";
import CompanyMission from "./pages/CompanyMission";
import RecruitmentBusiness from "./pages/RecruitmentBusinessContents";
import { VideoProvider } from "./context/VideoProvider";
import "./App.css";
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
  return (
    <VideoProvider>
      <BrowserRouter>
        <div className="w-full">
          {/* Add global style to prevent border issues */}
          <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-mission" element={<CompanyMission />} />
            <Route
              path="/recruitment-business"
              element={<RecruitmentBusiness />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}

export default App;
