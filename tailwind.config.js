/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",

    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#ffffff",
            secondary: "#2b2b2b ",
            gray: "rgba(0,0,0,.5)",
            green: "#03a87c",
            greenbg: "rgba(3, 168, 124, 0.11)",
        },
        fontFamily: {
            blog: ["Merriweather"],
            sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans"],
            header: ["lora", "serif"],
            dm: ["DM Serif Text"],
            georgia: "Georgia",
            posttitle: "Lora",
            cursive: "Cedarville",
            roboto:"roboto",
            lato:"lato"
        
        },
        fontSize: {
            blog: "1.4rem",
            cardtitle: "2rem",
            cardforeword: "1.24em",
            populartitle: "1.3em",
            verticletitle: "1.5em",
            verticleforeword: "1rem",
            horiztitle: "1.1em",
            horizbigtitle: "1.55em",
            horizforeword: "1rem",
            author: "0.75rem",
            posttitle: "2.5rem",
        },
    },
};
