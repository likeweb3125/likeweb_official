import { forwardRef } from "react";
import Section from "../Section";
import serverHosting from "@/assets/images/server_hosting.svg";
import technical_support from "@/assets/images/technical_support.svg";
import maintenance from "@/assets/images/maintenance.svg";
import equipment from "@/assets/images/equipment.svg";
import decommissioned from "@/assets/images/decommissioned.svg";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const servicesList = [
    {
        label: "Server Hosting",
        title: "서버호스팅",
        description: `서버를 보유하고 있지 않은 고객에게 \n 안정된 서버와 네트워크를 제공합니다.`,
        img: serverHosting,
    },
    {
        label: "Technical Support",
        title: "기술지원",
        description: `다양한 경험을 바탕으로 유지보수화 \n 정기점검 등 기술을 지원합니다.`,
        img: technical_support,
    },
    {
        label: "Maintenance",
        title: "통합유지보수",
        description: `라이크웹의 전문적인 개발자를 통해 \n 공백이 없도록 요청을 접수 및 지원합니다.`,
        img: maintenance,
    },
    {
        label: "Equipment",
        title: "장비수리",
        description: `고가의 장비 수리 비용 및 다양한 운용의 \n 어려움을 해결해 드립니다.`,
        img: equipment,
    },
    {
        label: "Decommissioned",
        title: "불용장비",
        description: `기존 장비, 부품들을 친환경적으로 매입하여 \n 신뢰와 믿음을 바탕으로 도움드리겠습니다.`,
        img: decommissioned,
    },
];

const UiUx = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    return (
        <div ref={ref} id="uiux">
            <Section heading="uiux" onToggle={onToggle} className="px-0">
                <div className="text-center">
                    <h3 className="leaindg-[90px] text-[56px] font-[700]">왜 라이크웹을 선택해야 할까요?</h3>
                    <p className="text-[22px] leading-[35px] mt-[24px] mb-[69px]">
                        최상의 가치를 제공하기 위한 IT 통합 시스템 솔루션 서비스를 제공합니다.
                    </p>
                </div>

                <ul className="relative flex justify-center">
                    {servicesList.map((service, index) => {
                        const firstItem = index === 0 && `translate-x-[200%]`;
                        const secondItem = index === 1 && `translate-x-full`;
                        const fourthItem = index === 3 && `-translate-x-full`;
                        const fifthItem = index === 4 && `-translate-x-[200%]`;

                        return (
                            <li
                                key={index}
                                // className={`flex-1 ${firstItem} ${secondItem} ${fourthItem} ${fifthItem}`}
                                className={`flex-1 max-w-[350px] group transition-all overflow-hidden`}
                                style={{ zIndex: index }}
                            >
                                <div>
                                    <div className="flex flex-col items-center relative translate-y-[146px] group-hover:translate-y-0 transition-all duration-[0.5s]">
                                        <span className="text-[#FD5B1D] text-[18px] leading-[29px] mb-[4px]">{service.label}</span>
                                        <p className="text-[28px] font-[600] leading-[45px]">{service.title}</p>
                                        <p className="opacity-0 group-hover:opacity-[1] transition-all duration-[0.5s] text-center text-[#666666] text-[18px] leading-[29px] mt-[8px] mb-[24px] whitespace-pre-line">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="transition-all duration-[0.5s] translate-y-[80px] group-hover:-translate-y-0 flex">
                                        <img src={service.img} alt={service.title} width={350} />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-[160px]">
                    <h3 className="leaindg-[90px] text-[56px] font-[700] px-[220px]">
                        고객님의 비전을
                        <br />
                        현실로 만드는 힘.
                    </h3>

                    <div className=""></div>
                </div>
            </Section>
        </div>
    );
});

export default UiUx;
