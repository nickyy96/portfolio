import { animate, AnimationOptions, motion, MotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Cell.module.css'

export const CELL_SIZE = 30;

const Cell = () => {
    return (
        <div style={{width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`}} className={styles.cell}>
            ⋅
        </div>
    )
}

export default Cell