"use client";
import { useEffect, useState } from "react";

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });
  const [insideProjectSection, setInsideProjectSection] = useState(false);

  const updateCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setInsideProjectSection(e.target.closest(".project-section") !== null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);

    // cleanup
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return { cursorPosition, insideProjectSection };
};

export default useCursorPosition;
