import React, { useEffect } from 'react';
//IMPORT GLOBAL STYLING
import '../Assets/css/LandingPage.css';
//IMPORT COMPONENTS
import Navbar from "../Components/Global/Navbar";
import Footer from "../Components/Global/Footer";
import HeroLandingPage from "../Components/LandingPage/HeroLandingPage";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar />
      <HeroLandingPage />
      <Footer />
    </>
  );
}

export default LandingPage;
