import arrowUp from "@/assets/images/arrow_up_black.svg";

const navigation = [
    {
        number: "01",
        label: "aboutus",
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
        label: "solution",
        visualTitle: <>solution</>,
    },
    {
        number: "03",
        label: "uiux",
        visualTitle: <>UI/UX</>,
    },
    {
        number: "04",
        label: "whatwedo",
        visualTitle: (
            <>
                What
                <br /> we do
            </>
        ),
    },
    {
        number: "05",
        label: "withlikeweb",
        visualTitle: (
            <>
                With
                <br /> Likeweb
            </>
        ),
    },
];
export default function SideNavigate({
    activeSection,
    // setCurrentSection,
    // scrollTo,
    setTargetSection,
}: {
    activeSection: string;
    // setCurrentSection?: React.Dispatch<React.SetStateAction<string>>;
    setTargetSection: React.Dispatch<React.SetStateAction<string>>;
    // scrollTo: (el: string) => void;
}) {
    return (
        <div className="fixed left-[12px] top-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-[20px]">
            <ul className="flex flex-col gap-[8px]">
                {navigation.map(nav => {
                    const style = activeSection == nav.label ? "bg-[#FD5B1D] border-[#FD5B1D] text-white" : "bg-[#F8F8F8] border-black";

                    return (
                        <a
                            href={`#${nav.label}`}
                            key={nav.number}
                            // onClick={() => setTargetSection(nav.label)}
                            // onClick={e => {
                            //     e.preventDefault();
                            //     scrollTo(nav.label);
                            // }}
                            className={`rounded-[12px] border px-[10px] py-[20px] cursor-pointer ${style}`}
                        >
                            <p className="font-Urbanist text-[18px] leading-[29px]">{nav.number}</p>
                            <p className="font-Urbanist text-[15px] mt-[24px]">{nav.visualTitle}</p>
                        </a>
                    );
                })}
            </ul>
            <li onClick={() => {}} className="w-[48px] h-[48px] flex justify-center items-center">
                <img src={arrowUp} alt="" />
            </li>
        </div>
    );
}
