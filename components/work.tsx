import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Work.module.css"
import { isAbsolute } from "path";

interface WorkProps {

}

interface CardProps {
    num: number
}

const Card = ({num}: CardProps) => {
  return (
      <div
        className={styles.card}
        id={num.toString()}
      >
        <div className={styles.imgWrapper}>
          <img src="/images/wordle.png"/>
        </div>
      </div>
    );
}

const Work = ({}: WorkProps) => {
    return (
        <div className={styles.container} id="projects">
            <div className={styles.header}>
                Projects
            </div>
            <div className={styles.grid}>
                <Card num={1}></Card>
                <Card num={2}></Card>
                <Card num={3}></Card>
                <Card num={4}></Card>
            </div>
        </div>
    )
}

export default Work