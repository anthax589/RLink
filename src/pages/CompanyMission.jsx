import React from 'react'
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import HeroSection from '../components/AboutTheComapny/CompanyMission/HeroSection';
import CompanyMissionContent from '../components/AboutTheComapny/CompanyMission/CompanyMissionContent';
function CompanyMission() {
  return (
    <div>
        <Header />
        <CompanyMissionContent />
        <Footer/>
    </div>
  )
}

export default CompanyMission
