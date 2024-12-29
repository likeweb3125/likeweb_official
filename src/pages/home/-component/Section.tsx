import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
    heading: string;
    bg?: string;
    className?: string;
    children: ReactNode;
    onToggle?: (el?: string, clicked?: string) => void;
    tag?: keyof JSX.IntrinsicElements; // HTML 태그 타입을 지정
};

export default function Section({ heading, bg, className, children, onToggle, tag = "section" }: SectionProps) {
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    // React.createElement를 사용하여 동적으로 태그 생성
    const Wrapper = tag;

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            {
                autoAlpha: 0,
                y: -40,
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: headingRef.current,
                    start: "top 60%",
                    end: "bottom 0%",
                    // start: "top 50%",
                    // end: "bottom 10%",
                    toggleActions: "Play none restart reverse",
                    onToggle: self => {
                        if (self.isActive) {
                            onToggle && onToggle(self.trigger?.innerHTML);
                        }
                    },
                    // onToggle: self => console.log("toggled, self:", self.trigger?.innerHTML),
                    // onToggle: self => console.log("toggled, isActive:", self.isActive),
                    // onUpdate: self => {
                    //     console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
                    // },
                    markers: true,
                },
            },
        );
    }, []);

    const setctionStyle = twMerge(`px-[220px] py-[160px] min-h-screen snap-center`, className);

    return (
        <Wrapper className={setctionStyle} style={{ backgroundImage: `url(${bg})` }}>
            {/* {!tag && ( */}
            <h2 className="indent-[-9999em] h-0 w-0 absolute" ref={headingRef}>
                {heading}
            </h2>
            {/* )} */}

            {children}
        </Wrapper>
    );
}
