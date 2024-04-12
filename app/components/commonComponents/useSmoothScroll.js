import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  const lenisRef = useRef(null);

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
    lenisRef.current = lenisInstance;

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const scrollTo = (element) => {
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element);
    }
  };

  return { scrollTo };
};

export default useSmoothScroll;
