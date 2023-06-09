import { useEffect, useRef, useState } from "react";
import Contact from "../components/contact"
import Grid from "../components/grid";
import Header from "../components/header"
import SkillsUnit from "../components/skillsUnit";
import { color, themeConfig } from "../public/theme";
import styles from "../styles/Page.module.css"

const styletransfer = {
    name: "style transfer",
    skills: ['Node.js', 'Python', 'Tensorflow', 'ReactJS', 'CSS', 'Git', 'Conda', 'TypeScript', 'JavaScript']
}

const Styletransfer = () => {
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
                        <div className={styles.topheaderStyle}>
                            <a
                                href="https://github.com/nickyy96/sequence-stylizers#readme"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                        <a
                            href="https://github.com/nickyy96/sequence-stylizers#readme"
                            target="_blank"
                        >
                            <img src="/images/style_transfer.png" className={styles.centered}/>
                        </a>
                        <div className={styles.header}>
                            Context
                        </div>
                        <p>
                            In the Spring of 2023, I designed an application for users to <strong>transfer the style</strong> of a target image onto a base photo or video.
                            This was a really fun idea because most of the existing literature around this type of generative machine learning did not leverage a frontend to provide
                            readers a hands-on experience with this state of the art technology. By utilizing the convolutional layers of ImageNet's VGG19 network in addition to the Gram
                            matrix to extract style, I was able to derive an AI model which can train an image or video to maintain its content while taking the style of the input. 
                        </p>
                        <p> 
                            <strong>NOTE</strong>: This application is not deployed due to how computationally expensive the model training would be on a backend server - to use this 
                            application click the Github link and follow the instruction in the <strong>README</strong>!
                        </p>
                        <div className={styles.header}>
                            Design Iterations
                        </div>
                        <p className={styles.topless}>
                            This application includes a file upload system which validates the uploads are of the correct type within the backend API handler (two photos or 
                            one photo and one video). Once the files have been succesfully uploaded, the thumbnails become outlined in green and the <strong>transfer</strong> button
                            activates which signals to the user that they can begin the style transfer.
                        </p>
                        <p>
                            Once the style transfer is complete, the application also provides an easy way for the user to download the new output, whether that be a video or an image. 
                        </p>
                        <p>
                            <strong>NOTE</strong>: this will take a very long amount of time (depending on your machine and settings it could take nearly 20 minutes per frame).
                        </p>
                        <div className={styles.row}> 
                            <img src="/images/style_transfer_file.png" className={styles.smaller}/>
                            <img src="/images/style_transfer_output.png" className={styles.smaller}/> 
                        </div>
                        <div className={styles.header}>
                            Sample Output
                        </div>
                        <p className={styles.topless}>
                            Here are some examples of images that have been converted via this application! (Last Supper and a Temple)
                        </p>
                        <div className={styles.row}> 
                            <img src="/images/style_transfer_1.png" className={styles.smaller}/>
                            <img src="/images/style_transfer_2.png" className={styles.smaller}/> 
                        </div>
                        <div className={styles.header}>
                            Skills
                        </div>
                        <div className={styles.start}>
                            <SkillsUnit name={styletransfer.name} skills={styletransfer.skills}></SkillsUnit>
                        </div>
                        <div className={styles.spacer}/>
                    </div>
                    <Contact></Contact>
                </div>
            }
        </>
    )
}

export default Styletransfer