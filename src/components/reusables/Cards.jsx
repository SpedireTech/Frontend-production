import React from "react";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { IoIosSend } from "react-icons/io";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <Card
        text={"total items sent"}
        amount={0}
        chartIcon={
          <HiMiniArrowTrendingDown className="w-[16.56px] h-[16.56px] text-sendPurple" />
        }
        background={"#792FF34D"}
        buttonBg={"#792FF34D"}
        textColor={"#330580"}
        icon={<IoIosSend className="w-[16.56px] h-[16.56px] text-sendPurple" />}
      />
    </div>
  );
};

export default Cards;
