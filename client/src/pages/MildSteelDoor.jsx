import React from 'react'
import BannerSection from '../components/BannerSection'
import bannerimg from '../assets/images/services.webp'
import msfa from '../assets/images/MS Door.webp'
import MildSteelSidebar from '../components/MildSteelSidebar'
import PageHelmet from '../components/PageHelmet';

const MildSteelDoor = () => {
  return (
    <>
    <PageHelmet
  title="Door - Aerofabricators"
  description="Aerofabricators is a leading provider of structural fabrication services in Delhi. Contact us now for quality and exceptional service. Request a quote today!"
  keywords="Structural Fabrication, Structural Fabrication Company, Structural Fabrication Company in Delhi, Structural Fabrication Services in Delhi, Structural Fabrication Manufacturer, Structural Fabrication Manufacturer in Delhi, Structural Fabrication Services Provider"
  canonicalUrl="https://aerofabricators.in/mild-steel-door"
/>

          <BannerSection page='MS Door' backgroundImage={bannerimg} />
          <MildSteelSidebar
      title="MS Door Manufacturing"
      description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
      imageSrc={msfa}
      imageAlt="MS Door Manufacturing"
      subtitle="Structural Fabrication Services in Delhi"
      secondaryDescription={`Aero Fabricators is a modern structural fabrication industry equipped with multi-machinery tools and plants, metals and minerals, oil and gas and manufacturing with more than 25 years of experience in structural fabrication. We also provide our services in technology structure, pipe racks, plant building structure (rolled and built-up), stack/chimney, ducting, cladding, etc. Structural fabrication is a process of cutting, bending and welding machinery tools to make structure. In this type of fabrication steel materials are strengthened or repaired. Steel fabrication is the pieces of steel that are put together to form the different sizes and shapes. Structural steel fabrication needs more skilled and experienced technicians who can transform raw materials into good marketing products.<br/><br/><br/>Structural steel fabrication is a process of cutting, bending and welding steel tools to make a structure. In this type of fabrication steel materials are strengthened or repaired. Steel fabrication is the pieces of steel that are put together to form the different sizes and shapes. Structural steel fabrication needs more skilled and experienced technicians who can transform raw material into good marketing products.<br/><br/><br/>We fabricate any structural steel products that you are looking for through different fabricating requirements, specification and code compliances. We convert steel machinery tools into definite shapes and designs. To complete the process of steel fabrication it will be logistics for your project and budget.`}
    />
    </>
  )
}

export default MildSteelDoor