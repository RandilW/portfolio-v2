"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "../styles/project.module.css";
import AnimatedButton from "../../components/commonComponents/AnimatedButton";
import NextProject from "./NextProject";
import ImageGallery from "./ImageGallery";
import RedirectArrow from "./RedirectArrow";

const Project = ({ details }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(containerRef, { once: true, threshold: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, threshold: 0.5 });

  const {
    index,
    id,
    title,
    imgSrc,
    siteUrl,
    description,
    builtOn,
    services,
    imageGallery,
  } = details;

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
    <section className={styles.container}>
      <header className={styles.title_container}>
        <p className={styles.project_title}>{title}</p>

        <AnimatedButton>
          <a
            href={siteUrl}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.redirect_btn}
          >
            Live site
            <RedirectArrow />
          </a>
        </AnimatedButton>
      </header>

      <main className={styles.main}>
        <motion.div
          ref={imageRef}
          style={{
            transform: isImageInView ? "none" : "translateY(70px)",
            opacity: isImageInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <div className={styles.project_image}>
            <Image src={imgSrc} alt={`${title} pic`} fill />
          </div>
        </motion.div>

        <motion.p
          ref={containerRef}
          className={styles.description}
          variants={sentencesTextAnimation}
          animate={inView ? "animate" : ""}
          initial="initial"
        >
          {description.split(" ").map((word, index) => {
            return (
              <motion.span key={index} variants={spanAnimation}>
                {word}&nbsp;
              </motion.span>
            );
          })}
        </motion.p>
      </main>

      <div>
        <div className={styles.details_container}>
          <p>Services</p>
          <span>
            {services.map((details, index) => {
              if (index === services.length - 1) {
                return details;
              }
              return `${details}, `;
            })}
          </span>
        </div>

        <div className={styles.details_container}>
          <p>Built on</p>
          <span>
            {builtOn.map((details, index) => {
              if (index === builtOn.length - 1) {
                return details;
              }
              return `${details}, `;
            })}
          </span>
        </div>
      </div>

      <ImageGallery imageGallery={imageGallery} />

      <p className={styles.heading}>Next Case</p>
      <NextProject details={details} />
    </section>
  );
};

export default Project;
