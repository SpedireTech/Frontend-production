import React from "react";
import carrier from "../../assets/carrier1.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="p-4 w-full" data-aos="zoom-in">
      {/* styling for desktop */}
      <div className="hidden lg:flex items-center flex-row-reverse w-full">
        <div className="w-1/2 flex items-center justify-center ">
          <img src={carrier} alt="carrier" className="w-[689px] h-[779px]" />
        </div>
        <div className="w-1/2 h-[779px]">
          <div className="flex flex-col justify-center h-full -mt-4 ml-28 2xl:ml-60">
            <p className="text-hero text-[20px] font-hg">
              Experience Fast Delivery
            </p>
            <p className="text-hero text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg">
              Send Your Items
            </p>
            <p className="text-hero text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg flex gap-x-2">
              Seamlessly{" "}
              <span className="holder">
                <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
                  P2P
                </span>
                <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
                  Reliable
                </span>
                <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
                  Fast
                </span>
              </span>
            </p>

            <p className="text-hero text-[20px] font-hg mt-4">
              We are a Fast, Reliable and a Trustworthy P2P delivery <br />{" "}
              service in town.
            </p>
            <div className="mt-24">
            <Link to="/register">
            <Button text={"Get started"} width={"260px"} height={"64px"} />
          </Link>
            </div>
          </div>
        </div>
      </div>
      {/* styling for mobile and tab */}
      <div className="flex flex-col h-full lg:hidden">
        <p className="text-sm md:text-xl font-hg text-hero">
          Experience Fast Delivery
        </p>
        <h4 className="text-4xl font-hg md:text-5xl font-semibold leading-loose md:mt-4 text-hero">
          Send Your Items <br />
          Seamlessly &nbsp;
          <span className="holder">
            <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
              P2P
            </span>
            <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
              Reliable
            </span>
            <span className="text-active text-[40px] xl:text-[56px] 2xl:text-[60px] font-semibold font-hg item">
              Fast
            </span>
          </span>
        </h4>
        <p className="mt-4 text-hero md:mt-8 md:text-xl text-md font-hg">
          We are a Fast, Reliable and a Trustworthy P2P delivery service in
          town.
        </p>
        <div className="mt-4 md:hidden">
          <Button width={"144px"} text="Get started" height={"40px"} />
        </div>
        <div className="hidden md:flex mt-8">
          <Button width={"288px"} text="Get started" height={"60px"} />
        </div>
        <div className="mt-16 flex flex-col justify-center items-center">
          <img
            src={carrier}
            alt="carrier"
            className="w-[274px] h-[326.08px] md:w-[304px] md:h-[356.08]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
