import { forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import gradientCardImg from "@/assets/images/card_orange_gradient.png";
type CardProps = {
    ref: any;
    id: string;
    isActive?: boolean;
    className?: string;
    title: string;
    value: ReactNode;
    caption: string;
    description: ReactNode;
};
const Card = forwardRef<HTMLDivElement, CardProps>(({ id, isActive, className, caption, title, value, description }, ref) => {
    const style = twMerge(`flex`, className);
    if (isActive) {
        return (
            <div ref={ref}>
                <figure className={style} id={`card-${id}`}>
                    <style>
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
                    </style>

                    <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                        {caption}
                    </figcaption>

                    <div className="relative">
                        <img src={gradientCardImg} alt="" width={380} height={500} />
                        <div className="absolute inset-0 flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                            <span>{title}</span>
                            <div>
                                <p className="text-[24px]">{value}</p>
                                <p className="text-[18px]">{description}</p>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
        );
    }
    return (
        <div ref={ref}>
            <figure className={style} id={`card-${id}`}>
                <figcaption className="rotate-[90deg] origin-[0_0] translate-x-[-30px] absolute text-white text-[18px] font-[400] font-Urbanist">
                    {caption}
                </figcaption>

                <div className="after:content-none w-[380px] h-[500px] bg-[#FFFFFF52] flex flex-col gap-[48px] text-white justify-end px-[28px] pb-[48px]">
                    <span>{title}</span>
                    <div>
                        <p className="text-[24px]">{value}</p>
                        <p className="text-[18px]">{description}</p>
                    </div>
                </div>
            </figure>
        </div>
    );
});
export default Card;
