/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                bounce: {
                    "0%, 100%": { transform: "translateY(-50%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
                    "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
                },
                "fill-bg": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "slide-down-slow-01": {
                    "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "linear" },
                    "50%": { transform: "translateY(-1000px)", animationTimingFunction: "linear" },
                },
                "slide-down-slow-02": {
                    "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "linear" },
                    "50%": { transform: "translateY(-500px)", animationTimingFunction: "linear" },
                },
                "slide-up-fast-01": {
                    "0%, 100%": { transform: "translateY(-1500px)", animationTimingFunction: "linear" },
                    "50%": { transform: "translateY(0)", animationTimingFunction: "linear" },
                },
                "slide-up-fast-02": {
                    "0%, 100%": { transform: "translateY(-1200px)", animationTimingFunction: "linear" },
                    "50%": { transform: "translateY(0)", animationTimingFunction: "linear" },
                },
            },
            animation: {
                "fill-bg": "fill-bg 1s infinite",
                "slide-down-slow-01": "slide-down-slow-01 20s infinite",
                "slide-down-slow-02": "slide-down-slow-02 25s infinite",
                "slide-up-fast-01": "slide-up-fast-01 25s infinite",
                "slide-up-fast-02": "slide-up-fast-02 22s infinite",
            },
        },
        fontFamily: {
            Urbanist: ["Urbanist"],
            Pretendard: ["Pretendard"],
        },
    },
    plugins: [],
};
