import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import the useNavigate hook
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
  { id: 1, name: "Dashboard", icon: `${grid}`, link: "/dashboard" },
  { id: 2, name: "Send Item", icon: `${send}`, link: "/dashboard/deliver-item" },
  {
    id: 3,
    name: "Deliver Item",
    icon: `${local_shipping}`,
    link: "/dashboard/request-item",
  },
  {
    id: 4,
    name: "History",
    icon: `${browse_activity}`,
    link: "/dashboard/history",
  },
  { id: 5, name: "Tracking", icon: `${database}`, link: "/dashboard/tracking" },
  { id: 6, name: "Wallet", icon: `${wallet}`, link: "/dashboard/wallet" },
  { id: 7, name: "Estimate", icon: `${payments}`, link: "/dashboard/estimate" },
];

const otherData = [
  { id: 8, name: "FAQs", icon: `${quiz}`, link: "/dashboard/FaQs" },
  { id: 9, name: "Log out", icon: `${inputs}`, link: "/" },
];

const SideBarData = () => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id, link) => {
    navigate(link);
    setActive(id);
    console.log("name ", id);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = data.find((item) => item.link === currentPath);
    if (activeItem) {
      setActive(activeItem.name);
    }
  }, [location, data]);

  return (
    <div className="w-[192px] h-full flex flex-col gap-y-2">
      <div className="w-full mt-4">
        <img src={logo} alt="Logo" />
      </div>
      {data.map((item) => (
        <div
          className="w-full flex flex-col items-center gap-x-2 mt-6 cursor-pointer"
          key={item.id}
        >
          <div
            onClick={() => handleClick(item.name, item.link)}
            className={`w-full h-[48px] flex gap-4 items-center px-3 ${
              active === item.name ? "bg-button rounded-lg" : ""
            } `}
          >
            <img
              src={item.icon}
              className="w-5 h-5"
              alt={`${item.name} Icon`}
            />
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
            onClick={() => handleClick(otherItem.name)}
            className={`w-full h-[48px] flex gap-4 items-center px-3 ${
              active === otherItem.name ? "bg-button rounded-lg" : ""
            } `}
          >
            <img
              src={otherItem.icon}
              className="w-5 h-5"
              alt={`${otherItem.name} Icon`}
            />
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
