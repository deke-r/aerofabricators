import React from 'react'
import BannerSection from '../components/BannerSection'
import banner from '../assets/images/contactus.webp'
import ContactInfoSection from '../components/ContactInfoSection'

const Contact = () => {
  return (
    <>
    <BannerSection page='Contact' backgroundImage={banner}/>
    <ContactInfoSection/>

    </>
  )
}

export default Contact