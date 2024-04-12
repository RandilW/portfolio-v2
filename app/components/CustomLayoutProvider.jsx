"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Connect from "./Connect";
import CustomCursor from "./CustomCursor";

const CustomLayoutProvider = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      lerp: 0.1,
      wheelMultiplier: 0.7,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  });

  return (
    <>
      <CustomCursor />
      <Navbar />
      {children}

      {/* hiding connect section when we're in not-found page */}
      {!pathname.includes("lost") && <Connect />}
    </>
  );
};

export default CustomLayoutProvider;
