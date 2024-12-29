import { Link } from "react-router";
import footerBg from "@/assets/images/bg_footer.png";
import logo from "@/assets/images/logo_bk.png";
import arrowUp from "@/assets/images/arrow_up_white.svg";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={className}>
            <div className="bg-cover w-full h-[697px]" style={{ backgroundImage: `url(${footerBg})` }}></div>
            <div className="px-[40px] py-[60px] bg-[linear-gradient(180deg,#333333_0%,#000000_65.39%)]">
                <div className="flex justify-between border-b border-[#FFFFFF1F] pb-[20px]">
                    <h1>
                        <Link
                            to="/"
                            className="inline-block indent-[-9999em] w-[57px] h-[62px] bg-no-repeat"
                            style={{ backgroundImage: `url(${logo})` }}
                        >
                            likeweb
                        </Link>
                    </h1>
                    <a href="#aboutusmain" className="text-white font-[700] text-[28px] font-Urbanist flex items-center gap-[16px]">
                        Back to top
                        <img src={arrowUp} alt="" width={24} height={24} />
                    </a>
                </div>
                <div className="flex justify-between pt-[20px]">
                    <div className="text-[#999999] text-[18px] [&_p]:leading-[32px]">
                        <p>(주)라이크웹</p>
                        <p>설립일 : 2004년 3월 8일</p>
                        <p>서울특별시 강남구 봉은사로 55길 17 (삼성동 35-25) 가남빌딩 5층</p>
                        <p> 대표 : 권성한</p>
                        <p>사업자번호 : 107-87-13883</p>
                    </div>
                    <div className="mt-auto text-right">
                        <address className="text-[#FD5B1D] text-[28px] font-[700] not-italic font-Urbanist">
                            <p>T : 02 - 784 -3125</p>
                            <p>E : likeweb@likeweb.co.kr</p>
                        </address>
                        <p className="text-[#999999] text-[14px] mt-[24px]">ⓒ 2004 likeweb. all rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
