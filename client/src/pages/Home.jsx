import React from 'react'
import BannerCarousel from '../components/BannerCarousel'
import SubscribeSection from '../components/SubscribeSection'
import FactsSection from '../components/FactsSection'
import ServicesSection from '../components/ServicesSection'
import AboutUsSection from '../components/AboutUsSection'
import ProjectGallery from '../components/ProjectGallery'
import TestimonialsClientsSection from '../components/TestimonialsClientsSection.JSX'
import ContactForm from '../components/ContactForm'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <>
   
    <BannerCarousel/>
    <CallToAction
  message="We Ensure Your Proper Needs on Fabrication"
  buttonLabel="Request Quote"
  buttonLink="/contact"
/>


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

<ContactForm/>
    </>
  )
}

export default Home