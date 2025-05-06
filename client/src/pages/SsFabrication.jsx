import BannerSection from '../components/BannerSection'
import bannerimg from '../assets/images/services.webp'
import stainlessFabImage from '../assets/images/ss-fabrication.webp';
import MildSteelFabrication from '../components/MildSteelFabrication';
import WhyChooseUs from '../components/WhyChooseUs';
import ssS from '../assets/images/SS-Staircase.webp'
import ssR from '../assets/images/SS-Railing.webp'
import PageHelmet from '../components/PageHelmet';
const SsFabrication = () => {
    return (
        <>
        <PageHelmet
  title="Stainless Steel Fabrication in Delhi, Noida - Aerofabricators"
  description="Get in touch with Aerofabricators to get top-quality stainless steel fabrication in Delhi. We deliver precise designs, durability, and customized services."
  keywords="Stainless Steel In Delhi, Stainless Steel Company In Delhi NCR, SS Fabrication, SS Fabrication Company In Delhi NCR, Stainless Steel Fabrication , Stainless Steel Fabrication in Delhi, Stainless Steel Fabrication Services, Stainless Steel Manufacturer, Stainless Steel Manufacturer in Delhi NCR, Stainless Steel Manufacturer Company."
  canonicalUrl="https://aerofabricators.in/ms-fabrication"
/>

            <BannerSection page='STAINLESS STEEL FABRICATION' backgroundImage={bannerimg} />
            <MildSteelFabrication
  title="Professional Stainless Steel Fabrication Services"
  description={`<strong>Aero Fabricators</strong>is the ideal solution for your business’s requirements. We give you many advantages in stainless steel fabrication as a trustworthy provider. We provide you the best materials that are extremely adaptable and recyclable to your business purpose. We fabricate stainless steel with the best alloy materials. <br/><br/><br/><strong>Why Are We the Best in Stainless Steel Fabrication?
</strong><br/>Stainless steel is a recyclable material that ensures longevity in sustainable construction. It is also extremely hygienic, versatile, durable and easy to maintain. Due to these factors, stainless steel is widely used in many industries as transportation, power, construction, and scientific works.Stainless steel is different from ordinary steel. It may be iron elements and other metals which have different appearance than steel. As opposed to ordinary steel, stainless steel has a glossy surface that is extremely solid in its form. It is referred to as stainless steel which is generally made by melting raw materials such as chromium,iron,silicon, nickel, and others. It comprises many chemical components that form a strong alloy.

`}
  imageSrc={stainlessFabImage} // Replace with your actual image import
  imageAlt="Stainless Steel Fabrication Services"
  subtitle="Give Appealing Design to Your Stainless Products"
  secondaryDescription={`Looking for quality solutions to stainless steel fabrication? Then you can contact us for quality fabrication. We are always ready to work with you to shape your business objectives. Have you piled up stainless raw materials into useless pieces? We give your raw materials a fine shape. We manufacture all kinds of stainless steel and fabricate stainless ingredients into pure shapes and designs.You can give your raw materials a super stainless structural appearance with us.`}
/>

<div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 mb-4">
          <h3 className='fw-bold border-left ps-3'>OUR EXPERTISE</h3>
        </div>
        <div className="col-md-4 mt-3">
      <div className="box">
        <img src={ssR} alt='SS Railing' className="expertise-img" />
        <div className="overlay">
          <h1><span style={{ fontWeight: 300 }}>SS </span>Railing</h1>
          <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
              sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mt-3">
      <div className="box">
        <img src={ssS} alt='Staircase' className="expertise-img" />
        <div className="overlay">
          <h1><span style={{ fontWeight: 300 }}>SS </span>Staircase</h1>
          <p>  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero 
              sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
      </div>
    </div>
      </div>
    </div>



            <WhyChooseUs/>


        </>
    )
}

export default SsFabrication