import { forwardRef } from "react";
import Section from "../Section";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const WithLikeweb = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    return (
        <div ref={ref} id="withlikeweb">
            <Section heading="withlikeweb" onToggle={onToggle}>
                <p className="leaindg-[90px] text-[56px] font-[700] text-center w-[410] mx-auto">
                    새로운 가치를 위해
                    <br />
                    함께하세요.
                </p>
            </Section>
        </div>
    );
});

export default WithLikeweb;
