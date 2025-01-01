import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Section from "../Section";
import serverHosting from "@/assets/images/server_hosting.svg";
import technical_support from "@/assets/images/technical_support.svg";
import maintenance from "@/assets/images/maintenance.svg";
import equipment from "@/assets/images/equipment.svg";
import decommissioned from "@/assets/images/decommissioned.svg";
import arrowWhite from "@/assets/images/arrow_outward_white.svg";

import slideBg01 from "@/assets/images/work_slide01.png";
import slideBg02 from "@/assets/images/work_slide02.png";
import slideBg03 from "@/assets/images/work_slide03.png";
import slideBg04 from "@/assets/images/work_slide04.png";
import slideBg05 from "@/assets/images/work_slide05.png";
import slideBg06 from "@/assets/images/work_slide06.png";
import slideBg07 from "@/assets/images/work_slide07.png";
import slideBg08 from "@/assets/images/work_slide08.png";
import slideBg09 from "@/assets/images/work_slide09.png";
import slideBg10 from "@/assets/images/work_slide10.png";
import slideBg11 from "@/assets/images/work_slide11.png";
import slideBg12 from "@/assets/images/work_slide12.png";

import slideImage01 from "@/assets/images/work_slide_img_01.svg";
import slideImage02 from "@/assets/images/work_slide_img_02.svg";
import slideImage03 from "@/assets/images/work_slide_img_03.svg";
import slideImage04 from "@/assets/images/work_slide_img_04.svg";
import slideImage05 from "@/assets/images/work_slide_img_05.svg";
import slideImage06 from "@/assets/images/work_slide_img_06.svg";
import slideImage07 from "@/assets/images/work_slide_img_07.svg";
import slideImage08 from "@/assets/images/work_slide_img_08.svg";
import slideImage09 from "@/assets/images/work_slide_img_09.svg";
import slideImage10 from "@/assets/images/work_slide_img_10.svg";
import slideImage11 from "@/assets/images/work_slide_img_11.svg";
import slideImage12 from "@/assets/images/work_slide_img_12.svg";

