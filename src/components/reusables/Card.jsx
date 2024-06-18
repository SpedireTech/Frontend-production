import React from "react";
import PropTypes from "prop-types";

const Card = ({
  text,
  amount,
  icon: Icon,
  backgroundColor,
  buttonBg,
  textColor,
  chartIcon: IconChart,
  iconColor,
  iconColor2,
}) => {
  return (
    <div
      className="max-w-[302px] h-[151px] rounded-xl shadow-bottomCustom"
      style={{ backgroundColor }}
    >
      <div className="w-full h-full rounded-lg p-3">
        <div className="flex items-center gap-x-4">
          <div className="bg-greyLight w-[27.61px] h-[27.61px] rounded-full flex justify-center items-center">
            {Icon && (
              <Icon
                className="w-[16.56px] h-[16.56px]"
                style={{ color: iconColor }}
              />
            )}
          </div>
          <p className="text-gray capitalize text-[16px] font-hg font-semibold">
            {text}
          </p>
        </div>
        <div className="w-full h-[40px] mt-3 flex justify-center">
          <p className="text-gray capitalize text-4xl font-hg font-semibold">
            {amount}
          </p>
        </div>
        <div className="mt-3 flex w-full justify-between">
          <div className="flex items-center gap-x-1">
            <p
              className="capitalize text-[10px] font-inter font-normal"
              style={{ color: textColor }}
            >
              last week
            </p>
            <div className="bg-greyLight w-[58px] h-[20.66px] gap-x-0.5 rounded-full flex justify-center items-center">
              {IconChart && (
                <IconChart
                  className="w-[16.56px] h-[16.56px]"
                  style={{ color: iconColor2 }}
                />
              )}
              <p
                className="text-[10px] font-hg font-normal"
                style={{ color: iconColor2 }}
              >
                +10%
              </p>
            </div>
          </div>
          <button
            className="w-[43.8px] h-[26.8px] rounded-md text-white text-[11px] font-hg font-normal flex justify-center items-center"
            style={{ backgroundColor: buttonBg }}
          >
            Views
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
