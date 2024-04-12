"use client";
import React, { useState } from "react";
import styles from "../styles/services.module.css";
import services from "@/app/components/json/services";

const Services = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const handleIsOpen = (id) => {
    const newArray = isOpen.map((state, index) => {
      if (id === index) {
        return !state;
      }
      return false;
    });
    setIsOpen(newArray);
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.heading_container}>
          <p className={styles.heading}>Services</p>
        </div>

        {services.map((data, index) => {
          const { title, content } = data;

          return (
            <div className={styles.services_container} key={index}>
              <div className={styles.services_header}>
                <p onClick={() => handleIsOpen(index)} className={styles.title}>
                  {title}
                </p>

                <div
                  className={`${styles.btn} ${
                    isOpen[index] ? styles.btn_rotate : ""
                  }`}
                  onClick={() => handleIsOpen(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleIsOpen(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="service button"
                >
                  <span className={styles.plus_icon}></span>
                  <span className={styles.plus_icon}></span>
                </div>
              </div>
              <div
                className={`${styles.services_content} ${
                  isOpen[index] ? styles.is_active : ""
                }`}
              >
                <span>{content}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Services;
