import { animate, AnimationOptions, motion, MotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Cell.module.css'

export const CELL_SIZE = 60;

interface cellProps {
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}

const Cell = ({mouseX, mouseY}: cellProps) => {
    const [position, setPosition] = useState([0, 0]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // center x coordinate
        const x = rect.left + CELL_SIZE / 2;
        // center y coordinate
        const y = rect.top + CELL_SIZE / 2;
        setPosition([x, y]);

    }, [ref.current]);

    // useEffect(() => {
    //     if (!ref.current) return;
    //     const value = Math.floor(Math.sqrt(Math.pow(mouseX.get() - (ref.current.offsetLeft+(CELL_SIZE/2)), 2) + Math.pow(mouseY.get() - (ref.current.offsetTop+(CELL_SIZE/2)), 2)));
    //     console.log('here')
    //     if (value < 300) console.log(value)
    // }, [mouseX, mouseY])

    const direction = useTransform<number, number>(
        [mouseX, mouseY],
        ([newX, newY]) => {
            const diffY = newY - position[1];
            const diffX = newX - position[0];
            const angleRadians = Math.atan2(diffY, diffX);
            const angleDegrees = Math.floor(angleRadians * (180 / Math.PI));
            return angleDegrees;
        }
    );
    
    return (
        <div ref={ref} style={{width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px`}} className={styles.cell}>
            <motion.div style={{ rotate: direction }}>→</motion.div>
        </div>
    )
}

export default Cell