import Carousel from "../../components/Carousel/Carousel.jsx";
import Nav from "../../components/Header/Nav.jsx";
import CTA from "../Hero.jsx/CTA.jsx";
import DescriptionPage from "../Hero.jsx/DescriptionPage.jsx";
import Hero from "../Hero.jsx/Hero.jsx";
import HowItWorksPage from "../Hero.jsx/HowItWorksPage.jsx";
import Nav from "../../components/Header/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function LandingPage() {
  return (
    <div className="max-w-full">
      <Nav />
      <div className="w-full relative">
      <Nav/>
        <Hero />
        <div
          className="absolute h-[24px] flex items-center gap-x-6 -bottom-2 md:h-[48px] md:-bottom-4 lg:h-[68px] w-full bg-button"
          id="slider"
        >
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            become a courier
          </p>
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </p>
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            fast and secure
          </p>
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </p>
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            p2p delivery
          </p>
          <p className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </p>
          {/* <p className="text-white font-hg uppercase text-[32px]">|</p>
        <p className="text-white font-hg uppercase text-[32px]">
          become a courier
        </p>
        <p className="text-white font-hg uppercase text-[32px]">|</p>
        <p className="text-white font-hg uppercase text-[32px]">
          fast and secure
        </p>
        <p className="text-white font-hg uppercase text-[32px]">|</p>
        <p className="text-white font-hg uppercase text-[32px]">p2p delivery</p>
        <p className="text-white font-hg uppercase text-[32px]">|</p> */}
        </div>
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
