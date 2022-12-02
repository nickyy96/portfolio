import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Model } from "../Animations";
import Header from "../components/header";
import useDarkMode from "../hooks/darkMode";
import themeConfig from "../public/theme";

function setCSSVar(property: string, color: string) {
  document.documentElement.style.setProperty(property, color);
}

function changeTheme() {
  const current = localStorage.getItem('theme')
  if (current !== 'dark') {
      const theme = themeConfig.dark;
      for (let key in theme) {
          setCSSVar(key, theme[key as keyof typeof theme]);
      }
      localStorage.setItem("theme", 'dark');
} else {
      const theme = themeConfig.light;
      for (let key in theme) {
          setCSSVar(key, theme[key as keyof typeof theme]);
      }
      localStorage.setItem("theme", 'light');
}
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  return (
    <div className={styles.container}>
      <Header></Header>
      <button onClick={changeTheme}></button>
      <br></br>
      {/* <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        className={styles.canvas}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[-1, 2, 3]} color="red" />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas> */}
    </div>
  );
}
