import { forwardRef } from "react";
import Section from "../Section";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const UiUx = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    return (
        <div ref={ref} id="uiux">
            <Section heading="uiux" onToggle={onToggle}>
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
