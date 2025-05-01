import BannerSection from '../components/BannerSection'
import bannerimg from '../assets/images/services.webp'
import preEngineeringImage from '../assets/images/sheet-metal-component.webp';
import MildSteelFabrication from '../components/MildSteelFabrication';
import ServicesSection from '../components/ServicesSection';

const SheetMetalComponent = () => {
    return (
        <>
            <BannerSection page='SHEET METAL COMPONENT' backgroundImage={bannerimg} />

            <MildSteelFabrication
                title="PROFESSIONAL Sheet Metal Component SERVICES"
                description={`<strong>Aero Fabricators</strong> is the best sheet metal component maker. We deliver highly sophisticated sheet metal products. We are more Sheet metal is a metal that is formed into thin or flat pieces by an industrial process. It is one of the metal forms usually used in metalworking as cutting and bending to give a variety of shapes. Generally these sheets are considered leaf or foils and their pieces are plate steel. Sheet metal is available in flat pieces or coiled strips. The coils are formed by running a continuous sheet of metal through machines.<br/><br/><br/><strong>Aero Fabricators is the Best Sheet Metal Components Provider</strong><br/>Usually the sheet metal component’s thickness is specified in millimeters. Its non-linear measure is known as gauge. In this process different metals like Steel, Copper, Aluminium, Brass, Tin, Titanium, Nickel, Platinum, Silver, Gold are formed into sheets. Sheet metal components can be used in major appliances, such as automobiles, airplanes, tinplates, roofing, wings, fuselages, building architectures, etc.<br/><br/><strong>We are trusted Sheet Metal Components fabricators</strong><br/>We have the latest automated design capabilities to shape your metal components with the latest technology. We are more capable of producing multiple ranges of metal components. We fabricate metal tools into sheets according to the client's demand. We design a fully automatic powder coating and liquid coating metal components in our company.`}
                imageSrc={preEngineeringImage}
                imageAlt="Our Priority is Your Trust"
                subtitle="Our Priority is Your Trust"
                secondaryDescription={`Our ultimate focus is to gain your trust in this sector. We have fine experience working with carbon steel, high carbon and high tensile steels, galvanized, pre coated steel, stainless steel, aluminum, and all .We produced high quality metal sheet components that were monitored carefully at every stage of production. Being a certified company our clients completely have trust and faith in us.Our products are being used in a variety of industries that show our popularity in the field of this business.`}
            />

            <ServicesSection/>


        </>
    )
}

export default SheetMetalComponent