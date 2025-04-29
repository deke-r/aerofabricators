import BannerSection from '../components/BannerSection'
import FactsSection from '../components/FactsSection'
import banner from '../assets/images/aboutus.webp'
import WhoWeAreSection from '../components/WhoWeAreSection'

const About = () => {
  return (
    <>
    <BannerSection page='About' backgroundImage={banner}/>
    <WhoWeAreSection/>
    <FactsSection/>
    </>
  )
}

export default About