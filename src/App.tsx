import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Home from "@/pages/home/Home";
import Work from "@/pages/work/Work";
import Solution from "@/pages/solution/Solution";
import Contact from "@/pages/contact/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="solution" element={<Solution />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
