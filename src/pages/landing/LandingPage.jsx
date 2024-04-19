import DescriptionPage from "../Hero.jsx/DescriptionPage.jsx";
import Hero from "../Hero.jsx/Hero.jsx";
import HowItWorksPage from "../Hero.jsx/HowItWorksPage.jsx";

function LandingPage() {
  return (
    <div className="max-w-full">
      <div className="w-full relative">
        <Hero />
        <div
          className="absolute flex items-center gap-x-6 -bottom-2 h-[68px] w-full bg-button"
          id="slider"
        >
          <p className="text-white font-hg uppercase text-[32px]">
            become a courier
          </p>
          <p className="text-white font-hg uppercase text-[32px]">|</p>
          <p className="text-white font-hg uppercase text-[32px]">
            fast and secure
          </p>
          <p className="text-white font-hg uppercase text-[32px]">|</p>
          <p className="text-white font-hg uppercase text-[32px]">
            p2p delivery
          </p>
          <p className="text-white font-hg uppercase text-[32px]">|</p>
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
    </div>
  );
}

export default LandingPage;
