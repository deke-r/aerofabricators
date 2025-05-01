import BannerSection from '../components/BannerSection'
import bannerimg from '../assets/images/services.webp'
import preEngineeringImage from '../assets/images/pre-engineering-structure.webp';
import MildSteelFabrication from '../components/MildSteelFabrication';
import ServicesSection from '../components/ServicesSection';

const Preengineeringstructure = () => {
    return (
        <>
            <BannerSection page='PRE ENGINEERING STRUCTURE' backgroundImage={bannerimg} />

            <MildSteelFabrication
                title="Professional Pre-Engineering Structure Services"
                description={`<strong>Pre Engineering Building Structure</strong> can be fabricated with different structural and non-structural fabrications such as wall lights, skylights, ridge ventilators, turbo vents, louvers, mezzanine floors, roof monitors, canopies, fascias, insulation, doors & windows, trusses, crane systems, etc., that are mostly based on customer’s requirements. All our building structures are designed with high strength and lighter weight. We frequently make steel building designs more flexible, durable, and adaptable using quality materials for building construction. We provide a complete service of engineering, fabrication, construction, and erection to ensure better quality control during the fabrication process, making us the best building manufacturers.`}
                imageSrc={preEngineeringImage}
                imageAlt="Pre Engineering Structures"
                subtitle="What Makes Us Perfect"
                secondaryDescription={`We are number one in the fabrication industry due to our fine expertise in various sectors. We have successfully completed tasks in diverse sectors including factories, houses, living room shelters, warehouses, office buildings, labor camps, petrol pump construction, sports halls, supermarkets, storey buildings, and aircraft hangars.`}
            />

            <ServicesSection/>


        </>
    )
}

export default Preengineeringstructure