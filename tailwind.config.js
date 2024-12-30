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
            },
            animation: {
                "fill-bg": "fill-bg 1s infinite",
            },
        },
        fontFamily: {
            Urbanist: ["Urbanist"],
            Pretendard: ["Pretendard"],
        },
    },
    plugins: [],
};
