import { useEffect, useRef, useState } from "react";
import Contact from "../components/contact"
import Grid from "../components/grid";
import Header from "../components/header"
import SkillsUnit from "../components/skillsUnit";
import { color, themeConfig } from "../public/theme";
import styles from "../styles/Page.module.css"

const personas = {
    name: "personas",
    skills: ['HTML', 'CSS', 'Figma']
}

const Personas = () => {
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
                                href="https://github.com/lazytortoise905/personas"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                            <a
                                href="https://lazytortoise905.github.io/personas/"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                            </a>
                        </div>
                        <img src="/images/personas/interface.png" className={styles.centered}/>
                        <div className={styles.header}>
                            Context
                        </div>
                        <p className={styles.topless}>
                            The goal of this projects is to create two <strong>personas</strong> for users of this Coca Cola machine.
                        </p>
                        <p>
                        This machine is able to efficiently provide students with access to many types of soft drinks without taking up a
                         ridiculous amount of space. As a result, it provides dining halls an easy way to give students many options without 
                         allocating a ton of space or money to many types of machines. It works by mxing the syrups for a wide variety of drinks 
                         with the same standard soda or water base. There is a screen which provides a touch interface for users to select their 
                         drinks or even filter the type of drinks displayed. There is also a lever which is triggered by pushing a cup into it which 
                         dispenses the selected drink. There is also another lever which is triggered in a similar fashion to dispense ice. Lastly, 
                         users are able to pour their drinks into the drain which keeps the immediate surrounding surface cleaner than if spills were 
                         just poured onto the countertop.
                        </p>
                        <p>
                            <strong>Through observations, I will create two types of typical users for this machine</strong>
                        </p>
                        <div className={styles.header}>
                            Research
                        </div>
                        <p className={styles.topless}>
                            I conducted interviews on five users.
                        </p>
                        <p>
                            <li>
                                <strong>Do you like this interface?</strong>
                            </li>
                            <p>
                                The first student I talked to expressed mostly distaste for the interface: 
                                "It is annoying to navigate and can be really laggy," he said. The second 
                                student expressed her distaste with the availability of the drinks - denoted 
                                by greyed out circles on the screen: "Most of the drinks are usually not full," 
                                she said. The third student expressed that he did not really have any opinion on it.
                            </p>
                            <li>
                                <strong>Would you change, add, or remove anything from this interface? You can say no if you cannot think of anything.</strong>
                            </li>
                            <p>
                                The first student noted that he would prefer a different organizational structure as the circles did not make much sense to him and 
                                the next two did not have any significant comments.
                            </p>
                            <li>
                                <strong>The first student noted that he would prefer a different organizational structure as the circles did not make much sense to him and the next two did not have any significant comments.</strong>
                            </li>
                            <p>
                            Two of the students shared that they would revert to another alternative, such as the water or milk.
                            </p>
                            <li>
                                <strong>Do you always get the same drink?</strong>
                            </li>
                            <p>
                                Every student shared that they usually select between 1-2 sodas or water.
                            </p>
                        </p>
                        <p>
                            After conducting a few interviews and observing a plethora of students I was able to create two character archetypes.
                        </p>
                        <p>
                            Patient Peter is a complacent user - someone who waits in a line for an inefficient machine when others would not. This 
                            persona represents some of the users I interviewed who expressed a "this is fine" attitude towards this interface. The machine works, 
                            sometimes; but it works well enough to make users like patient peter accept the reality of the situation.
                        </p>
                        <img src="/images/personas/iman.png" className={styles.centered}/>
                        <p>
                        Impatient Iman is a non-complacent user - someone who will simply find alternative options rather than waste her time waiting in line for a machine that, 
                        albeit does contain more options, is slow and annoying to use. This persona represents some of the users I interviewed who expressed that when there is a 
                        line they will simply go get milk or water.
                        </p>
                        <img src="/images/personas_main.png" className={styles.centered}/>
                        <p className={styles.bottomless}>
                            <strong>I liked these archetypes a lot, and decided to select patient peter for a storyboard!</strong>
                        </p>
                        <div className={styles.header}>
                            Design Iterations
                        </div>
                        <img src="/images/personas/story.png" className={styles.centered}/>
                        <p className={styles.bottomless}>
                            This storyboard follows <strong>Patient Peter</strong> across his journey to get a drink from the machine!
                        </p>
                        <div className={styles.header}>
                            Lessons
                        </div>
                        <p className={styles.topless}>
                            <li>
                                Figma templates are really <strong>aesthetic</strong>
                            </li>
                            <li>
                                In the future I would have selected an interface with more variety of use.
                            </li>
                        </p>
                        <div className={styles.header}>
                            Skills
                        </div>
                        <div className={styles.start}>
                            <SkillsUnit name={personas.name} skills={personas.skills}></SkillsUnit>
                        </div>
                        <br></br>
                    </div>
                    <Contact></Contact>
                </div>
            }
        </>
    )
}

export default Personas