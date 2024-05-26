import React from "react";
import Button from "../Button/Button";
import Slider from "../TextSlider/Slider";

const TopPage = () => {
  return (
    <div
      className="relative max-w-screen w-full h-[320px] lg:h-[760px] bg-greyLight"
      id="topPage"
    >
      {/* desktop */}
      <div className="h-[80%] lg:h-full w-full flex flex-col gap-y-40 justify-center items-center mt-24">
        <div className="w-[90%] lg:w-[88%] xl:w-[90%] 2xl:w-[62%] lg:-mt-36 xl:-mt-44 2xl:-mt-24 flex justify-center items-center">
          <h className="w-full text-center text-hero font-hg font-bold text-3xl lg:text-5xl xl:text-6xl">
            Revolutionize the logistics landscape by harnessing the power of
            community
          </h>
        </div>
        <div className="hidden lg:flex">
          <Button width={"260px"} text={"Get started"} height={"64px"} />
        </div>
      </div>

      <div className="scroller absolute bottom-10 md:-bottom-10 lg:bottom-24 h-[44px] md:h-[48px] lg:h-[68px] w-full bg-button">
        <div className="inner">
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Become a courier
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Fast and secure
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            P2P delivery
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Become a courier
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Fast and secure
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            P2P delivery
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Become a courier
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Fast and secure
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            P2P delivery
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Become a courier
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            Fast and secure
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            |
          </span>
          <span className="text-white font-hg uppercase text-[8px] sm:text-[10px] md:text-[16px] lg:text-[32px]">
            P2P delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
