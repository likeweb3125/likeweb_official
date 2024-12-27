import { forwardRef } from "react";
import Section from "../Section";
import bgWhatWeDo from "@/assets/images/bg_what_we_do.png";

type SectionProps = {};

const WhatWeDo = forwardRef<HTMLDivElement, SectionProps>(({}, ref) => {
    return (
        <div ref={ref}>
            <Section id="what-we-do" className="bg-cover pb-[500px]" bg={bgWhatWeDo}>
                <div className="leaindg-[90px] text-[56px] font-[700] text-center w-[410] mx-auto">
                    <p className="text-[#FD5B1D] text-[24px] font-[500] leading-[28px]">라이크웹은 지금,</p>
                    <span className="text-[#FD5B1D]">고객님</span>들에게 필요한
                    <br />
                    스킬을 보유중입니다<span className="text-[#FD5B1D]">.</span>
                </div>
            </Section>
        </div>
    );
});
export default WhatWeDo;
