"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import styles from "../styles/imageGallery.module.css";

const ImageGallery = ({ imageGallery }) => {
  const Images = ({ src, index }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, threshold: 0.5 });

    return (
      <motion.div
        ref={containerRef}
        style={{
          transform: inView ? "none" : "translateY(70px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          overflow: "hidden",
        }}
        className={styles.project_image}
      >
        <Image src={src} alt={`image_gallery_pic_${index}`} fill />
      </motion.div>
    );
  };

  return (
    <div className={styles.image_gallery}>
      {imageGallery.map((src, index) => {
        return <Images src={src} index={index} key={index} />;
      })}
    </div>
  );
};

export default ImageGallery;
