import gsap from "gsap";
import arrowUp from "@/assets/images/arrow_up_black.svg";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useLocation, useSearchParams } from "react-router";
gsap.registerPlugin(ScrollToPlugin);

const navigation = [
    {
        number: "01",
        hash: ["aboutus", "aboutusinfo"],
        visualTitle: (
            <>
                About
                <br />
                us
            </>
        ),
    },
    {
        number: "02",
        hash: ["solution"],
        visualTitle: <>solution</>,
    },
    {
        number: "03",
        hash: ["uiux"],
        visualTitle: <>UI/UX</>,
    },
    {
        number: "04",
        hash: ["whatwedo"],
        visualTitle: (
            <>
                What
                <br /> we do
            </>
        ),
    },
    {
        number: "05",
        hash: ["withlikeweb"],
        visualTitle: (
            <>
                With
                <br /> Likeweb
            </>
        ),
    },
];

export default function SideNavigate({
    // activeSection,
    scrollTo,
    targetSection,
    setTargetSection,
}: {
    setTargetSection: React.Dispatch<React.SetStateAction<string[] | string | null>>;
    targetSection: string[] | string | null;
    scrollTo: (el: string[], action: string) => void;
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const target = searchParams.get("target");

    return (
        <div className="fixed left-[12px] top-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-[20px]">
            <ul className="flex flex-col gap-[8px]">
                {navigation.map((nav, index) => {
                    const style = nav.hash.includes(target!) ? "bg-[#FD5B1D] border-[#FD5B1D] text-white" : "bg-[#F8F8F8] border-black";

                    return (
                        <li
                            key={nav.number}
                            onClick={e => {
                                scrollTo(nav.hash, "CLICK");
                            }}
                            className={`rounded-[12px] border px-[10px] py-[20px] cursor-pointer ${style}`}
                        >
                            <p className="font-Urbanist text-[18px] leading-[29px]">{nav.number}</p>
                            <p className="font-Urbanist text-[15px] mt-[24px]">{nav.visualTitle}</p>
                        </li>
                    );
                })}
            </ul>
            <li onClick={() => {}} className="w-[48px] h-[48px] flex justify-center items-center">
                <img src={arrowUp} alt="" />
            </li>
        </div>
    );
}
