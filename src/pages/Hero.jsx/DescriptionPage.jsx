import React from "react";
import Button from "../../components/Button/Button";
import biker from "../../assets/biker.png";

const DescriptionPage = () => {
  return (
    <div className="w-full max-h-screen mt-12">
      <div className="px-4 xl:px-8 2xl:px-24 h-full w-full flex items-center bg-lightBlue">
        <div className="w-[46%] h-full inline-flex flex-col justify-center">
          <h2 className="text-[44px] xl:text-[56px] 2xl:text-[74px] font-hg leading-[72px] text-hero font-bold">
            Make Money While You Move.
          </h2>
          <div className="mt-8 mb-8 w-full">
            <p className="text-[12px] xl:text-[14px] 2xl:text-[20px] text-gray leading-1">
              A revolutionary platform designed to empower individuals to earn
              money by becoming couriers. Our website is meticulously crafted to
              convey the message that anyone can leverage their movement and
              transportation capabilities to generate income. Through clear and
              engaging visuals, compelling storytelling, and user-friendly
              navigation, we showcase the opportunities available for
              individuals to join our courier network and start earning
              immediately.
            </p>
          </div>
          <Button width={"260px"} height={"64px"} text={"Get started"} />
        </div>
        <div className="w-[64%] h-full inline-flex justify-center items-center">
          <img src={biker} alt="biker" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
