import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Msfabrications from "./pages/Msfabrications";
import Preengineeringstructure from "./pages/Preengineeringstructure";
import StructuralFabrication from "./pages/StructuralFabrication";
import SsFabrication  from "./pages/SsFabrication";
import SheetMetalComponent from "./pages/SheetMetalComponent";
import SheetMetalFabrication from "./pages/SheetMetalFabrication";
import CanopyManufacturers from "./pages/CanopyManufacturers";
import BaileyBridgesManufacturing from "./pages/BaileyBridgesManufacturing";
import TrussBridgesManufacturer from "./pages/TrussBridgesManufacturer";
import GriderBridgesManufacturing from "./pages/GriderBridgesManufacturing";
import FootoverBridgesManufacturer from "./pages/FootoverBridgesManufacturer";
import TawkTo from './TawkToWidget';
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <TawkTo/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services/ms-fabrications' element={<Msfabrications />} />
      <Route path='/services/preengineeringstructure' element={<Preengineeringstructure />} />
      <Route path='/services/structural-fabrication' element={<StructuralFabrication />} />
      <Route path='/services/ss-fabrication' element={<SsFabrication />} />
      <Route path='/services/sheet-metal-component' element={<SheetMetalComponent />} />
      <Route path='/services/sheet-metal-fabrication' element={<SheetMetalFabrication />} />
      <Route path='/services/canopy-manufacturers' element={<CanopyManufacturers />} />
      <Route path='/services/bailey-bridges-manufacturing' element={<BaileyBridgesManufacturing />} />
      <Route path='/services/bailey-bridges-manufacturing/truss-bridges-manufacturer' element={<TrussBridgesManufacturer />} />
      <Route path='/services/bailey-bridges-manufacturing/grider-bridges-manufacturing' element={<GriderBridgesManufacturing />} />
      <Route path='/services/bailey-bridges-manufacturing/footover-bridges-manufacturer' element={<FootoverBridgesManufacturer />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App