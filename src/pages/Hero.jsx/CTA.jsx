import React, { useEffect, useState } from "react";
import users from "./../../assets/active-users.png";
import verified from "./../../assets/verified.png";
import safe from "./../../assets/safe.png";
import widget from "./../../assets/widget.png";
import cancel from "./../../assets/cancel.png";
import CountUp from "react-countup";

const data = [
  {
    id: 1,
    name: "active users",
    image: `${users}`,
    value: 300,
    unit: "k",
    topic: "Active Users",
  },
  {
    id: 2,
    name: "verified",
    image: `${verified}`,
    value: 700,
    unit: "k",
    topic: "Verified Delivery",
  },
  {
    id: 3,
    name: "safe",
    image: `${safe}`,
    value: 99,
    unit: "%",
    topic: "Safe and Reliable",
  },
];

const CTA = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((previous) => !previous);
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div className="max-w-screen w-full" data-aos="zoom-in">
      {/* desktop */}
      <div className="hidden lg:flex flex-col items-center px-8">
        {/* <div className="fixed z-40 bottom-10 right-20" onClick={handleToggle}>
          {open ? (
            <div className="w-[80px] h-[80px] pb-4 flex justify-center items-end">
              <img
                src={widget}
                alt="widget"
                className="cursor-pointer w-[40px] h-[40px]"
              />
            </div>
          ) : (
            <div className="w-[80px] h-[80px] pb-4 flex justify-center items-end">
              <img
                src={cancel}
                alt="cancel"
                className="cursor-pointer w-[40px] h-[40px]"
              />
            </div>
          )}
        </div> */}
        <div className="mx-auto container flex flex-col w-[76%]">
          <h1 className="text-center text-hero lg:text-[44px] xl:text-[58px] 2xl:text-[70px] font-hg font-semibold mt-16 xl:mt-24 2xl:mt-32">
            The Most Preferred and Trusted
          </h1>
          <p
            className="mt-6 text-left ml-16 text-[14px] xl:text-[15.4px] text-gray font-hg w-[84%] xl:w-[90%] 2xl:w-[72%] 2xl:text-[18.4px] 2xl:ml-56"
            id="desc"
          >
            Our P2p Logistics, we pride ourselves on being the most preferred
            and trusted logistics company for several reasons. Firstly, our
            commitment to efficiency and reliability ensures that every delivery
            is completed on time and with utmost accuracy. Secondly, our
            innovative peer-to-peer model allows deliveries to be handled by
            individuals traveling along the same route, reducing costs and
            environmental impact. Additionally, our advanced tracking and
            communication systems keep our clients informed every step of the
            way, providing peace of mind and trust in our services. With a focus
            on customer satisfaction and cutting-edge technology, P2p Logistics
            remains the top choice for all your logistical needs.
          </p>
        </div>
        <div className="mt-32 flex justify-between items-center full px-2 w-[88%]">
          {data.map((item) => (
            <div
              className="w-1/2 flex flex-col items-center gap-y-12"
              key={item.id}
            >
              <img src={item.image} alt={item.name} />
              <div className="flex gap-x-1">
                <CountUp start={0} end={item.value} duration={5} delay={10}>
                  {({ countUpRef }) => (
                    <p
                      className="text-[60px] font-hg font-bold text-active"
                      ref={countUpRef}
                    >
                      {item.value}
                    </p>
                  )}
                </CountUp>
                <p className="text-[60px] font-hg font-bold text-active">
                  {item.unit}
                </p>
              </div>
              <p className="text-[20px] font-hg font-semibold text-hero">
                {item.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* mobile and tab */}
      <div className="p-6 flex flex-col lg:hidden">
        {/* <div className="fixed bottom-10 right-8" onClick={handleToggle}>
          {open ? (
            <div className="w-[80px] h-[80px] pb-4 flex justify-center items-end">
              <img
                src={widget}
                alt="widget"
                className="cursor-pointer w-[40px] h-[40px]"
              />
            </div>
          ) : (
            <div className="w-[80px] h-[80px] pb-4 flex justify-center items-end">
              <img
                src={cancel}
                alt="cancel"
                className="cursor-pointer w-[40px] h-[40px]"
              />
            </div>
          )}
        </div> */}
        <h4 className="mt-4 text-hero text-center font-bold text-xl">
          The Most Preferred and Trusted
        </h4>
        <p className="mt-4 text-gray text-[16px]">
          Our P2p Logistics, we pride ourselves on being the most preferred and
          trusted logistics company for several reasons. Firstly, our commitment
          to efficiency and reliability ensures that every delivery is completed
          on time and with utmost accuracy. Secondly, our innovative
          peer-to-peer model allows deliveries to be handled by individuals
          traveling along the same route, reducing costs and environmental
          impact. Additionally, our advanced tracking and communication systems
          keep our clients informed every step of the way, providing peace of
          mind and trust in our services. With a focus on customer satisfaction
          and cutting-edge technology, P2p Logistics remains the top choice for
          all your logistical needs.
        </p>
        <div className="mt-16 flex justify-between gap-x-12 items-center md:gap-x-20">
          {data.map((item) => (
            <div
              className="w-1/2 flex flex-col items-start md:items-center gap-y-6"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[46px] h-[46px] md:w-[92px] md:h-[92px]"
              />

              <div className="flex gap-x-1">
                <CountUp start={0} end={item.value} duration={5} delay={10}>
                  {({ countUpRef }) => (
                    <p
                      ref={countUpRef}
                      className="text-xl md:text-2xl font-hg font-bold text-active"
                    >
                      {item.value}
                    </p>
                  )}
                </CountUp>
                <p className="text-xl md:text-2xl font-hg font-bold text-active">
                  {item.unit}
                </p>
              </div>
              <p className="text-[10px] md:text-[14px] font-hg font-semibold text-hero">
                {item.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTA;
