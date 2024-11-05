import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";

const LandingPage = () => (
  <div className="min-h-screen bg-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <Header />
      <HeroSection />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
  </div>
);

export default LandingPage;