// Import Swiper styles
import "@/assets/css/swiper.css";
import "@/assets/css/swiper-bundle.min.css";

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
const slidesList = [
    {
        projectName: "클리니어 빌딩",
        projectDescription: "임대인들을 위한 빌딩관리 솔루션 앱",
        date: "2024.11",
        bg: slideBg01,
        img: slideImage01,
    },
    {
        projectName: "일신택배 담당기사 앱",
        projectDescription: "택배 담당기사 큐알 스캔 및 운송장 상태 변경, 위치 안내",
        date: "2024.10",
        bg: slideBg02,
        img: slideImage02,
    },
    {
        projectName: "구리청과 경매",
        projectDescription: "농수산물 경매 시스템 앱",
        date: "2023.04",
        bg: slideBg03,
        img: slideImage03,
    },
    {
        projectName: "일신택배 사용자 앱",
        projectDescription: "사용자를 위한 택배 운송장 실시간 조회 및 접수",
        date: "2024.10",
        bg: slideBg04,
        img: slideImage04,
    },
    {
        projectName: "블루페이",
        projectDescription: "셀프 세탁 결제 및 이용, 포인트 충전",
        date: "2024.09",
        bg: slideBg05,
        img: slideImage05,
    },
    {
        projectName: "퀵오스크",
        projectDescription: "키오스크 예약 및 결제, 조회",
        date: "2024.09",
        bg: slideBg06,
        img: slideImage06,
    },
    {
        projectName: "메신저",
        projectDescription: "메신저, 단체 대화, 통화 기능",
        date: "2024.11",
        bg: slideBg07,
        img: slideImage07,
    },
    {
        projectName: "다날 쇼핑몰",
        projectDescription: "다날 페이코인 쇼핑몰",
        date: "2024.09",
        bg: slideBg08,
        img: slideImage08,
    },
    {
        projectName: "더사주",
        projectDescription: "다양한 운세 상담 및 커뮤니티 앱",
        date: "2024.09",
        bg: slideBg09,
        img: slideImage09,
    },
    {
        projectName: "페이코인 운세",
        projectDescription: "다날 페이코인 운세 및 사주, 타로 등",
        date: "2024.09",
        bg: slideBg10,
        img: slideImage10,
    },
    {
        projectName: "수선하우스",
        projectDescription: "수선 예약 및 결제, 상태 조회 앱",
        date: "2024.09",
        bg: slideBg11,
        img: slideImage11,
    },
    {
        projectName: "모자이카",
        projectDescription: "자동차 렌트 및 커뮤니티 앱",
        date: "2024.09",
        bg: slideBg12,
        img: slideImage12,
    },
];
const slideStyles = `
    [&_.swiper-slide>div]:opacity-[0.4] 
    [&_.swiper-slide>div]:duration-[0.5s] 
    [&_.swiper-slide-active>div]:!opacity-[1] 
    [&_.swiper-slide_img]:translate-y-full 
    [&_.swiper-slide_*]:transition-all 
    [&_.swiper-slide_*]:duration-[1s] 
    [&_.swiper-slide_*]:opacity-0 
    [&_.swiper-slide-active_*]:!opacity-[1] 
    [&_.swiper-slide-active_img]:!translate-y-0 
    [&_.swiper-slide>div>div]:translate-y-[40px] 
    [&_.swiper-slide-active>div>div]:!-translate-y-[40px] 
    [&_.swiper-pagination>div]:flex 
    [&_.swiper-pagination>div]:items-center 
    [&_.swiper-pagination>div]:gap-[20px] 
    [&_.swiper-pagination]:w-auto 
    [&_.swiper-pagination]:inline-block 
    [&_.swiper-pagination]:bottom-[525px]
    [&_.swiper-pagination]:left-1/2 
    [&_.swiper-pagination]:translate-x-[690px] 
    [&_.swiper-pagination_span]:text-[32px]
    [&_.swiper-pagination_.swiper-pagination-total]:text-[#ccc] 
    [&_.swiper-pagination_.bar]:h-[2px] 
    [&_.swiper-pagination_.bar]:w-[40px] 
    [&_.swiper-pagination_.bar]:bg-black 
`;

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
                                        <img src={service.img} alt={service.title} width={350} loading="lazy" />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-[160px] relative">
                    <h3 className="leaindg-[90px] text-[56px] font-[700] px-[220px] absolute top-0 left-0 right-0">
                        고객님의 비전을
                        <br />
                        현실로 만드는 힘.
                    </h3>

                    <Swiper
                        slidesPerView="auto"
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 4000,
                        }}
                        spaceBetween={40}
                        speed={1000}
                        pagination={{
                            type: "fraction",
                            // clickable: true,
                            renderFraction(currentClass, totalClass) {
                                return `
                                    <div>
                                        <span class="${currentClass}"></span>
                                        <span class="bar"></span>
                                        <span class="${totalClass}"></span>
                                    </div>
                                `;
                            },
                        }}
                        // freeMode
                        modules={[Pagination, Autoplay]}
                        className={slideStyles}
                    >
                        {slidesList.map((slide, index) => {
                            return (
                                <SwiperSlide key={index} className="max-w-[1300px] relative pt-[260px] relative">
                                    <div
                                        style={{ backgroundImage: `url(${slide.bg})` }}
                                        className="min-h-[480px] bg-no-repeat bg-cover flex"
                                    >
                                        <div className="text-white pl-[80px] pb-[40px] mt-auto">
                                            <p className="text-[22px]">{slide.date}</p>
                                            <div className="text-[60px] leading-[60px] font-[700] flex gap-[70px] items-center mt-[20px] mb-[28px]">
                                                {slide.projectName}
                                                <img src={arrowWhite} alt="" width={22} height={22} />
                                            </div>
                                            <p className="text-[18px]">{slide.projectDescription}</p>
                                        </div>
                                        <img src={slide.img} alt={slide.projectName} loading="lazy" className="absolute right-0 bottom-0" />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </Section>
        </div>
    );
});

export default UiUx;
