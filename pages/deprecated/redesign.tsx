import { useEffect, useRef, useState } from "react";
import Contact from "../../components/contact"
import Grid from "../../components/grid";
import Header from "../../components/header"
import SkillsUnit from "../../components/skillsUnit";
import { color, themeConfig } from "../../public/theme";
import styles from "../styles/Page.module.css"

const resdesign = {
    name: "redesign",
    skills: ['HTML', 'CSS']
}

const Redesign = () => {
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
                        <div className={styles.topheaderRed}>
                            <a
                                href="https://github.com/lazytortoise905/redesign"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://lazytortoise905.github.io/beacon-inn-redesign/"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                            </a>
                        </div>
                        <img src="/images/redesign_main.png" className={styles.centered}/>
                        <div className={styles.header}>
                            Context
                        </div>
                        <p className={styles.topless}>
                            The goal of this project was to redesign an existing website to better fit the needs of their potential users. This was an excellent
                            opportunity to improve my <strong>design, css, </strong> and <strong>html</strong> skills.
                        </p>
                        <img src="/images/redesign/beacon_og.png" className={styles.centered}/>
                        <p>
                            The website is not easy to learn because it is not intuitive. Why is there a "rooms" page and a "reservations" page? Users who are looking to 
                            quickly make a reservation will not immediately understand why both of those pages are necessary. This functionality should be front and center on 
                            the home page. It appears as though the rooms page is meant to be a display of the available rooms and the reservations page is designed for users to 
                            actually book them, but their functionality overlaps far too much. This website would be much easier to follow if the home page was where users could being booking rooms. 
                            The small section for booking on the bottom of the home page does not show any information other than a calendar, and there is somehow exposed html code below the form. 
                            The about us page is also very confusing because there is so much content below the main picture in the original site which seems like it is the about us page; but there is another page with even more text. 
                            This is confusing.
                        </p>
                        <p>
                            <strong>Clearly some things to be changed.</strong>
                        </p>
                        <div className={styles.header}>
                            Research
                        </div>
                        <p className={styles.topless}>
                            I sought out to design a new website that fixed many of these issues.
                        </p>
                        <img src="/images/redesign/low-fi-desk-1.png" className={styles.centered}/>
                        <br></br>
                        <div className={styles.row}> 
                            <img src="/images/redesign/low-fi-mobile.png" className={styles.smaller}/>
                            <img src="/images/redesign/low-fi-tablet-2.png" className={styles.smaller}/>
                        </div>
                        <p>
                            I liked these designs a lot, and they removed a lot of the overarching issues.
                            Additionally, I saw a serious compatability with this new site and a mobile screen,
                            something that the current site really whiffed on.
                        </p>
                        <p>
                            <strong>Next, I had to consider what sort of high fidelity styling would really make this site pop.</strong>
                        </p>
                        <p className={styles.bottomless}>
                            Next, I added an animation for errors so that it is clearer the word is being denied. Additionally,
                            I added a label to depict the hard mode of Wordle. Finally, keyboard animations that highlight
                            the user's keys are included.
                        </p>
                        <div className={styles.header}>
                            Design Iterations
                        </div>
                        <img src="/images/redesign/style-guide.png" className={styles.centered}/>
                        <p>
                            This style guide really pulled the vision into reality, and I was confident I had found
                            a mellow but informative combination of elements and colors perfect for an antique hotel.
                        </p>
                        <p className={styles.bottomless}>
                            <a href="https://lazytortoise905.github.io/beacon-inn-redesign/" target="_blank"><strong>Final Site</strong></a>
                        </p>
                        <div className={styles.header}>
                            Lessons
                        </div>
                        <p className={styles.topless}>
                            <li>
                                The textual information presented in mobile screens needs to be <strong>limited</strong>
                            </li>
                            <li>
                                Media queries are extremely <strong>vital</strong> to resizeability
                            </li>
                            <li>
                                Reusing css classes is <strong>key</strong>
                            </li>
                        </p>
                        <div className={styles.header}>
                            Skills
                        </div>
                        <div className={styles.start}>
                            <SkillsUnit name={resdesign.name} skills={resdesign.skills}></SkillsUnit>
                        </div>
                        <br></br>
                    </div>
                    <Contact></Contact>
                </div>
            }
        </>
    )
}

export default Redesign