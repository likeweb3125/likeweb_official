import arrowUp from "@/assets/images/arrow_up_black.svg";
import { useFullPageSection } from "../Home";

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

export default function SideNavigate({ scrollTo, topElement }: { scrollTo: (el: string[]) => void; topElement: any }) {
    const { currentSection, setCurrentSection, clicked, setClicked } = useFullPageSection();

    return (
        <div className="fixed left-[12px] top-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-[20px]">
            <ul className="flex flex-col gap-[8px]">
                {navigation.map((nav, index) => {
                    const target = clicked ? clicked : currentSection;
                    const isActive = nav.hash.includes(target!);
                    const style = isActive ? "bg-[#FD5B1D] border-[#FD5B1D] text-white" : "bg-[#F8F8F8] border-black";

                    return (
                        <li
                            key={nav.number}
                            onClick={e => {
                                const section = nav.hash.includes("aboutusinfo") ? "aboutus" : nav.hash.toString();
                                setClicked(section);
                                scrollTo(nav.hash);
                            }}
                            className={`rounded-[12px] border px-[10px] py-[20px] cursor-pointer ${style}`}
                        >
                            <p className="font-Urbanist text-[18px] leading-[29px]">{nav.number}</p>
                            <p className="font-Urbanist text-[15px] mt-[24px]">{nav.visualTitle}</p>
                        </li>
                    );
                })}
            </ul>
            <button
                type="button"
                title="상단으로 이동"
                onClick={() => topElement.current.scrollIntoView({ behavior: "smooth" })}
                className="w-[48px] h-[48px] flex justify-center items-center"
            >
                <img src={arrowUp} alt="" />
            </button>
        </div>
    );
}
