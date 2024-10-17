import React from "react";
import map from "../../assets/Map.svg";

const Map = () => {
	return (
		<div className="w-[73%] mx-auto lg:max-w-[30%] h-[410px] p-4 md:p-0 rounded-lg lg:mx-0">
			<img
				src={map}
				alt="No deliveries ongoing"
				className="w-full h-full object-cover rounded-lg "
			/>
		</div>
	);
};

export default Map;
