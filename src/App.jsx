// App.jsx
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
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
  const [page, setPage] = useState(window.location.hash || "#landing");

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash || "#landing");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="w-full">
      {/* Add global style to prevent border issues */}
      <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
      {page === "#landing" && <LandingPage />}
      {page === "#services" && <ServicesPage />}
    </div>
  );
}

export default App;
