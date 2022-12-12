import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Work.module.css"
import Link from 'next/link';

const projects = {
  wordle: {
    name: "Wordle",
    desc : "A modernized Wordle clone with some neat upgrades",
    skills: ["ReactJS", "Sass", "Netlify", "Typescript", "Node.js", "CSS"]
  },
  wordle1: {
    name: "Wordle",
    desc : "A modernized Wordle clone with some neat upgrades",
    skills: ["ReactJS", "Sass", "Netlify", "Typescript", "Node.js", "CSS"]
  },
  wordle2: {
    name: "Wordle",
    desc : "A modernized Wordle clone with some neat upgrades",
    skills: ["ReactJS", "Sass", "Netlify", "Typescript", "Node.js", "CSS"]
  },
  wordle3: {
    name: "Wordle",
    desc : "A modernized Wordle clone with some neat upgrades",
    skills: ["ReactJS", "Sass", "Netlify", "Typescript", "Node.js", "CSS"]
  }
}

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
        <div className={styles.cover}>
          <p>Wordle</p>
          <p>A modernized Wordle clone with some neat upgrades</p>
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
              <Link href="/wordle">
                <Card num={1}></Card>
              </Link>
                <Card num={2}></Card>
                <Card num={3}></Card>
                <Card num={4}></Card>
            </div>
        </div>
    )
}

export default Work