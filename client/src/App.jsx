import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Msfabrications from "./pages/Msfabrications";
import Preengineeringstructure from "./pages/Preengineeringstructure";
import StructuralFabrication from "./pages/StructuralFabrication";
import SsFabrication from "./pages/SsFabrication";
import SheetMetalComponent from "./pages/SheetMetalComponent";
import SheetMetalFabrication from "./pages/SheetMetalFabrication";
import CanopyManufacturers from "./pages/CanopyManufacturers";
import BaileyBridgesManufacturing from "./pages/BaileyBridgesManufacturing";
import TrussBridgesManufacturer from "./pages/TrussBridgesManufacturer";
import GriderBridgesManufacturing from "./pages/GriderBridgesManufacturing";
import FootoverBridgesManufacturer from "./pages/FootoverBridgesManufacturer";

import MildSteelRailing from "./pages/MildSteelRailing";
import MildSteelStaircase from "./pages/MildSteelStaircase";
import MildSteelWindow from "./pages/MildSteelWindow";
import MildSteelDoor from "./pages/MildSteelDoor";
import MildSteelSlidingDoor from "./pages/MildSteelSlidingDoor";
import MildSteelTable from "./pages/MildSteelTable";
import MildSteelGate from "./pages/MildSteelGate";
import MildSteelFurniture from "./pages/MildSteelFurniture";
import MildSteelBarricading from "./pages/MildSteelBarricading";
import MildSteelStructure from "./pages/MildSteelStructure";
import MildSteelFolding from "./pages/MildSteelFolding";
import MildSteelGrill from "./pages/MildSteelGrill";
import MildSteelRollingShutter from "./pages/MildSteelRollingShutter";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import TawkTo from "./TawkToWidget";

const App = () => {

  useEffect(() => {
    // Google Analytics gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CPC6S13CPB";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CPC6S13CPB');
    `;
    document.head.appendChild(script2);

    // LinkedIn Insight
    const script3 = document.createElement("script");
    script3.innerHTML = `
      var _linkedin_partner_id = "8143988";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(script3);

    const script4 = document.createElement("script");
    script4.innerHTML = `
      (function(l) {
        if (!l) {
          window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[];
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript"; b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `;
    document.head.appendChild(script4);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8143988&fmt=gif" />`;
    document.body.appendChild(noscript);

  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TawkTo />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ms-fabrications" element={<Msfabrications />} />
        <Route path="/preengineeringstructure" element={<Preengineeringstructure />} />
        <Route path="/structural-fabrication" element={<StructuralFabrication />} />
        <Route path="/ss-fabrication" element={<SsFabrication />} />
        <Route path="/sheet-metal-component" element={<SheetMetalComponent />} />
        <Route path="/sheet-metal-fabrication" element={<SheetMetalFabrication />} />
        <Route path="/canopy-manufacturers" element={<CanopyManufacturers />} />
        <Route path="/bailey-bridges-manufacturing" element={<BaileyBridgesManufacturing />} />
        <Route path="/truss-bridges-manufacturer" element={<TrussBridgesManufacturer />} />
        <Route path="/girder-bridges-manufacturing" element={<GriderBridgesManufacturing />} />
        <Route path="/footover-bridges-manufacturer" element={<FootoverBridgesManufacturer />} />

        {/* Mild Steel Pages */}
        <Route path="/mild-steel-railing" element={<MildSteelRailing />} />
        <Route path="/mild-steel-staircase" element={<MildSteelStaircase />} />
        <Route path="/mild-steel-window" element={<MildSteelWindow />} />
        <Route path="/mild-steel-door" element={<MildSteelDoor />} />
        <Route path="/mild-steel-sliding-door" element={<MildSteelSlidingDoor />} />
        <Route path="/mild-steel-table" element={<MildSteelTable />} />
        <Route path="/mild-steel-gate" element={<MildSteelGate />} />
        <Route path="/mild-steel-furniture" element={<MildSteelFurniture />} />
        <Route path="/mild-steel-barricading" element={<MildSteelBarricading />} />
        <Route path="/mild-steel-structure" element={<MildSteelStructure />} />
        <Route path="/mild-steel-folding" element={<MildSteelFolding />} />
        <Route path="/mild-steel-grill" element={<MildSteelGrill />} />
        <Route path="/mild-steel-rolling-shutter" element={<MildSteelRollingShutter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
