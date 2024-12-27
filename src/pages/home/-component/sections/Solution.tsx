import { forwardRef } from "react";
import Section from "../Section";

type SectionProps = {};

const Solution = forwardRef<HTMLDivElement, SectionProps>(({}, ref) => {
    return (
        <div ref={ref}>
            <Section id="solution">
                <p className=" leaindg-[90px] text-[56px] font-[700]">
                    맞춤형 솔루션으로
                    <br />
                    지속적인 만족을 보장합니다.
                </p>
            </Section>
        </div>
    );
});
export default Solution;
