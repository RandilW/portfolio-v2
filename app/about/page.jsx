"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import CommonLoader from "../components/commonComponents/CommonLoader";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 800);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <CommonLoader name="About" /> : null}
      </AnimatePresence>
      <HeroSection />
      <Services />
    </>
  );
};

export default About;
