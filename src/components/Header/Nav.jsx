import React, { useEffect, useState } from "react";
import logo from "../../assets/spedire.png";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

const navData = [
  { id: 1, name: "home", link: "/" },
  { id: 2, name: "about us", link: "/about" },
  { id: 3, name: "track delivery", link: "/track_delivery" },
  { id: 4, name: "resources", link: "/resources" },
  { id: 5, name: "login", link: "/login" },
];

const Nav = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = (name, link) => {
    setActive(name);
    // Navigate to specific routes when certain nav items are clicked
    navigate(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // className={`p-4 lg:p-8 w-full max-h-[100px] bg-white ${
      //   isScrolled ? "sticky top-0 shadow-lg z-50" : ""
      // }`}
      className={`p-4 lg:p-8 w-full max-h-[100px] bg-white fixed top-0 shadow-lg z-50`}
    >
      {/* Desktop view */}
      <div className="hidden md:hidden lg:flex w-full h-[60px] items-center gap-x-20 xl:gap-x-48">
        <div className="flex justify-center items-center h-full w-[20%]">
          <img src={logo} alt="logo" className="h-full" />
        </div>
        <div className="flex items-center justify-between w-full 2xl:w-[64%]">
          {navData.map((item) => (
            <p
              key={item.id}
              className={`font-hg text-[20px] xl:text-[24px] capitalize cursor-pointer ${
                active === item.name ? "text-active" : "text-inactive"
              } hover:text-active`}
              onClick={() => handleClick(item.name, item.link)}
            >
              {item.name}
            </p>
          ))}
          <Link to="/signup">
            <Button text={"Get started"} width={"168px"} height={"48px"} />
          </Link>
        </div>
      </div>

      {/* Mobile and tablet view */}
      <div className="flex w-full justify-between items-center lg:hidden h-16">
        <img src={logo} alt="logo" />
        <div className="bg-lightBlue w-[48px] flex justify-center items-center h-[48px] rounded-full">
          <button
            id="menu-btn"
            className={`flex mt-2 justify-center items-center hamburger focus:outline-none ${
              open ? "open" : ""
            }`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <div
          id="menu"
          className={`${
            open ? "" : "hidden"
          } absolute z-10 flex flex-col items-center self-end py-16 mt-4 space-y-10 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-gold`}
        >
          {navData.map((item) => (
            <p
              key={item.id}
              className={`font-hg text-[20px] xl:text-[24px] capitalize cursor-pointer ${
                active === item.name ? "text-active" : "text-inactive"
              } hover:text-active`}
              onClick={() => handleClick(item.name, item.link)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
