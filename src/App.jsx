import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <>
    <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeaturesSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
     </div>
    </>
  )
}