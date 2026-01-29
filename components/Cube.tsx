"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./Cube.module.css"

const FACE_ANGLES = [ 0, 90, 180, 270];

export default function Cube() {
    const cubeRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<number | null>(null);
    const [ rotation, setRotation ] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = window.scrollY / maxScroll;
            const angle = progress * 270; // 0 to 270 degrees
            const backgrounds = [
                "#1e1e2e",
                "#0f172a",
                "#022c22",
                "#3b2f00",
            ];

            document.body.style.backgroundColor = backgrounds[Math.round(angle /90)] ?? backgrounds[0];
            setRotation(angle);

            // Snap Logic
            if (scrollTimeoutRef.current) {
                window.clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = window.setTimeout(() => {
                const nearest = FACE_ANGLES.reduce((prev, curr) => 
                    Math.abs(curr - angle) < Math.abs(prev - angle) ? curr : prev
                );
                setRotation(nearest);
            }, 120);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={styles.scene}>
            <div ref={cubeRef} className={styles.cube} style={{
                transform: `rotateY(${rotation}deg)`,
            }}>
                <div className={`${styles.face} ${styles.front}`}>
                    Home
                </div>
                <div className={`${styles.face} ${styles.right}`}>
                    About
                </div>
                <div className={`${styles.face} ${styles.back}`}>
                    Work
                </div>
                <div className={`${styles.face} ${styles.left}`}>
                    Skills
                </div>
                <div className={`${styles.face} ${styles.top}`}>
                    Experiments
                </div>
                <div className={`${styles.face} ${styles.bottom}`}>
                    Contact
                </div>
            </div>
        </div>
    )
}