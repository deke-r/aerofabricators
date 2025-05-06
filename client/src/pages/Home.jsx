import { Helmet } from 'react-helmet-async';
import React from 'react'
import BannerCarousel from '../components/BannerCarousel'
import SubscribeSection from '../components/SubscribeSection'
import FactsSection from '../components/FactsSection'
import ServicesSection from '../components/ServicesSection'
import AboutUsSection from '../components/AboutUsSection'
import ProjectGallery from '../components/ProjectGallery'
import TestimonialsClientsSection from '../components/TestimonialsClientsSection.jsx'
import ContactForm from '../components/ContactForm'
import CallToAction from '../components/CallToAction'
import PageHelmet from '../components/PageHelmet';

const Home = () => {
  return (
    <>

<PageHelmet
        title="Aerofabricators | Heavy Steel Fabrication Company in Delhi NCR"
        description="Looking for a quality Heavy Steel Fabrication Company in Delhi NCR? Aerofabricators offer precision craftsmanship for industrial projects. Get a quote today!"
        keywords="Heavy Steel Fabrication, Heavy Steel Fabrication in Delhi, Best Heavy Steel Fabrication in Delhi NCR, Steel Manufacturer, Industrial Projects"
        canonicalUrl="https://aerofabricators.in/"
      />

   
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