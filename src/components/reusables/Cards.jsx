import React from "react";
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
} from "react-icons/hi2";
import { IoIosSend, IoMdPause } from "react-icons/io";
import Card from "./Card";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 gap-x-3 w-[618px]">
      <Card
        text={"total items sent"}
        amount={0}
        chartIcon={HiMiniArrowTrendingDown}
        backgroundColor="#792FF34D"
        buttonBg={"#792FF34D"}
        textColor={"#330580"}
        icon={IoIosSend}
        iconColor={"#330580"}
        iconColor2={"#DF4D4D"}
      />
      <Card
        text={"total successful delivery"}
        amount={0}
        chartIcon={HiMiniArrowTrendingUp}
        backgroundColor="#A1EF204D"
        buttonBg={"#A1EF204D"}
        textColor={"#466E07"}
        icon={CiDeliveryTruck}
        iconColor={"#A1EF20"}
        iconColor2={"#13DEB9"}
      />
      <Card
        text={"total cancelled delivery"}
        amount={0}
        chartIcon={HiMiniArrowTrendingUp}
        backgroundColor="#FB18184D"
        buttonBg={"#C909154D"}
        textColor={"#890303"}
        icon={MdCancel}
        iconColor={"#C90915"}
        iconColor2={"#13DEB9"}
      />
      <Card
        text={"pending delivery"}
        amount={0}
        chartIcon={HiMiniArrowTrendingDown}
        backgroundColor="#B7E0FB"
        buttonBg={"#185CFB4D"}
        textColor={"#054E7E"}
        icon={IoMdPause}
        iconColor={"#18A0FB"}
        iconColor2={"#DF4D4D"}
      />
    </div>
  );
};

export default Cards;
