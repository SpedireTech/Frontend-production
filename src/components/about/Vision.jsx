import React from "react";
import vision from "../../assets/about/vision.svg";

const Vision = () => {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-grow flex-col-reverse md:flex-row md:w-[1280px] md:h-[500px] lg:gap-[13px] p-5 md:m-[6.25rem]"
    >
      <div className="md:w-1/2">
        <img src={vision} alt="vision" className="" />
      </div>
      <div className="flex-grow flex flex-col w-[327px] h-[352px] gap-[4px] md:w-[575px] md:h-[352px] md:gap-[32px]">
        <div className="text-base lg:text-[32px] text-[#4B4B4B] font-hg font-medium">
          Our Vision
        </div>
        <div className="text-[20px] lg:text-[40px] text-[#041E40] font-hg font-bold">
          We are a team of Innovators
        </div>
        <div className="text-base lg:text-[20px] text-[#4B4B4B] font-hg font-normal">
          We envision a world where logistics are seamlessly integrated into our
          daily journeys, transforming every trip into an opportunity for
          connection and service. By establishing the most efficient and
          reliable peer-to-peer logistics platform in Lagos, Nigeria, we aim to
          create a community where distances are shortened, and deliveries are
          entrusted to those who share your path.
        </div>
      </div>
    </div>
  );
};

export default Vision;
