import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home";
import Work from "@/pages/Work";
import Solution from "@/pages/Solution";
import Contact from "@/pages/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="work" element={<Work />} />
                <Route path="solution" element={<Solution />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
