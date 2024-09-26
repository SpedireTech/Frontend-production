import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarAlt,
  faSearch,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { getStoredItem } from "../../util/lib";
import { CiSearch } from "react-icons/ci";
import SideBar from "../../components/sidebar/SideBar";

const NavBarMobile = () => {
  const user = getStoredItem("user");
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = React.useState("");

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative flex flex-col p-4 bg-white">
      <div className="flex justify-between items-center w-full mb-2">
        <div className="flex w-1/5 h-9 items-center gap-x-3">
          <button
            id="menu-btn"
            className={`block hamburger md:hidden focus:outline-none ${
              open ? "open" : !open
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <CiSearch className="text-gray-400 font-normal w-6 h-6" />
        </div>
        <div className="lg:hidden">
          <div
            id="menu"
            className={`${
              open ? "sidebar-visible" : "sidebar-hidden"
            } absolute flex flex-col items-center w-72 top-16 -left-4`}
          >
            <SideBar />
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <span style={{ color: "#434040" }}>
            {isActive ? "Active" : "Offline"}
          </span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={toggleActive}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className="w-6 h-6"
              style={{ color: "#627891" }}
            />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <div
            className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: "#627891" }}
          >
            {user?.image ? (
              <img
                src={user?.image}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-white text-lg">
                {user?.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className="flex flex-col text-left mb-2"
        style={{ color: "#434040" }}
      >
        <div className="text-lg font-medium font-hg text-inactive">{`Welcome, ${user?.name} 👋`}</div>
        <p className="text-xs md:text-sm">
          Here’s what is happening in your Spedire account
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <div
          className="text-xl font-bold text-left font-hg"
          style={{ color: "#434040", fontSize: "18px" }}
        >
          Dashboard
        </div>
        <div
          className="flex items-center space-x-4 bg-light-blue-500 p-2 rounded-md relative"
          style={{ backgroundColor: "#cce7ff", color: "#434040" }}
        >
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="w-5 h-5 text-gray-500"
          />
          <span className="text-gray-700 mr-4">Monthly</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-3 h-3 text-gray-500 mt-3 right-2 top-1/2 transform -translate-y-1/2 ml-1"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
