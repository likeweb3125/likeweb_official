import { useRef, useState } from "react";
import SideNavigate from "./-component/SideNavigate";
import AboutUsMain from "./-component/sections/AboutUsMain";
import AboutUsInfo from "./-component/sections/AboutUsInfo";
import Solution from "./-component/sections/Solution";
import UiUx from "./-component/sections/UiUx";
import WhatWeDo from "./-component/sections/WhatWeDo";
import WithLikeweb from "./-component/sections/WithLikeweb";
import HoomFooter from "./-component/sections/HomeFooter";
import { useSearchParams } from "react-router";

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
    const [targetSection, setTargetSection] = useState<string[] | string | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
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
    // const clicked = searchParams.get("clicked");
    // const target = searchParams.get("target");

    const scrollTo = (sectionHeading: string[], action: string) => {
        const section = sectionHeading.includes("aboutusinfo") ? "aboutus" : sectionHeading.toString();

        const selectedRef = refs[section]; // 문자열에 따라 ref 선택
        if (selectedRef.current) {
            selectedRef?.current?.scrollIntoView({ behavior: "auto" });
        }
    };

    // 스크롤 이벤트로 페이지 전환 됐을 때 실행되는 함수
    const onToggle = (sectionHeading: string, clicked?: string) => {
        // scrollTo([sectionHeading], "TOGGLE");
        // return;

        const section = sectionHeading === "aboutusinfo" ? "aboutus" : sectionHeading;

        setSearchParams({ target: section });
    };

    return (
        <div className="container">
            {containerStyle}
            <SideNavigate targetSection={targetSection} setTargetSection={setTargetSection} scrollTo={scrollTo} />

            <AboutUsMain ref={aboutus} onToggle={onToggle} />

            {/* <AboutUsInfo ref={aboutusRef} /> */}
            <AboutUsInfo onToggle={onToggle} />

            <Solution ref={solution} onToggle={onToggle} />

            <UiUx ref={uiux} onToggle={onToggle} />

            <WhatWeDo ref={whatwedo} onToggle={onToggle} />

            <WithLikeweb ref={withlikeweb} onToggle={onToggle} />

            <HoomFooter />
        </div>
    );
}
