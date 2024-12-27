import { forwardRef } from "react";
import Section from "../Section";

type SectionProps = {};

const WithLikeweb = forwardRef<HTMLDivElement, SectionProps>(({}, ref) => {
    return (
        <div ref={ref}>
            <Section id="with-likeweb">
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
