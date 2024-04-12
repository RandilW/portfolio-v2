"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import projects from "@/app/components/json/projects";
import styles from "../styles/nextProject.module.css";

const NextProject = ({ details }) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false, threshold: 0.5 });

  const nextProject = projects.filter(
    (data) => details.index + 1 === data.index
  );

  // if next project is there shows it
  if (nextProject.length) {
    const { title, summary, imgSrc, id } = nextProject[0];

    return (
      <>
        <motion.section
          ref={containerRef}
          style={{
            transform: inView ? "none" : "translateY(70px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            overflow: "hidden",
          }}
          className={`${styles.project_container} project-section`}
        >
          <Link href={`${id}`} scroll={false}>
            <div className={styles.project_image}>
              <Image src={imgSrc} alt={`${title} pic`} fill />
            </div>
          </Link>
          <div className={styles.project_content}>
            <p>{title}</p>
            <span>{summary}</span>
          </div>
        </motion.section>
      </>
    );
  }

  // next project not there shows first project
  const { title, summary, imgSrc, id } = projects[0];

  return (
    <>
      <motion.section
        style={{
          transform: inView ? "none" : "translateY(70px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          overflow: "hidden",
        }}
        className={`${styles.project_container} project-section`}
        ref={containerRef}
      >
        <Link href={`${id}`}>
          <div className={styles.project_image}>
            <Image src={imgSrc} alt={`${title} pic`} fill />
          </div>
        </Link>
        <div className={styles.project_content}>
          <p>{title}</p>
          <span>{summary}</span>
        </div>
      </motion.section>
    </>
  );
};

export default NextProject;
