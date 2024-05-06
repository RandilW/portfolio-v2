import React, { forwardRef, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/projectsection.module.css";
import projects from "./json/projects";
import edaMockup from "@/public/mockups/eda/eda.png";
import aggieFundsMockup from "@/public/mockups/aggiefunds/aggiefunds.png";
import profmatchMockup from "@/public/mockups/profmatch/profmatch1.png";
import clientDesignProjectMockup from "@/public/mockups/client-design-project/client-design-project.png";
import chromecastDashboardMockup from "@/public/mockups/chromecast-dashboard/chromecast-dashboard.png";

const imageSrc = (title) => {
  switch (title) {
    case "Exploratory Data Analysis":
      return edaMockup;
    case "AggieFunds":
      return aggieFundsMockup;
    case "ProfMatch":
      return profmatchMockup;
    case "Client Design Project":
      return clientDesignProjectMockup;
      case "Chromecast Dashboard":
          return chromecastDashboardMockup;
  }
};

const ProjectsSection = forwardRef((props, ref) => {
  const featuredProjects = projects.filter((details) => details.featured);

  const Project = ({ title, summary, id, src }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, threshold: 0.5 });

    return (
      <section
        className={`${styles.project_container} project-section`}
        ref={containerRef}
        style={{
          transform: inView ? "none" : "translateY(70px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          overflow: "hidden",
        }}
      >
        <Link href={`work/${id}`} scroll={false}>
          <div className={styles.project_image}>
            <Image
              src={imageSrc(title)}
              alt={`${title} pic`}
              fill
              placeholder="blur"
            />
          </div>
        </Link>
        <div className={styles.project_content}>
          <p>{title}</p>
          <span>{summary}</span>
        </div>
      </section>
    );
  };

  return (
      <section ref={ref} className={styles.parent_container}>
        <p className={styles.heading}>Featured Work</p>

        <div className={styles.projects_grid}>
          {featuredProjects.map((details) => {
            const {title, summary, id, imgSrc} = details;

            return (
                <Project
                    title={title}
                    summary={summary}
                    key={id}
                    id={id}
                    src={imgSrc}
                />
            );
          })}
        </div>
      </section>
  );
});

export default ProjectsSection;
