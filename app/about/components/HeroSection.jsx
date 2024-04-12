"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/herosection.module.css";
import profliePic from "../../../public/profile_pic.jpeg";
import ImageSlide from "./ImageSlide";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 1400);
  }, []);

  const sentence1 =
    "It all started with a dream of creating a website to my father, there on i started exploring the web.";

  const sentence2 =
    "With each project, I push my work to new horizons & learn new things. Always putting quality first.";

  const heroSectionText =
      "Hello, I'm Randil Wijayananda. A Data Engineering student at Texas A&M University with a interest in Computer Science and Web Design";
    // "Hi, I’m Pavan Bhaskar. A frontend developer & UI designer living in Hyderabad.";

  const heroSectionTextAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      transition: {
        delay: 0.25,
        staggerChildren: 0.015,
      },
    },
  };

  const sentencesTextAnimation = {
    initial: {
      opacity: 1,
    },
    animate: {
      transition: {
        delay: 1,
        staggerChildren: 0.015,
      },
    },
  };

  const spanAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.hero_section_container}>
          <motion.p
            className={styles.heading}
            variants={heroSectionTextAnimation}
            animate={isInView ? "animate" : ""}
            initial="initial"
          >
            {heroSectionText.split(" ").map((word, index) => {
              return (
                <motion.span key={index} variants={spanAnimation}>
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </motion.p>

          <div className={styles.image_container}>
            <ImageSlide src={profliePic} className={styles.hero_section_pic} />
          </div>
        </div>

        <motion.p
          className={styles.content}
          variants={sentencesTextAnimation}
          animate={isInView ? "animate" : ""}
          initial="initial"
        >
          {sentence1.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>
        <br />

        <motion.p
          className={styles.content}
          variants={sentencesTextAnimation}
          animate={isInView ? "animate" : ""}
          initial="initial"
        >
          {sentence2.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>
      </section>
    </>
  );
};

export default HeroSection;
