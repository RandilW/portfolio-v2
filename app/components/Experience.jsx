import React from "react";
import styles from "../styles/experience.module.css";

const Experience = () => {
  return (
      <section>
          <div className={styles.heading_container}>
              <p className={styles.heading}>Experience</p>
          </div>

          <div className={styles.experience_parent_container}>
              <div className={styles.experience_container}>
                  <h2 className={styles.timeline}>2024</h2>
                  <span>
            <h2>Data Analyst</h2>
            <p>College Station, TX</p>
          </span>
              </div>
          </div>

          <div className={styles.experience_parent_container}>
              <div className={styles.experience_container}>
                  <h2 className={styles.timeline}>2023</h2>
                  <span>
            <h2>Project Manager</h2>
            <p>Aggie Coding Club</p>
          </span>
              </div>
          </div>

          <div className={styles.experience_parent_container}>
              <div className={styles.experience_container}>
                  <h2 className={styles.timeline}>2023</h2>
                  <span>
            <h2>E-Commerce</h2>
            <p>Frisco, TX</p>
          </span>
              </div>
          </div>

          <div className={styles.experience_parent_container}>
              <div className={styles.experience_container}>
                  <h2 className={styles.timeline}>2022</h2>
                  <span>
            <h2>Web Developer</h2>
            <p>PGP Style</p>
          </span>
              </div>
          </div>

          <div className={styles.experience_parent_container}>
              <div className={styles.experience_container}>
                  <h2 className={styles.timeline}>2022</h2>
                  <span>
            <h2>Graphic Designer Internship</h2>
            <p>One Man’s Treasure</p>
          </span>
              </div>
          </div>
      </section>
  );
};

export default Experience;
