"use client";
import { motion } from "framer-motion";
import styles from "../styles/customCursor.module.css";
import useCursorPosition from "./commonComponents/useCursorPosition";

const CustomCursor = () => {
  const { cursorPosition, insideProjectSection } = useCursorPosition();
  const size = insideProjectSection ? 100 : 20;

  const animationVariants = {
    default: {
      x: cursorPosition.x - size / 2,
      y: cursorPosition.y - size / 2,
      height: size,
      width: size,
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      animate={"default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      className={`${styles.custom_cursor_style} custom_cursor ${
        insideProjectSection ? styles.no_mix_blend : ""
      }`}
    >
      <span
        style={{
          fontSize: insideProjectSection ? "1.25rem" : "0.25rem",
          opacity: insideProjectSection ? 1 : 0,
        }}
      >
        View
      </span>
    </motion.div>
  );
};

export default CustomCursor;
