/* 
Flickering solution for SSR
Source: https://github.com/vercel/next.js/discussions/12533 from
this article: https://blog.maximeheckel.com/posts/switching-off-the-lights-part-2-fixing-dark-mode-flashing-on-servered-rendered-website/
*/

var themeConfig = {
    dark: {
    "--backgroundColor": "#000",
    "--fontColor": "#fff",
    },
    light: {
    "--backgroundColor": "#fff",
    "--fontColor": "#000",
    },
};

function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color);
}

function changeTheme(inputTheme) {
    if (inputTheme === "dark") {
        const theme = themeConfig.dark;
        for (let key in theme) {
            setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
} else {
        const theme = themeConfig.light;
        for (let key in theme) {
            setCSSVar(key, theme[key]);
        }
        localStorage.setItem("theme", inputTheme);
  }
}


(function () {
    var currentTheme;
  
    try {
        currentTheme = localStorage.getItem("theme") /* Priority given to local storage before check to OS preferences */
        if (!currentTheme) currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        changeTheme(currentTheme);
    } catch (err) {
        console.log(new Error("accessing theme has been denied"));
    }
  })();

try {
    module.exports = themeConfig
} catch (err) {} /* Not a real error */