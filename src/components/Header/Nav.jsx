import React, { useState } from "react";
import logo from "../../assets/spedire.png";
import Button from "../Button/Button";

const navData = [
  { id: 1, name: "home" },
  { id: 2, name: "about us" },
  { id: 3, name: "track delivery" },
  { id: 4, name: "resources" },
  { id: 5, name: "login" },
];

const Nav = () => {
  const [active, setActive] = useState("home");
  const handleClick = (name) => {
    setActive(name);
  };
  return (
    <nav className="p-8 w-full max-h-[100px]">
      <div className="hidden md:hidden lg:flex w-full h-[60px] items-center gap-x-20 xl:gap-x-48">
        <div className="flex justify-center items-center h-full w-[20%]">
          <img src={logo} alt="logo" className="h-full" />
        </div>
        <div className="flex items-center justify-between w-full">
          {navData.map((item) => (
            <p
              key={item.id}
              className={`font-hg text-[20px] xl:text-[24px] capitalize cursor-pointer ${
                active === item.name ? "text-active" : "text-inactive"
              } hover:text-active`}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </p>
          ))}
          <Button text={"Get started"} width={"168px"} height={"48px"} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
