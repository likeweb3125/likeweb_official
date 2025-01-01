import { forwardRef } from "react";
import Section from "../Section";
import slideImg0101 from "@/assets/images/with_likeweb_img1-01.svg";
import slideImg0102 from "@/assets/images/with_likeweb_img1-02.svg";
import slideImg0103 from "@/assets/images/with_likeweb_img1-03.svg";
import slideImg0104 from "@/assets/images/with_likeweb_img1-04.svg";
import slideImg0105 from "@/assets/images/with_likeweb_img1-05.svg";
import slideImg0106 from "@/assets/images/with_likeweb_img1-06.svg";

import slideImg0201 from "@/assets/images/with_likeweb_img2-01.svg";
import slideImg0202 from "@/assets/images/with_likeweb_img2-02.svg";
import slideImg0203 from "@/assets/images/with_likeweb_img2-03.svg";
import slideImg0204 from "@/assets/images/with_likeweb_img2-04.svg";
import slideImg0205 from "@/assets/images/with_likeweb_img2-05.svg";
import slideImg0206 from "@/assets/images/with_likeweb_img2-06.svg";

import slideImg0301 from "@/assets/images/with_likeweb_img3-01.svg";
import slideImg0302 from "@/assets/images/with_likeweb_img3-02.svg";
import slideImg0303 from "@/assets/images/with_likeweb_img3-03.svg";
import slideImg0304 from "@/assets/images/with_likeweb_img3-04.svg";
import slideImg0305 from "@/assets/images/with_likeweb_img3-05.svg";
import slideImg0306 from "@/assets/images/with_likeweb_img3-06.svg";

import slideImg0401 from "@/assets/images/with_likeweb_img4-01.svg";
import slideImg0402 from "@/assets/images/with_likeweb_img4-02.svg";
import slideImg0403 from "@/assets/images/with_likeweb_img4-03.svg";
import slideImg0404 from "@/assets/images/with_likeweb_img4-04.svg";
import slideImg0405 from "@/assets/images/with_likeweb_img4-05.svg";
import slideImg0406 from "@/assets/images/with_likeweb_img4-06.svg";

type SectionProps = {
    onToggle?: (section: any) => void;
};

const WithLikeweb = forwardRef<HTMLDivElement, SectionProps>(({ onToggle }, ref) => {
    return (
        <div ref={ref} id="withlikeweb">
            <Section heading="withlikeweb" onToggle={onToggle} className="p-0 flex justify-evenly h-screen overflow-hidden">
                {/* <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[20px]">
                        <img src={slideImg0101} alt="" width={280} />
                        <img src={slideImg0102} alt="" width={280} />
                        <img src={slideImg0103} alt="" width={280} />
                        <img src={slideImg0104} alt="" width={280} />
                        <img src={slideImg0105} alt="" width={280} />
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <img src={slideImg0306} alt="" width={280} />
                        <img src={slideImg0201} alt="" width={280} />
                        <img src={slideImg0202} alt="" width={280} />
                        <img src={slideImg0203} alt="" width={280} />
                        <img src={slideImg0204} alt="" width={280} />
                        <img src={slideImg0205} alt="" width={280} />
                        <img src={slideImg0206} alt="" width={280} />
                    </div>
                </div>

                <div className="mx-auto flex flex-col items-center pt-[280px]">
                    <span className="text-[24px] text-[#FD5B1D] leaindg-[38px] font-[600]">총 2,156 개의 고객사</span>
                    <p className="mt-[16px] mb-[46px] leaindg-[90px] text-[56px] font-[700] text-center w-[410]">
                        새로운 가치를 위해
                        <br />
                        함께하세요.
                    </p>
                    <span className="w-[120px] h-[120px] border-[2px] border-[#FD5B1D] rounded-full text-[18px] font-[600] text-[#FD5B1D] flex justify-center items-center">
                        Project
                    </span>
                </div>

                <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[20px]">
                        <img src={slideImg0301} alt="" width={280} />
                        <img src={slideImg0302} alt="" width={280} />
                        <img src={slideImg0303} alt="" width={280} />
                        <img src={slideImg0304} alt="" width={280} />
                        <img src={slideImg0305} alt="" width={280} />
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <img src={slideImg0401} alt="" width={280} />
                        <img src={slideImg0402} alt="" width={280} />
                        <img src={slideImg0403} alt="" width={280} />
                        <img src={slideImg0404} alt="" width={280} />
                        <img src={slideImg0405} alt="" width={280} />
                        <img src={slideImg0406} alt="" width={280} />
                    </div>
                </div> */}
                <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[20px] animate-slide-down-slow-01">
                        <img src={slideImg0101} alt="" width={280} />
                        <img src={slideImg0102} alt="" width={280} />
                        <img src={slideImg0103} alt="" width={280} />
                        <img src={slideImg0104} alt="" width={280} />
                        <img src={slideImg0105} alt="" width={280} />
                        <img src={slideImg0106} alt="" width={280} />
                    </div>
                    <div className="flex flex-col gap-[20px] animate-slide-up-fast-01">
                        <img src={slideImg0306} alt="" width={280} />
                        <img src={slideImg0201} alt="" width={280} />
                        <img src={slideImg0202} alt="" width={280} />
                        <img src={slideImg0203} alt="" width={280} />
                        <img src={slideImg0204} alt="" width={280} />
                        <img src={slideImg0205} alt="" width={280} />
                        <img src={slideImg0206} alt="" width={280} />
                    </div>
                </div>

                <div className="mx-auto flex flex-col items-center pt-[280px]">
                    <span className="text-[24px] text-[#FD5B1D] leaindg-[38px] font-[600]">총 2,156 개의 고객사</span>
                    <p className="mt-[16px] mb-[46px] leaindg-[90px] text-[56px] font-[700] text-center w-[410]">
                        새로운 가치를 위해
                        <br />
                        함께하세요.
                    </p>
                    <span className="w-[120px] h-[120px] border-[2px] border-[#FD5B1D] rounded-full text-[18px] font-[600] text-[#FD5B1D] flex justify-center items-center">
                        Project
                    </span>
                </div>

                <div className="flex gap-[24px]">
                    <div className="flex flex-col gap-[20px] animate-slide-down-slow-02">
                        <img src={slideImg0301} alt="" width={280} />
                        <img src={slideImg0302} alt="" width={280} />
                        <img src={slideImg0303} alt="" width={280} />
                        <img src={slideImg0304} alt="" width={280} />
                        <img src={slideImg0305} alt="" width={280} />
                    </div>
                    <div className="flex flex-col gap-[20px] animate-slide-up-fast-02">
                        <img src={slideImg0401} alt="" width={280} />
                        <img src={slideImg0402} alt="" width={280} />
                        <img src={slideImg0403} alt="" width={280} />
                        <img src={slideImg0404} alt="" width={280} />
                        <img src={slideImg0405} alt="" width={280} />
                        <img src={slideImg0406} alt="" width={280} />
                    </div>
                </div>
            </Section>
        </div>
    );
});

export default WithLikeweb;
