import { forwardRef } from "react";
import Section from "../Section";
import Footer from "@/components/layout/Footer";

type SectionProps = {
    onToggle?: (section: any) => void;
    topElement: any;
};

const HoomFooter = forwardRef<HTMLDivElement, SectionProps>(({ onToggle, topElement }, ref) => {
    return (
        <div ref={ref}>
            <Section heading="footer" onToggle={onToggle} tag="div" className="p-0 flex">
                <Footer className="mt-auto min-w-full" topElement={topElement} />
            </Section>
        </div>
    );
});
export default HoomFooter;
