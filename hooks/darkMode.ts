import { Dispatch, SetStateAction, useEffect, useState } from "react";
import themeConfig from "../public/theme.js";

function setCSSVar(property: string, color: string) {
    document.documentElement.style.setProperty(property, color);
}

function changeTheme(inputTheme: boolean) {
    if (inputTheme) {
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

const useDarkMode = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        changeTheme(darkMode)
        console.log(darkMode, 'here')
    }, [])

    return [darkMode, setDarkMode]
}

export default useDarkMode