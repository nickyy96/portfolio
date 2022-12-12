import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Work.module.css"
import Link from 'next/link';

const projects = [
  {
    img: "/images/wordle.png",
    name: "Wordle",
    desc: "A modernized Wordle clone with some neat upgrades"
  },
  {
    img: "/images/redesign_main.png",
    name: "Redesign",
    desc: "A redesign of a hotel's website with prototypes, a style guide, and HTML"
  },
  {
    img: "/images/development_main.png",
    name: "Development",
    desc: "A neat app to interact with Eagles players"
  },
  {
    img: "/images/personas_main.png",
    name: "Personas",
    desc: "A charicature of hypothetical users of a Coca Cola machine"
  }
]

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
          <img src={projects[num].img}/>
        </div>
        <div className={styles.cover}>
          <p>{projects[num].name}</p>
          <p>{projects[num].desc}</p>
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
                <Card num={0}></Card>
              </Link>
              <Link href="/redesign">
                <Card num={1}></Card>
              </Link>
              <Link href="/development">
                <Card num={2}></Card>
              </Link>
              <Link href="/personas">
                <Card num={3}></Card>
              </Link>
            </div>
        </div>
    )
}

export default Work