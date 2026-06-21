import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import EquipmentSection from './components/sections/EquipmentSection';
import GallerySection from './components/sections/GallerySection';
import PortfolioSection from './components/sections/PortfolioSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/sections/Footer';
// import { GuitarModel } from './components/GuitarModel';
// import PlayGround from './components/PlayGround';

function App() {
  return (
    <div className='min-h-screen text-white bg-black overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <EquipmentSection/>
      <GallerySection/>
      <PortfolioSection/>
      <PricingSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <ContactSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App;