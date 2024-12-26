import React from "react";
import bg from "@/assets/images/main_bg.png";
import bgAboutUs1 from "@/assets/images/bg_aboutus_01.png";
import bgAboutUs2 from "@/assets/images/bg_aboutus_02.png";
import bgAboutUs3 from "@/assets/images/bg_aboutus_03.png";
import bgAboutUs4 from "@/assets/images/bg_aboutus_04.png";
import gradientCardImg from "@/assets/images/card_orange_gradient.png";
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
import SideNavigate from "./-component/SideNavigate";

export default function Home() {
    return (
        <React.Fragment>
            <div className="min-h-screen relative flex flex-1 bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                <SideNavigate />
                <div className="flex justify-between flex-1">
                    <div className="ml-[220px] mt-[220px] relative">
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

                    <ul className="flex mr-[100px] h-full">
                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="h-full flex flex-col items-center justify-center group-hover:hidden">
                                <p className="text-[18px]">사용자를 생각한</p>
                                <strong className="uppercase text-[24px] mt-[8px] mb-[24px]">ui/ux</strong>
                                <img src={uiuxIcon} alt="" />
                            </div>
                            <div
                                className="absolute top-0 bottom-0 left-full group-hover:left-0 w-[384px] bg-no-repeat bg-cover"
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
                        </li>

                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
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
                                            <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">solution</strong>
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
                        </li>

                        <li className="h-full border-l border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
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
                                            <strong className="uppercase text-[36px] font-[700] font-Urbanist text-white">website</strong>
                                            <img src={arrow} alt="" width={22} height={22} />
                                        </div>
                                        <p className="text-[#dddddd] text-[18px] leading-[29px]">
                                            사용자 친화적인 웹사이트 구축을 통해
                                            <br /> 브랜드와 고객의 소통을 강화합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="h-full border-l border-r border-[#dddddd] w-[224px] hover:w-[384px] transition-all ease-in-out delay-50 group relative overflow-hidden hover:shadow-[-8px_0px_30px_0px_#0000001F] hover:overflow:auto">
                            <div className="h-full flex flex-col items-center justify-center">
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
                        </li>
                    </ul>
                </div>
            </div>

            <section
                className="bg-cover px-[220px] py-[160px] flex-1 flex justify-between"
                style={{ backgroundImage: `url(${bgAboutUs1})` }}
            >
                <h2 className="indent-[-9999em] h-0 w-0 absolute">About us</h2>

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
                        <figure className="flex mt-[260px]">
                            <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                                Platform Solutions
                            </figcaption>

                            <div className="w-[380px] h-[500px] bg-[#FFFFFF52] flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                                <span>운영 솔루션 플랫폼</span>
                                <div>
                                    <p className="text-[24px]">
                                        <b className="text-[80px]">20</b>년
                                    </p>
                                    <p className="text-[18px]">
                                        20년 이상의 경험을 쌓은 노하우로, 끊임없이 디지털 혁신을 선도하고 있습니다. 지속적인 발전을 통해
                                        업계를 이끌어 나갑니다.
                                    </p>
                                </div>
                            </div>
                        </figure>
                        <figure className="flex">
                            <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                                Platform Solutions
                            </figcaption>

                            <div className="w-[380px] h-[500px] bg-[#FFFFFF52] flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                                <span>운영 솔루션 플랫폼</span>
                                <div>
                                    <p className="text-[24px]">
                                        <b className="text-[80px]">20</b>년
                                    </p>
                                    <p className="text-[18px]">
                                        20년 이상의 경험을 쌓은 노하우로, 끊임없이 디지털 혁신을 선도하고 있습니다. 지속적인 발전을 통해
                                        업계를 이끌어 나갑니다.
                                    </p>
                                </div>
                            </div>
                        </figure>
                    </div>

                    <div className="flex flex-col gap-[140px]">
                        <figure className="flex relative items-baseline">
                            <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                                Business Experience
                            </figcaption>

                            {/* <style>
                            {`figure > div::after {
                                content: "";
                                position: absolute;
                                inset: 0;
                                height: calc(100% + 20px);
                                width: calc(100% + 20px);
                                left:50%;
                                top:50%;
                                transform: translate(-50%, -50%);
                                border: 1px solid #FD5B1D; 
                                background: transparent content-box;
                                --s: 40px; 
                                mask: 
                                    conic-gradient(#000 0 0) content-box,
                                    conic-gradient(at var(--s) var(--s),#0000 75%,#000 0) 
                                    0 0/calc(100% - var(--s)) calc(100% - var(--s));
                                }`}
                        </style> */}
                            <div className="relative">
                                <img src={gradientCardImg} alt="" width={380} height={500} />
                                <div className="absolute inset-0 flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                                    <span>사업경력</span>
                                    <div>
                                        <p className="text-[24px]">
                                            <b className="text-[80px]">20</b>년
                                        </p>
                                        <p className="text-[18px]">
                                            20년 이상의 경험을 쌓은 노하우로, 끊임없이 디지털 혁신을 선도하고 있습니다. 지속적인 발전을 통해
                                            업계를 이끌어 나갑니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </figure>

                        <figure className="flex">
                            <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                                Platform Solutions
                            </figcaption>

                            <div className="w-[380px] h-[500px] bg-[#FFFFFF52] flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                                <span>운영 솔루션 플랫폼</span>
                                <div>
                                    <p className="text-[24px]">
                                        <b className="text-[80px]">20</b>년
                                    </p>
                                    <p className="text-[18px]">
                                        20년 이상의 경험을 쌓은 노하우로, 끊임없이 디지털 혁신을 선도하고 있습니다. 지속적인 발전을 통해
                                        업계를 이끌어 나갑니다.
                                    </p>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
