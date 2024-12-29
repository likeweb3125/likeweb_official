import { forwardRef, useRef } from "react";
import Section from "../Section";
import bg from "@/assets/images/main_bg.png";
import uiuxIcon from "@/assets/images/ic_uiux.svg";
import solutionIcon from "@/assets/images/ic_solution.svg";
import websiteIcon from "@/assets/images/ic_website.svg";
import kioskIcon from "@/assets/images/ic_kiosk.svg";
import uiuxBg from "@/assets/images/bg_uiux.png";
import uiuxContentImg from "@/assets/images/uiux_content_img.png";
import solutionBg from "@/assets/images/bg_solution.png";
import solutionContentImg from "@/assets/images/solution_content_img.png";
import websiteBg from "@/assets/images/bg_website.png";
import websiteContentImg from "@/assets/images/website_content_img.png";
import kioskBg from "@/assets/images/bg_kiosk.png";
import kioskContentImg from "@/assets/images/kiosk_content_img.png";
import arrow from "@/assets/images/arrow_outward_orange.svg";
import bubble from "@/assets/images/main_title_bubble_orange.svg";
import start from "@/assets/images/ic_start_circle_orange.svg";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const AboutUsMain = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    return (
        <div ref={ref} id="aboutus">
            <Section heading="aboutus" bg={bg} className="relative flex flex-1 bg-cover" onToggle={onToggle}>
                <div className="flex justify-between flex-1">
                    <div className="relative">
                        <p className="font-Urbanist text-[80px] leading-[80px]">We are</p>
                        <div className="flex gap-[30px]">
                            <strong className="font-Urbanist text-[110px] leading-[110px] inline-block my-[20px]">ONE</strong>
                            <div className="relative">
                                <strong className="font-Urbanist text-[110px] leading-[110px] inline-block my-[20px]">STOP</strong>
                                <img
                                    src={bubble}
                                    alt=""
                                    width={35}
                                    height={40}
                                    className="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3"
                                />
                            </div>
                        </div>
                        <p className="text-[24px]">
                            플랫폼 구축을 넘어 원스톱!
                            <br /> 한번에, 한 곳에서 가능합니다.
                        </p>

                        <button type="button" className="mt-[180px]">
                            <img src={start} alt="start!" width={100} height={100} />
                        </button>
                    </div>

                    <ul className="flex h-full absolute top-0 right-[100px]">
                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="absolute inset-0">
                                <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                                    <p className="text-[18px]">사용자를 생각한</p>
                                    <strong className="uppercase text-[24px] mt-[8px] mb-[24px]">ui/ux</strong>
                                    <img src={uiuxIcon} alt="" />
                                </div>
                                <div
                                    className="absolute inset-0 transition-all translate-x-full group-hover:translate-x-0 w-[384px] bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url(${uiuxBg})` }}
                                >
                                    <div
                                        className="absolute top-0 left-full w-full group-hover:left-0 h-[80px] overflow-hidden scale-[1.1]"
                                        style={{ filter: "blur(5px)", backgroundImage: "inherit" }}
                                    />
                                    <img src={uiuxContentImg} alt="" width={384} height={620} className="mt-[100px]" />

                                    <div className="flex justify-center">
                                        <div>
                                            <div className="flex gap-[30px] mb-[30px]">
                                                <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">ui/ux</strong>
                                                <img src={arrow} alt="" width={22} height={22} />
                                            </div>
                                            <p className="text-[#dddddd] text-[18px] leading-[29px]">
                                                사용자의 요구와 행동을 고려하여
                                                <br />
                                                최적의 사용 경험을 제공합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="absolute inset-0">
                                <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                                    <p className="text-[18px]">고객의 비즈니스를 생각한</p>
                                    <strong className="uppercase text-[24px] mt-[8px] mb-[24px]">solution</strong>
                                    <img src={solutionIcon} alt="" />
                                </div>
                                <div
                                    className="absolute top-0 bottom-0 left-full group-hover:left-0 w-[384px] bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url(${solutionBg})` }}
                                >
                                    <div
                                        className="absolute top-0 left-full w-full group-hover:left-0 h-[80px] overflow-hidden scale-[1.1]"
                                        style={{ filter: "blur(5px)", backgroundImage: "inherit" }}
                                    />
                                    <img src={solutionContentImg} alt="" width={864} height={620} className="mt-[100px]" />

                                    <div className="flex justify-center">
                                        <div>
                                            <div className="flex gap-[30px] mb-[30px]">
                                                <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">
                                                    solution
                                                </strong>
                                                <img src={arrow} alt="" width={22} height={22} />
                                            </div>
                                            <p className="text-[#dddddd] text-[18px] leading-[29px]">
                                                비즈니스 과제를 해결하기 위한
                                                <br />
                                                맞춤형 IT 솔루션을 제공합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="absolute inset-0">
                                <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                                    <p className="text-[18px]">사용자 경험에 최적화된</p>
                                    <strong className="uppercase text-[24px] mt-[8px] mb-[24px]">website</strong>
                                    <img src={websiteIcon} alt="" />
                                </div>
                                <div
                                    className="absolute top-0 bottom-0 left-full group-hover:left-0 w-[384px] bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url(${websiteBg})` }}
                                >
                                    <div
                                        className="absolute top-0 left-full w-full group-hover:left-0 h-[80px] overflow-hidden scale-[1.1]"
                                        style={{ filter: "blur(5px)", backgroundImage: "inherit" }}
                                    />
                                    <img src={websiteContentImg} alt="" width={864} height={620} className="mt-[100px]" />

                                    <div className="flex justify-center">
                                        <div>
                                            <div className="flex gap-[30px] mb-[30px]">
                                                <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">
                                                    website
                                                </strong>
                                                <img src={arrow} alt="" width={22} height={22} />
                                            </div>
                                            <p className="text-[#dddddd] text-[18px] leading-[29px]">
                                                사용자 친화적인 웹사이트 구축을 통해
                                                <br /> 브랜드와 고객의 소통을 강화합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="h-full border-l border-r border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="absolute inset-0">
                                <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                                    <p className="text-[18px]">편리한 서비스를 위한</p>
                                    <strong className="uppercase text-[24px] mt-[8px] mb-[24px]">kiosk</strong>
                                    <img src={kioskIcon} alt="kiosk" />
                                </div>
                                <div
                                    className="absolute top-0 bottom-0 left-full group-hover:left-0 w-[384px] bg-no-repeat bg-cover"
                                    style={{ backgroundImage: `url(${kioskBg})` }}
                                >
                                    <div
                                        className="absolute top-0 left-full w-full group-hover:left-0 h-[80px] overflow-hidden scale-[1.1]"
                                        style={{ filter: "blur(5px)", backgroundImage: "inherit" }}
                                    />
                                    <img src={kioskContentImg} alt="" width={864} height={620} className="mt-[100px]" />

                                    <div className="flex justify-center">
                                        <div>
                                            <div className="flex gap-[30px] mb-[30px]">
                                                <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">kiosk</strong>
                                                <img src={arrow} alt="" width={22} height={22} />
                                            </div>
                                            <p className="text-[#dddddd] text-[18px] leading-[29px]">
                                                효율적이고 직관적인 키오스크 솔루션으로
                                                <br /> 고객의 셀프 서비스 경험을 개선합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Section>
        </div>
    );
});

export default AboutUsMain;
