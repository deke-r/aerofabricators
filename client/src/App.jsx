import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={import.meta.env.VITE_ABOUTUS_PAGE} element={<About />} />
      <Route path={import.meta.env.VITE_CONTACT_PAGE} element={<Contact />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App