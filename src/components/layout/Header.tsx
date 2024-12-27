import { Link } from "react-router";
// import logo from "@/assets/images/logo.svg";
import logo from "@/assets/images/logo.png";
import emailIcon from "@/assets/images/email.svg";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-[10] bg-[#FFFFFF99]">
            <h1 className="absolute left-[40px] top-1/2 -translate-y-1/2">
                <Link
                    to="/"
                    className="inline-block indent-[-9999em] w-[40px] h-[44px] bg-no-repeat"
                    style={{ backgroundImage: `url(${logo})` }}
                >
                    likeweb
                </Link>
            </h1>
            <nav className="flex justify-center py-[28px] leading-[24px]">
                <Link to="work" className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist hover:text-[#FD5B1D] hover:underline">
                    Work
                </Link>
                <Link
                    to="solution"
                    className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist hover:text-[#FD5B1D] hover:underline"
                >
                    Solution
                </Link>
                <Link
                    to="contact"
                    className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist hover:text-[#FD5B1D] hover:underline"
                >
                    Contact
                </Link>
            </nav>
            <a href="mailto:likeweb@likeweb.co.kr" className="absolute right-[40px] top-1/2 -translate-y-1/2">
                <img src={emailIcon} alt="" />
            </a>
        </header>
    );
}
