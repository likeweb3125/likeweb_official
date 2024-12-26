import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home/Home";
import Work from "@/pages/work/Work";
import Solution from "@/pages/solution/Solution";
import Contact from "@/pages/contact/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="h-screen flex flex-col">
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="solution" element={<Solution />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
