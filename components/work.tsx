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
  }
]

interface WorkProps {
  handleClick: () => void
}

interface CardProps {
  num: number
  handleClick: () => void
}

const Card = ({num, handleClick}: CardProps) => {
  
  return (
      <div
        className={styles.card}
        id={num.toString()}
        onClick={handleClick}
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

const Work = ({handleClick}: WorkProps) => {
    return (
        <div className={styles.container} id="projects">
            <div className={styles.header}>
                Projects
            </div>
            <div className={styles.grid}>
              <Link href="/wordle">
                <Card num={0} handleClick={handleClick}></Card>
              </Link>
              {/* <Link href="/redesign">
                <Card num={1} handleClick={handleClick}></Card>
              </Link>
              <Link href="/development">
                <Card num={2} handleClick={handleClick}></Card>
              </Link>
              <Link href="/personas">
                <Card num={3} handleClick={handleClick}></Card>
              </Link> */}
            </div>
        </div>
    )
}

export default Work