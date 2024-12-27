import { useCallback, useEffect, useRef, useState } from "react";
import SideNavigate from "./-component/SideNavigate";
import Main from "./-component/sections/Main";
import AboutUs from "./-component/sections/AboutUs";
import Solution from "./-component/sections/Solution";
import UiUx from "./-component/sections/UiUx";
import WhatWeDo from "./-component/sections/WhatWeDo";
import WithLikeweb from "./-component/sections/WithLikeweb";
import { useLocation } from "react-router";

const containerStyle = (
    <style>
        {`
        .container {
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
    const [currentSection, setCurrentSection] = useState("");
    const [targetSection, setTargetSection] = useState("");
    const main = useRef<HTMLDivElement | null>(null);
    // const aboutus = useRef<HTMLDivElement | null>(null);
    const solution = useRef<HTMLDivElement | null>(null);
    const uiux = useRef<HTMLDivElement | null>(null);
    const whatwedo = useRef<HTMLDivElement | null>(null);
    const withlikeweb = useRef<HTMLDivElement | null>(null);

    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        main,
        solution,
        uiux,
        whatwedo,
        withlikeweb,
    };

    // useEffect(() => {
    //     const selectedRef = refs[targetSection]; // 문자열에 따라 ref 선택
    //     selectedRef?.current?.scrollIntoView({ behavior: "smooth" });
    // }, [targetSection]);

    // const scrollTo = async (section: string) => {
    //     // console.log("section:", section);
    //     // console.log("currentSection:", currentSection);
    //     // console.log("targetSection:", targetSection);

    //     const selectedRef = refs[section]; // 문자열에 따라 ref 선택

    //     // if (selectedRef.current) {
    //     selectedRef?.current?.scrollIntoView({ behavior: "smooth" });
    //     setTargetSection(section);
    //     // setCurrentSection(section);
    //     // }
    // };

    const onToggle = (section: string) => {
        // console.log("section:", section);
        // console.log("currentSection:", currentSection);
        // console.log("targetSection:", targetSection);
        // setCurrentSection(section);
        // setTargetSection(section);
    };

    return (
        <div className="container">
            {containerStyle}
            <SideNavigate
                activeSection={targetSection}
                setTargetSection={setTargetSection}
                // setCurrentSection={setCurrentSection}
                // scrollTo={scrollTo}
            />

            <Main ref={main} onToggle={onToggle} />

            {/* <AboutUs ref={aboutusRef} /> */}
            <AboutUs onToggle={onToggle} />

            <Solution ref={solution} onToggle={onToggle} />

            <UiUx ref={uiux} onToggle={onToggle} />

            <WhatWeDo ref={whatwedo} onToggle={onToggle} />

            <WithLikeweb ref={withlikeweb} onToggle={onToggle} />
        </div>
    );
}
