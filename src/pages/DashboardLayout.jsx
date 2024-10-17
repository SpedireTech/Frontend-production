import React from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
	return (
		<div className="flex w-full max-w-full">
			<div className="hidden lg:flex lg:w-[20%]">
				<SideBar />
			</div>
			<div className=" md:w-full lg:w-[80%]">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
