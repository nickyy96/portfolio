import { useEffect, useRef, useState } from "react";
import Contact from "../components/contact"
import Grid from "../components/grid";
import Header from "../components/header"
import SkillsUnit from "../components/skillsUnit";
import { color, themeConfig } from "../public/theme";
import styles from "../styles/Page.module.css"

const wordle = {
    name: "wordle",
    skills: ['Node.js', 'ReactJS', 'Typescript', 'SASS', 'CSS']
}

const Wordle = () => {
    // state
    const [dark, setDark] = useState(color === "dark");
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [mounted, setMounted] = useState(false);

    // refs
    const ref = useRef<HTMLDivElement>(null);
    
    function setCSSVar(property: string, color: string) {
        document.documentElement.style.setProperty(property, color);
    }

    // change themes and updates local storage
    function changeTheme() {
        setDark(!dark);
        const current = localStorage.getItem("theme");
        if (current !== "dark") {
        const theme = themeConfig.dark;
        for (let key in theme) {
            setCSSVar(key, theme[key as keyof typeof theme]);
        }
        localStorage.setItem("theme", "dark");
        } else {
        const theme = themeConfig.light;
        for (let key in theme) {
            setCSSVar(key, theme[key as keyof typeof theme]);
        }
        localStorage.setItem("theme", "light");
        }
    }

    // inits height and width for background grid
    const update = () => {
        if (ref.current) {
        setHeight(ref.current.offsetHeight);
        setWidth(ref.current.offsetWidth);
        }
    };

    // mounting use effect
    useEffect(() => {
        setMounted(true)


        // wait for components to mount and then update height/width state
        setTimeout(() => {
        update();
        }, 500);

        // resets grid if window is altered
        window.addEventListener("resize", update);
        return () => {
        window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <>
            {mounted && 
                <div className={styles.container} ref={ref}>
                    <Header>
                        <div className={styles.svgWrapper} onClick={changeTheme}>
                        {dark ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-brightness-high-fill"
                            viewBox="0 0 16 16"
                            >
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-moon-fill"
                            viewBox="0 0 16 16"
                            >
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                            </svg>
                        )}
                        </div>
                    </Header>
                    <Grid height={height} width={width}></Grid>
                    <div className={styles.body}>
                        <div className={styles.topheader}>
                            <a
                                href="https://github.com/nickyy96/Wordle"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://wordle.nickyyarnall.dev/"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                            </a>
                        </div>
                        <a
                            href="https://wordle.nickyyarnall.dev/"
                            target="_blank"
                        >
                            {dark ? 
                                <img src="/images/wordle_dark.png" className={styles.centered}/> :
                                <img src="/images/wordle_light.png" className={styles.centered}/>
                            }
                        </a>
                        <div className={styles.header}>
                            Context
                        </div>
                        <p>
                            In July of 2022, I set out to clone the popular app <strong>Wordle</strong> for a couple reasons: I wanted to
                            improve my web development skills in a modern frontend stack, see if I could make a better application, and
                            because I knew the result would be sick!
                        </p>
                        <div className={styles.header}>
                            Design Iterations
                        </div>
                        <p className={styles.topless}>
                            I added a new visualization for the victory screen which allows users to more clearly understand
                            how they are performing compared with the older version. Additionally, it is far more interactive.
                        </p>
                        <p>
                            Next, I added an animation for errors so that invalid words are clearly visualized.
                            I also added a label to depict the hard mode of Wordle, a feature I always wished wordle had. Finally, keyboard animations that highlight
                            the user's keys are included.
                        </p>
                        <div className={styles.row}> 
                            {dark ? 
                                <img src="/images/wordle_win_dark.png" className={styles.smaller}/> :
                                <img src="/images/wordle_win_light.png" className={styles.smaller}/>
                            }
                            {dark ? 
                                <img src="/images/wordle_error_dark.png" className={styles.smaller}/> :
                                <img src="/images/wordle_error_light.png" className={styles.smaller}/>
                            }
                        </div>
                        {/* <div className={styles.header}>
                            Lessons
                        </div>
                        <p className={styles.topless}>
                            <li>
                                <strong>Local storage</strong> is a really quick way to make a far more performative application
                            </li>
                            <li>
                                <strong>useRef</strong> persists between renders which can be really useful
                            </li>
                            <li>
                                Always style in css using <strong>rem values</strong> or resizeability will be a nightmare
                            </li>
                            <li>
                                It is vital to check if every Javascript/CSS tool being used works on every browser
                            </li>
                            <li>
                                Finishing a big web project is an amazing feeling!
                            </li>
                        </p> */}
                        <div className={styles.header}>
                            Skills
                        </div>
                        <div className={styles.start}>
                            <SkillsUnit name={wordle.name} skills={wordle.skills}></SkillsUnit>
                        </div>
                        <div className={styles.spacer}/>
                    </div>
                    <Contact></Contact>
                </div>
            }
        </>
    )
}

export default Wordle