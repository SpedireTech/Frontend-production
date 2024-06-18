import React, { useEffect, useState } from "react";
import grid from "../../assets/about/grid_view.png";
import send from "../../assets/about/send.png";
import local_shipping from "../../assets/about/local_shipping.png";
import browse_activity from "../../assets/about/browse_activity.png";
import database from "../../assets/about/database.png";
import wallet from "../../assets/about/account_balance_wallet.png";
import payments from "../../assets/about/payments.png";
import quiz from "../../assets/about/quiz.png";
import inputs from "../../assets/about/input.png";
import logo from "../../assets/spedire.png";

const data = [
  { id: 1, name: "Dashboard", icon: `${grid}` },
  { id: 2, name: "Send Item", icon: `${send}` },
  { id: 3, name: "Deliver Item", icon: `${local_shipping}` },
  { id: 4, name: "History", icon: `${browse_activity}` },
  { id: 5, name: "Tracking", icon: `${database}` },
  { id: 6, name: "Wallet", icon: `${wallet}` },
  { id: 7, name: "Estimate", icon: `${payments}` },
];

const otherData = [
  { id: 8, name: "FAQs", icon: `${quiz}` },
  { id: 9, name: "Log out", icon: `${inputs}` },
];
const SideBarData = () => {
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    if (active === id) {
      return;
    }
    setActive(id);
  };

  useEffect(() => {
    setActive(data[0].id);
  }, []);

  return (
    <div className="w-[192px] h-full flex flex-col gap-y-2">
      <div className="w-full mt-4">
        <img src={logo} />
      </div>
      {data.map((item) => (
        <div
          className="w-full flex flex-col items-center gap-x-2 mt-6 cursor-pointer"
          key={item.id}
        >
          <div
            onClick={() => handleClick(item.id)}
            className={`w-full h-[48px] flex gap-4 items-center px-3 ${
              active === item.id ? "bg-button rounded-lg" : ""
            } `}
          >
            <img src={item.icon} className="w-5 h-5" />
            <div className="w-full">
              <p className="font-hg font-normal text-white text-[18px]">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-24 flex flex-col">
        {otherData.map((otherItem) => (
          <div
            key={otherItem.id}
            onClick={() => handleClick(otherItem.id)}
            className={`w-full h-[48px] flex gap-4 items-center px-3 ${
              active === otherItem.id ? "bg-button rounded-lg" : ""
            } `}
          >
            <img src={otherItem.icon} className="w-5 h-5" />
            <div className="w-full">
              <p className="font-hg font-normal text-white text-[18px]">
                {otherItem.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarData;
