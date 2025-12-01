// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CompanyProfile from "./pages/CompanyOverview";
import CompanyMission from "./pages/CompanyMission";
import RecruitmentBusiness from "./pages/RecruitmentBusiness";
import RecruitmentStrategy from "./pages/RecruitmentStrategy";
import HrProductBusiness from "./pages/HrProductBusiness";
import Staffing from "./pages/Staffing";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/Landing/ContactSection";
import UnderConstruction from "./pages/UnderContruction";
import { VideoProvider } from "./context/VideoProvider";
import "./App.css";

function App() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-full">
          <Routes>
            {/* <Route path="/" element={<UnderConstruction />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-mission" element={<CompanyMission />} />
            <Route
              path="/recruitment-business"
              element={<RecruitmentBusiness />}
            />
            <Route
              path="/recruitment-strategy"
              element={<RecruitmentStrategy />}
            />
            <Route
              path="/hr-product-business"
              element={<HrProductBusiness />}
            />
            <Route path="/staffing" element={<Staffing />} />

            {/* Add catch-all route */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}

export default App;
