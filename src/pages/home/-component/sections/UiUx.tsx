import { forwardRef } from "react";
import Section from "../Section";

type SectionProps = {};

const UiUx = forwardRef<HTMLDivElement, SectionProps>(({}, ref) => {
    return (
        <div ref={ref}>
            <Section id="uiux">
                <p className=" leaindg-[90px] text-[56px] font-[700]">
                    고객님의 비전을
                    <br />
                    현실로 만드는 힘.
                </p>
            </Section>
        </div>
    );
});

export default UiUx;
