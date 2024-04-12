"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/loading.module.css";

const slideAnimation = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    top: "50vh",
    ease: [0.33, 1, 0.68, 1],
    duration: 0.2,
  },
};

const words = [
  "బాగున్నారా",
  "नमस्ते",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

const Loading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () => {
        setIndex((index) => index + 1);
      },
      index == 0 ? 750 : 180
    );
  }, [index]);

  return (
    <motion.div
      variants={slideAnimation}
      initial="initial"
      exit="exit"
      className={styles.loading_container}
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        {words[index] ? `• ${words[index]}` : null}
      </motion.p>
    </motion.div>
  );
};

export default Loading;
