"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../styles/mystack.module.css";
import { techStack } from "./json/techStack";

const MyStack = () => {
  const parentContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentContainerRef,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      className={styles.my_stack_parent_container}
      ref={parentContainerRef}
    >
      <div className={styles.heading_container}>
        <p className={styles.heading}>My Stack</p>
      </div>

      {/* 1st container */}
      <motion.div style={{ x: x1 }} className={styles.tech_stack_container}>
        <div className={styles.tech_stack}>
          {techStack.container1.map((data, index) => {
            const { name, src, alt } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={30}
                  width={30}
                  alt={alt}
                  className={styles.tech_stack_pic}
                />
                {name}
              </span>
            );
          })}
        </div>

        <div className={styles.tech_stack}>
          {techStack.container1.map((data, index) => {
            const { name, src, alt } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={30}
                  width={30}
                  alt={alt}
                  className={styles.tech_stack_pic}
                />
                {name}
              </span>
            );
          })}
        </div>
      </motion.div>

      {/* 2nd container */}
      <motion.div style={{ x: x2 }} className={styles.tech_stack_container}>
        <div className={styles.tech_stack}>
          {techStack.container2.map((data, index) => {
            const { name, src, alt, className } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={name === "Tailwindcss" ? 20 : 30}
                  width={30}
                  alt={alt}
                  className={`${styles.tech_stack_pic} ${
                    className ? styles.tailwind_pic : null
                  }`}
                />
                {name}
              </span>
            );
          })}
        </div>

        <div className={styles.tech_stack}>
          {techStack.container2.map((data, index) => {
            const { name, src, alt, className } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={name === "Tailwindcss" ? 20 : 30}
                  width={30}
                  alt={alt}
                  className={`${styles.tech_stack_pic} ${
                    className ? styles.tailwind_pic : null
                  }`}
                />
                {name}
              </span>
            );
          })}
        </div>
      </motion.div>

      {/* 3rd container */}
      <motion.div style={{ x: x3 }} className={styles.tech_stack_container}>
        <div className={styles.tech_stack}>
          {techStack.container3.map((data, index) => {
            const { name, src, alt } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={30}
                  width={30}
                  alt={alt}
                  className={styles.tech_stack_pic}
                />
                {name}
              </span>
            );
          })}
        </div>

        <div className={styles.tech_stack}>
          {techStack.container3.map((data, index) => {
            const { name, src, alt } = data;
            return (
              <span key={index}>
                <Image
                  src={src}
                  height={30}
                  width={30}
                  alt={alt}
                  className={styles.tech_stack_pic}
                />
                {name}
              </span>
            );
          })}
        </div>
      </motion.div>

      <div className={styles.overlay}></div>
    </section>
  );
};

export default MyStack;
