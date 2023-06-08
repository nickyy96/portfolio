import { animate, useMotionValue, motion, useTransform, useMotionTemplate, useVelocity, AnimationOptions } from "framer-motion"
import { useEffect, useState } from "react"
import Cell, { CELL_SIZE } from "./cell"

interface GridProps {
    height: number
    width: number
}

const Grid = ({height, width}: GridProps) => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const centerMouseX = useTransform<number, number>(mouseX, (newX) => {
        return newX - width / 2;
    });
    const centerMouseY = useTransform<number, number>(mouseY, (newY) => {
        return newY - height / 2;
    });
    const WebkitMaskPosition = useMotionTemplate`${centerMouseX}px ${centerMouseY}px`;

    // eased mouse position
    const mouseXEased = useMotionValue(0);
    const mouseYEased = useMotionValue(0);
    // mouse velocity
    const mouseXVelocity = useVelocity(mouseXEased);
    const mouseYVelocity = useVelocity(mouseYEased);
    const mouseVelocity = useTransform<number, number>(
        [mouseXVelocity, mouseYVelocity],
        ([latestX, latestY]) => Math.abs(latestX) + Math.abs(latestY)
    );
    // map mouse velocity to an opacity value
    const opacity = useTransform(mouseVelocity, [0, 1000], [0, 1]);

    useEffect(() => {
        const calculateGrid = () => {
          const columnCount = Math.ceil(width / CELL_SIZE);
          setColumns(columnCount);
          const rowCount = Math.ceil(height / CELL_SIZE);
          setRows(rowCount);
        };

        // calculate the grid on load
        calculateGrid();
        // recalculate grid on resize
        window.addEventListener('resize', calculateGrid);
        // cleanup
        return () => {
          window.removeEventListener('resize', calculateGrid);
        };
      }, [height, width]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // animate mouse x and y
            animate(mouseX, e.clientX);
            animate(mouseY, e.clientY);
            // animate eased mouse x and y
            const transition: AnimationOptions<number> = {
                ease: 'easeOut',
                duration: 1,
            };
            animate(mouseXEased, e.clientX, transition);
            animate(mouseYEased, e.clientY, transition);
        };
        // recalculate grid on resize
        window.addEventListener('mousemove', handleMouseMove);
        // cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div style={{display: 'grid',  
                            gridTemplateColumns: `repeat(${columns}, 1fr)`,
                            opacity,
                            WebkitMaskPosition
                        }} 
                    className="grid">
            {Array.from({ length: columns * rows }).map((_, i) => (
                <Cell key={i}/>
            ))}
        </motion.div>
    )
}

export default Grid