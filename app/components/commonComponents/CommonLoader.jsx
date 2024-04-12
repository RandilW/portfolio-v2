import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/loading.module.css";

const slideAnimation = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const CommonLoader = ({ name }) => {
  return (
    <motion.div
      variants={slideAnimation}
      initial="initial"
      exit="exit"
      className={styles.loading_container}
    >
      <motion.p
        animate={{ top: "50vh" }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.2 }}
      >
        • {name}
      </motion.p>
    </motion.div>
  );
};

export default CommonLoader;
