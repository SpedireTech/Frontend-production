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
      <div className="w-full h-full bg-button px-4 lg:px-10">
        <div className="flex flex-col lg:flex lg:mx-auto lg:items-center lg:gap-x-28 xl:gap-x-44 2xl:gap-x-64 xl:[84%] 2xl:w-[88%]">
          <div className="flex flex-col mt-8 space-y-4 lg:space-y-12 2xl:ml-12 lg:mt-24">
            <div className="flex justify-center items-center w-[200px] h-[80px] lg:w-[192px] lg:h-[73px] bg-lightBlue  rounded-lg">
              <img src={logo} alt="logo" />
            </div>
            <p className="text-greyLight font-hg text-xl">
              Reliable, Fast and Safe
            </p>
          </div>
          <div className="flex flex-col space-y-8 mt-12 md:flex md:items-center md:gap-x-12 lg:gap-x-20 xl:gap-x-32 2xl:gap-x-56 lg:mt-24">
            {footerData.map((item) => (
              <div
                className="flex flex-col w-fit space-y-4 lg:space-y-8"
                key={item.id}
              >
                <h3 className="text-xl lg:text-2xl font-bold font-hg text-greyLight capitalize">
                  {item.header.name}
                </h3>
                {item.header.details.map((p) => (
                  <p className="text-[16px] lg:text-xl text-greyLight font-hg">
                    {p}
                  </p>
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
