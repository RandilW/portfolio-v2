import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../styles/HamBurgerMenu.module.css";
import navLinks from "./json/navLinks";
import socialLinks from "./json/socialLinks";

const hamburgerMenuSlideVariants = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0",
    transition: "transform 0.6s cubic-bezier(0.61, 1, 0.88, 1)",
  },
  exit: {
    x: "100%",
    transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
  },
};

const linkSlide = {
  initial: {
    x: 80,
  },
  enter: (index) => {
    return {
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.09 * index,
      },
    };
  },
  exit: (index) => ({
    x: 80,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.09 * index,
    },
    delay: 1 * index,
  }),
};

const HamBurgerMenu = ({ setOpen }) => {
  const pathName = usePathname();

  return (
    <motion.div
      variants={hamburgerMenuSlideVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.container}
    >
      <motion.div
        className={styles.links_container}
        animate="enter"
        initial="initial"
        exit="exit"
      >
        {navLinks.map((data, index) => {
          const { label, path, target } = data;
          return (
            <motion.div custom={index} variants={linkSlide} key={index}>
              <Link
                href={path}
                key={label}
                target={target}
                scroll={false}
                // closing the hamburger menu after some delay because it's disturbing route change animation
                onClick={() =>
                  setTimeout(() => {
                    setOpen(false);
                  }, 500)
                }
              >
                {label}
                {pathName === path ? (
                  <span className={styles.link_icon}>•</span>
                ) : null}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <div className={styles.social_links_parent_container}>
        <hr />

        <div className={styles.social_links_container}>
          {socialLinks.map((details, index) => {
            const { name, url } = details;
            return (
              <a
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                key={index}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HamBurgerMenu;
