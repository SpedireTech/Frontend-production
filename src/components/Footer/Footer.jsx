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
    <div className="w-full h-[563px] mt-36">
      <div className="w-full h-full bg-button px-10">
        <div className="mx-auto flex items-center gap-x-28 xl:gap-x-44 2xl:gap-x-64 xl:[84%] 2xl:w-[88%]">
          <div className="flex flex-col space-y-12 2xl:ml-12 mt-24">
            <div className="flex justify-center items-center w-[192px] h-[73px] bg-lightBlue  rounded-lg">
              <img src={logo} alt="logo" />
            </div>
            <p className="text-greyLight font-hg text-xl">
              Reliable, Fast and Safe
            </p>
          </div>
          <div className="flex items-center gap-x-20 xl:gap-x-32 2xl:gap-x-56 mt-24">
            {footerData.map((item) => (
              <div className="flex flex-col space-y-8" key={item.id}>
                <h3 className="text-2xl font-bold font-hg text-greyLight capitalize">
                  {item.header.name}
                </h3>
                {item.header.details.map((p) => (
                  <p className="text-xl text-greyLight font-hg">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-56 ml-16 xl:ml-20 2xl:ml-56 flex gap-x-4 items-center">
          <div className="w-[19.69px] h-[19.69px] bg-greyLight flex justify-center items-center rounded-full">
            <p className="text-sm text-gray font-hg">c</p>
          </div>
          <p className="text-greyLight font-hg text-xl">
            2024 Spedire. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
