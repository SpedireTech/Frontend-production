import React from "react";
import sendItemImage from "../../assets/sendItem.png";
import makePayment from "../../assets/makePayment.png";
import getPeered from "../../assets/getPeered.png";
import itemDelivered from "../../assets/itemsDelivered.png";

const dataToDisplay = [
  {
    title: "Send Item",
    description:
      "Fill in the detail's of your current location and destination you are sending your item",
    image: `${sendItemImage}`,
  },
  {
    title: "Make Payment",
    description: "make payment from your wallet or your card via card",
    image: `${makePayment}`,
  },
  {
    title: "Get Peered",
    description: "Get Peered to a Courier who has a mutual destination",
    image: `${getPeered}`,
  },
  {
    title: "Item Delivered",
    description: "Experience lightning-fast delivery for all your shipments.",
    image: `${itemDelivered}`,
  },
];

const HowItWorksPage = () => {
  return (
    <div className="w-full max-w-full">
      <div className="w-full h-full">
        {/* desktop */}
        <div className="hidden lg:mt-8 w-full flex flex-col items-center px-4 xl:px-8">
          <h2 className="text-center lg:text-[44px] text-[70px] font-hg font-bold text-hero">
            How It Works
          </h2>
          <div className="w-[900px] xl:w-[1069px]  2xl:w-[1400px] flex justify-center items-center">
            <p className="text-left text-gray text-[13.5px] xl:text-[16px] 2xl:text-[20.4px]">
              Our objective is to develop a cutting-edge peer-to-peer logistics
              platform in Lagos, Nigeria, that stands out for its unparalleled
              efficiency and reliability. This platform will not only facilitate
              seamless deliveries but also cultivate a sense of community where
              geographical distances seem minimized, and shipments are entrusted
              to individuals journeying along the same route as the recipient.
              Through this innovative approach, we aim to revolutionize the
              logistics landscape by merging convenience with communal
              collaboration, thereby enhancing the overall experience of
              logistics services in our region.
            </p>
          </div>
          <div className="mt-32 flex gap-x-8">
            {dataToDisplay.map((item, i) => (
              <div
                className="w-1/4 flex flex-col items-center space-y-4"
                key={i}
              >
                <img
                  src={item.image}
                  className={`xl:h-[246px] xl:w-[284px] ${
                    i === 3 && "xl:w-[246px] h-[212px]"
                  }`}
                />
                <p className="text-center text-[22px] 2xl:text-[28px] text-active font-semibold">
                  {item.title}
                </p>
                <p className="text-center text-[14px] xl:text-[16px] 2xl:text-[20px] text-button 2xl:w-[80%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* mobile styling */}
        <div className="flex mt-36 flex-col p-4 lg:hidden">
          <h1 className="mt-36 text-2xl text-center text-hero font-hg font-bold">
            How It Works
          </h1>
          <p className="mt-4 text-gray text-[16px] font-normal">
            Our objective is to develop a cutting-edge peer-to-peer logistics
            platform in Lagos, Nigeria, that stands out for its unparalleled
            efficiency and reliability. This platform will not only facilitate
            seamless deliveries but also cultivate a sense of community where
            geographical distances seem minimized, and shipments are entrusted
            to individuals journeying along the same route as the recipient.
            Through this innovative approach, we aim to revolutionize the
            logistics landscape by merging convenience with communal
            collaboration, thereby enhancing the overall experience of logistics
            services in our region.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 justify-center items-center">
            {dataToDisplay.map((item, i) => (
              <div className="w-[150px] mt-4" key={i}>
                <img
                  src={item.image}
                  className={`xl:h-[246px] xl:w-[284px] ${
                    i === 3 && "xl:w-[246px] h-[140px]"
                  }`}
                />
                <p className="text-center text-[22px] 2xl:text-[28px] text-active font-semibold">
                  {item.title}
                </p>
                <p className="text-center text-[14px] xl:text-[16px] 2xl:text-[20px] text-button 2xl:w-[80%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
