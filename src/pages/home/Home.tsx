import { createContext, useContext, useEffect, useRef, useState } from "react";
import SideNavigate from "./-component/SideNavigate";
import AboutUsMain from "./-component/sections/AboutUsMain";
import AboutUsInfo from "./-component/sections/AboutUsInfo";
import Solution from "./-component/sections/Solution";
import UiUx from "./-component/sections/UiUx";
import WhatWeDo from "./-component/sections/WhatWeDo";
import WithLikeweb from "./-component/sections/WithLikeweb";
import HoomFooter from "./-component/sections/HomeFooter";

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

const SectionContext = createContext<any | undefined>(undefined);

export const useFullPageSection = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error("useComplaint must be used within a ComplaintProvider");
    }
    return context;
};

export default function Home() {
    const [currentSection, setCurrentSection] = useState<string[] | string>("aboutus");
    const [clicked, setClicked] = useState<string | null>(null);
    // const aboutusmain = useRef<HTMLDivElement | null>(null);
    const aboutus = useRef<HTMLDivElement | null>(null);
    const solution = useRef<HTMLDivElement | null>(null);
    const uiux = useRef<HTMLDivElement | null>(null);
    const whatwedo = useRef<HTMLDivElement | null>(null);
    const withlikeweb = useRef<HTMLDivElement | null>(null);

    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
        aboutus,
        solution,
        uiux,
        whatwedo,
        withlikeweb,
    };

    const scrollTo = (sectionHeading: string[]) => {
        const section = sectionHeading.includes("aboutusinfo") ? "aboutus" : sectionHeading.toString();
        const selectedRef = refs[section]; // 문자열에 따라 ref 선택
        if (selectedRef.current) {
            selectedRef?.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (clicked === currentSection) {
            setClicked(null);
        }
    }, [clicked, currentSection]);

    return (
        <SectionContext.Provider value={{ currentSection, setCurrentSection, clicked, setClicked }}>
            <div className="container">
                {containerStyle}
                <SideNavigate scrollTo={scrollTo} />
                <AboutUsMain ref={aboutus} />
                <AboutUsInfo />
                <Solution ref={solution} />
                <UiUx ref={uiux} />
                <WhatWeDo ref={whatwedo} />
                <WithLikeweb ref={withlikeweb} />
                <HoomFooter />
            </div>
        </SectionContext.Provider>
    );
}
