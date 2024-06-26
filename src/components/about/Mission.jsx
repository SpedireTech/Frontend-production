import React from "react";
import mission from "../../assets/about/mission.svg";

const Mission = () => {
	return (
		<div className="flex-grow flex flex-col md:flex-row p-5 md:px-10 md:py-10  ">
			<div className="flex-grow flex flex-col h-[379px] md:mr-8 md:w-2/5 md:gap-4">
				<div className=" text-base lg:text-[32px] text-[#4B4B4B] font-hg font-medium">
					Our Mission
				</div>

				<div className="text-[20px] lg:text-[40px] text-[#041E40] font-hg font-bold">
					We are a team of Creators
				</div>
				<div className="text-base lg:text-[20px] text-[#4B4B4B] font-hg font-normal">
					Our mission is to revolutionize the logistics landscape in Lagos,
					Nigeria by harnessing the power of community, leveraging peer-to-peer
					interactions to solve the logistics challenges of today while paving
					the way for a greener, more connected tomorrow. By doing so, Spedire
					commits to reducing logistics costs, improving delivery times, and
					enhancing the overall experience for both senders and couriers. Our
					mission is grounded in the belief that together, we can turn every
					journey into a delivery, and every delivery into an opportunity for
					positive impact.
				</div>
			</div>
			<div className="flex items-end justify-end md:w-1/2">
				<img src={mission} alt="mission" className="" />
			</div>
		</div>
	);
};

export default Mission;
