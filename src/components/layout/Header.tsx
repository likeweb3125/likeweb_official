import { Link } from "react-router";
import logo from "@/assets/images/logo.svg";
import emailIcon from "@/assets/images/email.svg";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white">
            <h1>
                <Link
                    to="/"
                    className="absolute left-[40px] top-1/2 -translate-y-1/2 indent-[-9999em] block w-[40px] h-[44px] bg-no-repeat"
                    style={{ backgroundImage: `url(${logo})` }}
                >
                    likeweb
                </Link>
            </h1>
            <nav className="text-center py-[28px]">
                <Link to="work" className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist">
                    Work
                </Link>
                <Link to="solution" className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist">
                    Solution
                </Link>
                <Link to="contact" className="uppercase px-[40px] text-[20px] font-[700] font-Urbanist">
                    Contact
                </Link>
            </nav>
            <a href="mailto:likeweb@likeweb.co.kr" className="absolute right-[40px] top-1/2 -translate-y-1/2">
                <img src={emailIcon} alt="" />
            </a>
        </header>
    );
}
