import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/slideimage.module.css";
import profilePic from "../../../public/IMG_E5155.png";

const ImageSlide = ({ src }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 1200);
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <Image
        src={profilePic}
        alt="Randil Wijayananda"
        // style={{ opacity: isInView ? 1 : 0 , filter: 'grayscale(100%)'}}
        style={{ opacity: isInView ? 1 : 0 , pointerEvents: 'none'}}
        fill
        sizes="(max-width: 374px) 235px, (min-width: 768px) 335px, (min-width: 768px) 992px, (min-width: 1920px) 435px"
        // placeholder="blur"
      />
      <div
        style={{
          backgroundColor: "rgb(24,24,24)",
          width: "100%",
          height: "100%",
          position: "relative",
          top: 0,
          left: isInView ? "100%" : 0,
          zIndex: 1,
          transition: "left 0.6s cubic-bezier(0.12, 0, 0.39, 0)",
        }}
      ></div>
    </section>
  );
};

export default ImageSlide;
