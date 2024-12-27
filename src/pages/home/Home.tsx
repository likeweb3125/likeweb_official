import { useRef } from "react";
import SideNavigate from "./-component/SideNavigate";
import Main from "./-component/sections/Main";
import AboutUs from "./-component/sections/AboutUs";
import Solution from "./-component/sections/Solution";
import UiUx from "./-component/sections/UiUx";
import WhatWeDo from "./-component/sections/WhatWeDo";
import WithLikeweb from "./-component/sections/WithLikeweb";

const containerStyle = (
    <style>
        {`.container {
            position: relative;
            overflow-y: auto;
            overscroll-behavior-y: contain;
            scroll-snap-type: y mandatory;
            height: 100vh;
            min-width: 100%;
            -ms-overflow-style: none;
            scrollbar-width: none;
            &::-webkit-scrollbar {
            display: none
            }
        }`}
    </style>
);
export default function Home() {
    const mainRef = useRef<HTMLDivElement | null>(null);
    // const aboutusRef = useRef<HTMLDivElement | null>(null);
    const soultionRef = useRef<HTMLDivElement | null>(null);
    const uiuxRef = useRef<HTMLDivElement | null>(null);
    const whatwedoRef = useRef<HTMLDivElement | null>(null);
    const withlikewebRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="container">
            {containerStyle}
            <SideNavigate />

            <Main ref={mainRef} />

            {/* <AboutUs ref={aboutusRef} /> */}
            <AboutUs />

            <Solution ref={soultionRef} />

            <UiUx ref={uiuxRef} />

            <WhatWeDo ref={whatwedoRef} />

            <WithLikeweb ref={withlikewebRef} />
        </div>
    );
}
