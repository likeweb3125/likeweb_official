import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import Home from "./pages/Home";
import Work from "./pages/Work";
import Solution from "./pages/Solution";
import Contact from "./pages/Contact";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="solution" element={<Solution />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
