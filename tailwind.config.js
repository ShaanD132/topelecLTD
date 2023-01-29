module.exports = {
    content: [
        "./pages/**/*.{tsx,jsx,js,ts}",
        "./components/**/*.{js,ts,tsx,jsx}"
    ],
    theme: {
        letterSpacing: {
            tight: "-0.15em"
        },
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            lg: "1.125rem",
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
            "cu": "1.245rem",
            "name": "1.45rem"
        },
        extend: {
            height: {
                "skills": "90vh",
                "card1": "420px",
                "card2": "380px",
                "card3": "300px"
            },
            colors: {
                "red": "#DE1A1A",
                "alt-black": "#0A0A0A",
                "main-yellow": "#fabc37",
                "blu": "#247BA0"
            },
        }
    },
    plugins :[]
}