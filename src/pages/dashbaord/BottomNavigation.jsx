import React from "react";
import home from "../../assets/bi_house-fill.svg";
import send from "../../assets/bi_send-fill.svg";
import courier from "../../assets/mdi_courier.svg";
import profile from "../../assets/icon-placeholder.svg";

const bottomNav = [
  { id: 1, name: "Home", icon: `${home}`, link: "/dashboard" },
  { id: 2, name: "Send", icon: `${send}`, link: "/dashboard/send-item" },
  {
    id: 3,
    name: "Courier",
    icon: `${courier}`,
    link: "/dashboard/deliver-item",
  },
  {
    id: 4,
    name: "Profile",
    icon: `${profile}`,
    link: "/dashboard/history",
  },
];

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center bg-[#DCD9D9] z-50">
      {" "}
      <div className="w-full px-10 flex justify-between items-center h-[75px]">
        {bottomNav.map((item) => (
          <div key={item.id} className="w-full flex flex-col items-center">
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <p className="text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
