import { calcPosFromAngles, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { Model } from "../Animations";
import Header from "../components/header";
import { themeConfig, color } from "../public/theme";
import Grid from "../components/grid";
import Work from "../components/work";
import Contact from "../components/contact";
import Skills from "../components/skills";

const paragraph =
  "a passionate software developer looking to make an impact on the world";

function setCSSVar(property: string, color: string) {
  document.documentElement.style.setProperty(property, color);
}

export default function Home() {
  //state
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(color === "dark");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [dance, setDance] = useState(false);

  //references
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fadeOut = useRef<HTMLParagraphElement>(null);
  const fadeIn = useRef<HTMLParagraphElement>(null);
  const fadeInPara = useRef<HTMLParagraphElement>(null);

  // on-scroll handler
  const scroll = (e: any) => {
    //globals
    let canvas = document.getElementById('my-canvas');
    let paraText = document.getElementById('paragraph');

    if (canvas && paraText) {
      let scroll = scrollRef.current!.scrollTop;
      let height = canvas.offsetHeight;
      let offset = height - 2 * scroll;

      canvas.style.opacity = (offset / height).toString();
      paraText.style.opacity = (offset / height).toString();
    }
  };

  // inits height and width for background grid
  const update = () => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
      setWidth(ref.current.offsetWidth);
    }
  };

  // gets pixels from rem value
  function getPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  // dance handler
  const makeDance = () => {
    setDance(!dance);
    const elt = document.getElementById('projects')
    if (elt) {
      elt.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // mounting use effect
  useEffect(() => {
    // render components
    setMounted(true);

    // wait for components to mount and then update height/width state
    setTimeout(() => {
      update();
    }, 500);

    // fades in text / model on load
    setTimeout(() => {
      if (fadeIn.current && fadeOut.current) {
        document.getElementById("my-canvas")!.style.opacity = "1";
        fadeOut.current.addEventListener("transitionend", () =>
          fadeOut.current!.remove()
        );
        fadeOut.current.style.opacity = "0";
        setTimeout(() => {
          fadeIn.current!.style.opacity = "1";
          fadeInPara.current!.style.opacity = "1";
        }, 2000);
        setTimeout(() => {
          document.getElementById("my-canvas")!.style.transition = "opacity 0s";
          document.getElementById("paragraph")!.style.transition = "opacity 0s";
        }, 5000);
      }
    }, 2000);

    // resets grid if window is altered
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

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

  return (
    <>
      {mounted && (
        <div className={styles.container} onScroll={scroll} ref={scrollRef}>
          <Header>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg> */}
            <div className={styles.svgWrapper} onClick={makeDance}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-music-note"
                viewBox="0 0 16 16"
              >
                <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
                <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
              </svg>
            </div>
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
          <Grid height={height} width={width} />
          <div className={styles.body} ref={ref}>
            <div className={styles.intro}>
              <p ref={fadeOut}>hello world</p>
              <p style={{ opacity: "0" }} ref={fadeIn}>
                i am <span>nicky</span>
              </p>
              <p style={{ opacity: "0" }} ref={fadeInPara} id="paragraph">
                {paragraph}
              </p>
            </div>
            <Canvas
              camera={{ position: [2, 0, 12.25], fov: 15 }}
              className={styles.canvas}
              id="my-canvas"
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              {/* <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
              <pointLight intensity={2} position={[-1, 2, 3]} color="red" /> */}
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model position={[0.025, -0.9, 0]} dance={dance} />
              </Suspense>
              {/* <OrbitControls /> */}
            </Canvas>
          </div>
          <Work></Work>
          <Skills></Skills>
          <Contact></Contact>
        </div>
      )}
    </>
  );
}
