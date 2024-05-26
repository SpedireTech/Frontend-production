import Carousel from "../../components/Carousel/Carousel.jsx";
import Nav from "../../components/Header/Nav.jsx";
import Slider from "../../components/TextSlider/Slider.jsx";
import CTA from "../Hero.jsx/CTA.jsx";
import DescriptionPage from "../Hero.jsx/DescriptionPage.jsx";
import Hero from "../Hero.jsx/Hero.jsx";
import HowItWorksPage from "../Hero.jsx/HowItWorksPage.jsx";
// import Nav from "../../components/Header/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function LandingPage() {
  return (
    <div className="max-w-full">
      {/* <Nav /> */}

      <div className="w-full relative">
      <Nav/>
        <Hero />
        <Slider />
      </div>
      <DescriptionPage />
      <HowItWorksPage />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
