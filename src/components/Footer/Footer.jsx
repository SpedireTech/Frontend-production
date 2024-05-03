import React from "react";
import logo from "./../../assets/logo-footer.png";

const footerData = [
  {
    id: 1,
    header: {
      name: "company",
      details: ["About Us", "Resources"],
    },
  },
  {
    id: 2,
    header: {
      name: "legal",
      details: ["Terms of Services", "Privacy Policy"],
    },
  },
  {
    id: 3,
    header: {
      name: "support",
      details: ["FAQs", "Support@spedire.ng"],
    },
  },
];

const Footer = () => {
  return (
    <div className="lg:w-full lg:h-[563px] mt-12 lg:mt-36">
      <div className="w-full h-full bg-button px-4 lg:hidden">
        <div className="flex flex-col gap-y-4">
          <div className="bg-white w-[144px] flex justify-center items-center mt-8">
            <img src={logo} alt="logo-footer" />
          </div>
          <p className="text-greyLight font-hg text-xl">
            Reliable Fast and Safe
          </p>
        </div>
        <div className="flex flex-col gap-y-28 mt-24">
          {footerData.map((item) => (
            <div className="flex flex-col gap-y-4" key={item.id}>
              <h4 className="text-2xl font-hg text-greyLight capitalize">
                {item.header.name}
              </h4>
              {item.header.details.map((text) => (
                <p className="text-lg text-greyLight block font-hg">{text}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex mt-16 lg:mt-56 lg:ml-16 xl:ml-20 2xl:ml-56 gap-x-4 items-center">
          <div className="w-[12px] h-[12px] lg:w-[19.69px] lg:h-[19.69px] bg-greyLight flex justify-center items-center rounded-full">
            <p className="text-sm text-gray font-hg">c</p>
          </div>
          <p className="text-greyLight font-hg lg:text-xl">
            2024 Spedire. All rights reserved
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col bg-button h-full px-12">
        <div className="flex gap-x-28 xl:gap-x-32 2xl:gap-x-64">
          <div className="flex flex-col w-[200px] gap-y-12">
            <div className="bg-greyLight flex justify-center items-center w-full mt-20">
              <img src={logo} alt="footer logo" />
            </div>
            <p className="text-greyLight text-xl font-hg">
              Reliable Fast and Safe
            </p>
          </div>
          <div className="flex gap-x-24 xl:gap-x-36 2xl:gap-x-80 mt-20">
            {footerData.map((item) => (
              <div className="flex flex-col gap-y-8" key={item.id}>
                <h4 className="text-2xl font-hg text-greyLight capitalize">
                  {item.header.name}
                </h4>
                {item.header.details.map((text) => (
                  <p className="text-lg text-greyLight block font-hg">{text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-16 lg:mt-56 lg:ml-16 xl:ml-20 2xl:ml-56 gap-x-4 items-center">
          <div className="w-[12px] h-[12px] lg:w-[19.69px] lg:h-[19.69px] bg-greyLight flex justify-center items-center rounded-full">
            <p className="text-sm text-gray font-hg">c</p>
          </div>
          <p className="text-greyLight font-hg lg:text-xl">
            2024 Spedire. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
