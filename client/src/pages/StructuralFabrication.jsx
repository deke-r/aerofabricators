import BannerSection from '../components/BannerSection'
import bannerimg from '../assets/images/services.webp'
import structuralFabImage from '../assets/images/structural-fabrication.webp';
import MildSteelFabrication from '../components/MildSteelFabrication';
import ServicesSection from '../components/ServicesSection';

const StructuralFabrication = () => {
    return (
        <>
            <BannerSection page='STRUCTURAL FABRICATION' backgroundImage={bannerimg} />

            <MildSteelFabrication
  title="Professional Structural Fabrication Services"
  description={`<strong>Aero Fabricators</strong>  is a modern structural fabrication industry equipped with multi-machinery tools and plants, metals and minerals, oil and gas and manufacturing with more than 25 years of experience in structural fabrication. We also provide our services in technology structure, pipe racks, plant building structure ( rolled and built-up) stack /chimney, ducting, cladding, etc. Structural fabrication is a process of cutting, bending and welding machinery tools to make structure.In this type of fabrication steel materials are strengthened or repaired. Steel fabrication is the pieces of steel that are put together to form the different sizes and shapes. Structural steel fabrication needs more skilled and experienced technicians who can transform raw materials into good marketing products.<br/><br/><br/>Structural steel fabrication is a process of cutting, bending and welding steel tools to make a structure.In this type of fabrication steel materials are strengthened or repaired. Steel fabrication is the pieces of steel that are put together to form the different sizes and shapes. Structural steel fabrication needs more skilled and experienced technicians who can transform raw material into good marketing products. `}
  imageSrc={structuralFabImage} 
  imageAlt="Structural Fabrication Services"
  subtitle="Convert Your Machinery into Design"
  secondaryDescription={`We fabricate any structural steel products you need—tailored to specific fabricating requirements, specifications, and code compliances. We transform steel machinery tools into precise shapes and designs. The entire process is optimized for logistics, project scope, and budget.`}
/>


            <ServicesSection/>


        </>
    )
}

export default StructuralFabrication