import { forwardRef, useRef } from "react";
import Section from "../Section";
import Card from "../Card";
import bgAboutUs1 from "@/assets/images/bg_aboutus_01.png";
import bgAboutUs2 from "@/assets/images/bg_aboutus_02.png";
import bgAboutUs3 from "@/assets/images/bg_aboutus_03.png";
import bgAboutUs4 from "@/assets/images/bg_aboutus_04.png";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const AboutUsInfo = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={ref} id="aboutusinfo">
            <Section
                heading="aboutusinfo"
                bg={bgAboutUs1}
                onToggle={onToggle}
                className="bg-fixed bg-no-repeat bg-cover relative flex-1 flex justify-between"
            >
                <div className="mt-[60px]">
                    <div className="sticky top-[220px]">
                        <p className="text-[#F8F9FB] leaindg-[90px] mb-[28px] text-[56px] font-[700]">
                            우리는 끊임없는
                            <br />
                            변화를 지향합니다.
                        </p>
                        <p className="text-[#DDDDDD] text-[20px] font-[400]">
                            라이크웹은 매년 지속적인 외적 성장과
                            <br /> 온라인 속 커리어 확장을 통해 성장해 나가고 있습니다.
                        </p>
                    </div>
                </div>

                <div className="gap-[100px] flex">
                    <div className="flex flex-col gap-[140px] ">
                        <Card
                            ref={card2Ref}
                            id="card-2"
                            className="mt-[260px]"
                            caption="Platform Solutions"
                            title="운영 솔루션 플랫폼"
                            value={
                                <>
                                    <b className="text-[80px] mr-[10px]">561</b>개
                                </>
                            }
                            description={
                                <>
                                    최적화된 솔루션 플랫폼으로 고객의 비즈니스 성장을 지원하며, 다양한 업종에 맞춘 플랫폼을 통해 안정적이고
                                    유연한 운영을 제공합니다.
                                </>
                            }
                        />

                        <Card
                            ref={card4Ref}
                            id="card-4"
                            caption="Project Completion"
                            title="프로젝트 완료"
                            value={
                                <>
                                    <b className="text-[80px] mr-[10px]">2,000</b>+
                                </>
                            }
                            description={
                                <>
                                    누적 2,000 여건 이상의 프로젝트를
                                    <br /> 성공적으로 완료하며, 고객 만족을 최우선으로 <br />
                                    하고 있습니다.
                                </>
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-[140px]">
                        <Card
                            ref={card1Ref}
                            id="card-1"
                            className="items-baseline"
                            isActive={true}
                            caption="Business Experience"
                            title="사업경력"
                            value={
                                <>
                                    <b className="text-[80px] mr-[10px]">20</b>년
                                </>
                            }
                            description={
                                <>
                                    20년 이상의 경험을 쌓은 노하우로,
                                    <br /> 끊임없이 디지털 혁신을 선도하고 있습니다.
                                    <br />
                                    지속적인 발전을 통해 업계를 이끌어 나갑니다.
                                </>
                            }
                        />

                        <Card
                            ref={card3Ref}
                            id="card-3"
                            caption="Server Uptime"
                            title="서버운영시간"
                            value={
                                <>
                                    <b className="text-[80px] mr-[10px]">99.9</b>%
                                </>
                            }
                            description={
                                <>
                                    99.9%의 서버 가동률을 자랑하며, <br />
                                    안정적인 서비스 제공을 보장합니다.
                                </>
                            }
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
});

export default AboutUsInfo;
