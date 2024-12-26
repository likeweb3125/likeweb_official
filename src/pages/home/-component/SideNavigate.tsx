import arrowUp from "@/assets/images/arrow_up_black.svg";

export default function SideNavigate() {
    return (
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-[20px]">
            <div className="flex flex-col gap-[8px]">
                <div className="bg-[#FD5B1D] rounded-[12px] border border-[#FD5B1D] px-[10px] py-[20px]">
                    <p className="font-Urbanist text-[18px] leading-[29px] text-white">01</p>
                    <p className="font-Urbanist text-[15px] mt-[24px] text-white">
                        About
                        <br /> us
                    </p>
                </div>
                <div className="bg-[#F8F8F8] rounded-[12px] border border-black px-[10px] py-[20px]">
                    <p className="font-Urbanist text-[18px] leading-[29px]">02</p>
                    <p className="font-Urbanist text-[15px] mt-[24px]">solution</p>
                </div>
                <div className="bg-[#F8F8F8] rounded-[12px] border border-black px-[10px] py-[20px]">
                    <p className="font-Urbanist text-[18px] leading-[29px]">03</p>
                    <p className="font-Urbanist text-[15px] mt-[24px]">UI/UX</p>
                </div>
                <div className="bg-[#F8F8F8] rounded-[12px] border border-black px-[10px] py-[20px]">
                    <p className="font-Urbanist text-[18px] leading-[29px]">04</p>
                    <p className="font-Urbanist text-[15px] mt-[24px]">
                        What
                        <br /> we do
                    </p>
                </div>
                <div className="bg-[#F8F8F8] rounded-[12px] border border-black px-[10px] py-[20px]">
                    <p className="font-Urbanist text-[18px] leading-[29px]">05</p>
                    <p className="font-Urbanist text-[15px] mt-[24px]">
                        With
                        <br /> Likeweb
                    </p>
                </div>
            </div>
            <button type="button" className="w-[48px] h-[48px] flex justify-center items-center">
                <img src={arrowUp} alt="" />
            </button>
        </div>
    );
}
