import React from 'react'
import { useEffect } from "react";
import Header from "../shared/Header";
import HeroSection from "../components/Services/HrProductsBusiness/HeroSection";
import HrProducts from "../components/Services/HrProductsBusiness/HrProducts";
import Footer from "../shared/Footer";
function HrProductBusiness() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Header />
      <HeroSection />
      <HrProducts />
      <Footer />
    </div>
  )
}

export default HrProductBusiness
