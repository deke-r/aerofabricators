import { Helmet } from 'react-helmet-async';
import BannerSection from '../components/BannerSection'
import FactsSection from '../components/FactsSection'
import banner from '../assets/images/aboutus.webp'
import WhoWeAreSection from '../components/WhoWeAreSection'
import PageHelmet from '../components/PageHelmet';
const About = () => {
  return (
    <>
<PageHelmet
        title="About Us | Aerofabricators"
        description="Learn more about Aerofabricators - your trusted metal fabrication partner."
        keywords="about, aerofabricators, metal fabrication"
        canonicalUrl="https://aerofabricators.in/about"
      />
    <BannerSection page='About' backgroundImage={banner}/>
    <WhoWeAreSection/>
    <FactsSection/>
    </>
  )
}

export default About