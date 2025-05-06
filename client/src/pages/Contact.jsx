import React from 'react'
import BannerSection from '../components/BannerSection'
import banner from '../assets/images/contactus.webp'
import ContactInfoSection from '../components/ContactInfoSection'
import ContactForm from '../components/ContactForm'
import PageHelmet from '../components/PageHelmet'
const Contact = () => {
  return (
    <>
    <PageHelmet
  title="Contact us | Steel Fabrication company - Aerofabricators"
  description="Get in touch with Aerofabricators for your steel fabrication needs."
  keywords="contact, steel fabrication, aerofabricators, fabrication services"
  canonicalUrl="https://aerofabricators.in/contact"
/>
    
    <BannerSection page='Contact' backgroundImage={banner}/>
    <ContactInfoSection/>
    <section className="map-section">
      <div className="container">
        <h2 className="map-title">Find Us Here</h2>
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1751.807342749621!2d77.322117!3d28.581331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce450b69f04d5%3A0x7c6b67089fa03164!2s17%2C%20Block%20A%2C%20Sector%204%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1745986714843!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SDEI Location"
          ></iframe>
        </div>
      </div>
    </section>
    <ContactForm/>

    </>
  )
}

export default Contact