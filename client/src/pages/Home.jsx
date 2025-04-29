import React from 'react'
import BannerCarousel from '../components/BannerCarousel'
import SubscribeSection from '../components/SubscribeSection'
import FactsSection from '../components/FactsSection'
import ServicesSection from '../components/ServicesSection'
import AboutUsSection from '../components/AboutUsSection'
import ProjectGallery from '../components/ProjectGallery'
import TestimonialsClientsSection from '../components/TestimonialsClientsSection.JSX'

const Home = () => {
  return (
    <>
   
    <BannerCarousel/>
    <section className="position-relative py-4">
  <div className="container call-to-action-box">
    <div className="row mx-5">

    <div className="container">
    <div className="bg-o py-4 px-3">
      <div className="row align-items-center">
        <div className="col-md-8 text-start text-md-left">
          <h3 className="text-white mb-0 f_16 fw-bold ms-md-5">We Ensure Your Proper Needs on Fabrication</h3>
        </div>
        <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
          <a href="contact" className="btn btn-dark f_16 fw-bold">Request Quote</a>
        </div>
      </div>
    </div>
    </div>

    </div>
  </div>
</section>

    <AboutUsSection/>
    <FactsSection/>
    <SubscribeSection
  phoneTitle="Can We Help?"
  phoneNumber="(+91) 9319412012"
  emailTitle="Mail us"
  email="info@aerofabricators.in"
/>

<ServicesSection/>
<ProjectGallery/>
<TestimonialsClientsSection/>

    </>
  )
}

export default Home