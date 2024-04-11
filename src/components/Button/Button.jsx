import React from "react";

const Button = ({ width, text, height }) => {
  return (
    <div>
      <button
        style={{ width: width, height: height }}
        className={`font-hk text-[20px] xl:text-[24px] bg-button text-white rounded-lg capitalize flex justify-center items-center outline-none`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
