"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./components/Loading";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import MyStack from "./components/MyStack";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import CommonLoader from "./components/commonComponents/CommonLoader";
import useSmoothScroll from "./components/commonComponents/useSmoothScroll";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState();
  const ProjectsSectionRef = useRef(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const alreadyLoaded = sessionStorage.getItem("initialLoading");
    setInitialLoading(alreadyLoaded);

    // this is for loading animation
    if (alreadyLoaded) {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 800);
    } else {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
        sessionStorage.setItem("initialLoading", true);
      }, 2000);
    }
  }, []);

  // scrolls to the project section
  const scrollToProjectSection = () => {
    const projectsSection = ProjectsSectionRef.current;

    if (projectsSection) {
      scrollTo(projectsSection);
    }
  };

  const CustomLoader = () => {
    if (initialLoading) {
      return <CommonLoader name="Home" />;
    }

    return <Loading />;
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <CustomLoader /> : null}
      </AnimatePresence>

      <main className="main_container">
        <HeroSection scrollToProjectSection={scrollToProjectSection} />
        <AboutMe />
        <ProjectsSection ref={ProjectsSectionRef} />
        <MyStack />
        <Experience />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
