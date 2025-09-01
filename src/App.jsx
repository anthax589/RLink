// App.jsx
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  const [page, setPage] = useState(window.location.hash || "#landing");

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash || "#landing");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="w-full">
      {page === "#landing" && <LandingPage />}
      {page === "#services" && <ServicesPage />}
    </div>
  );
}

export default App;
