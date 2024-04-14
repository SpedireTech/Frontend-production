import React from "react";
import carrier from "../../assets/carrier1.png";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex items-center w-full">
        <div className="w-1/2 flex items-center justify-center ">
          <img
            src={carrier}
            alt="carrier"
            className="w-[689px] h-[779px] xl:-ml-40 -ml-10"
          />
        </div>
        <div className="w-1/2 h-[779px]">
          <div className="flex flex-col justify-center h-full -mt-4">
            <p className="text-hero text-[20px] font-hg">
              Experience Fast Delivery
            </p>
            <p className="text-hero text-[60px] font-semibold font-hg">
              Send Your Items
            </p>
            <p className="text-hero text-[60px] font-semibold font-hg">
              Seamlessly{" "}
              <span className="text-active text-[60px] font-semibold font-hg">
                P2P.
              </span>
            </p>

            <p className="text-hero text-[20px] font-hg mt-4">
              We are a Fast, Reliable and a Trustworthy P2P delivery <br />{" "}
              service in town.
            </p>
            <div className="mt-24">
              <Button width={"260px"} text="Get started" height={"64px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
