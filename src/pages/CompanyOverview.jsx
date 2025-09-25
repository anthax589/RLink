import React from 'react'
import Header from "../shared/Header";
import CompanyOverview from '../components/AboutTheComapny/CompanyOverview/CompanyOverviewContent';
import Footer from "../shared/Footer";
import HeroSection from '../components/AboutTheComapny/CompanyOverview/HeroSection';
function CompanyProfile() {
  return (
    <div>
        <Header />
        <HeroSection />
        <CompanyOverview />
        <Footer/>
    </div>
  )
}

export default CompanyProfile
