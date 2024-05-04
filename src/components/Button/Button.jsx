import React from "react";

const Button = ({ width, text, height }) => {
  return (
    <div>
      <button
        style={{ width: width, height: height }}
        className={`text-md font-hk md:text-[24px] lg:text-[20px] xl:text-[20px] bg-button text-white rounded-xl flex justify-center items-center outline-none`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
