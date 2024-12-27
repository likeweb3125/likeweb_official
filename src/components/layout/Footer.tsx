import footerBg from "@/assets/images/bg_footer.png";

export default function Footer() {
    return (
        <footer>
            <div className="bg-cover w-full h-[697px]" style={{ backgroundImage: `url(${footerBg})` }}></div>
            <div className="bg-[linear-gradient(180deg,#333333_0%,#000000_65.39%)]">
                <div className="flex">
                    <h1>likeweb</h1>
                    <button type="button">back to top</button>
                </div>
                <div className="flex">
                    <address></address>
                </div>
            </div>
        </footer>
    );
}
