import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
    id: string;
    bg?: string;
    className?: string;
    children: ReactNode;
    onToggle?: (el?: string) => void;
};

export default function Section({ id, bg, className, children, onToggle }: SectionProps) {
    const headingRef = useRef<HTMLHeadingElement | null>(null);

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
                    toggleActions: "Play none restart reverse",
                    onToggle: self => {
                        console.log(self);
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
        <section id={id} className={setctionStyle} style={{ backgroundImage: `url(${bg})` }}>
            <h2 className="indent-[-9999em] h-0 w-0 absolute" ref={headingRef}>
                {id}
            </h2>
            {children}
        </section>
    );
}
