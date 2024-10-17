import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Verify from "../../assets/green-verify.svg";
import cancel from "../../assets/blue-cancel.svg";
import Call from "../../assets/call-icon.svg";

const CourierMatching = () => {
	const navigate = useNavigate();
	const [selectedCourier, setSelectedCourier] = useState(null);
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

	const couriers = [
		{
			id: 1,
			firstname: "DanJuman",
			lastname: "Idris",
			phoneNumber: "08123456789",
			imageUrl:
				"https://www.shutterstock.com/shutterstock/photos/202196248/display_1500/stock-photo-portrait-of-a-smiling-african-man-on-grya-background-202196248.jpg", // Placeholder, replace with actual image URLs
			rating: 4,
			location: "Ketu Lagos",
			time: "4 mins",
			deliveries: 20,
		},
		{
			id: 2,
			firstname: "Frank",
			lastname: "Idowu",
			phoneNumber: "08123456789",
			imageUrl:
				"https://as1.ftcdn.net/v2/jpg/03/91/34/72/1000_F_391347204_XaDg0S7PtbzJRoeow3yWO1vK4pnqBVQY.jpg",
			rating: 5,
			location: "Ketu Lagos",
			time: "3 mins",
			deliveries: 50,
		},
		{
			id: 3,
			firstname: "Owolabi",
			lastname: " Adedayo",
			phoneNumber: "08123456789",
			imageUrl:
				"https://media.istockphoto.com/id/1389465839/photo/shot-of-a-young-businesswoman-using-a-digital-tablet-in-her-office.jpg?s=1024x1024&w=is&k=20&c=Dn8if5r1smnWtWJRDqJPPDhYaBO7JV4Fj9PlJIHyJMY=",
			rating: 4,
			location: "Ketu Lagos",
			time: "5 mins",
			deliveries: 2,
		},
	];

	const handleCourierClick = (courier) => {
		setSelectedCourier(courier);
	};

	const closeSelectedCourierModal = () => {
		setSelectedCourier(null);
	};

	const closeConfirmModal = () => {
		setIsConfirmModalOpen(false);
	};
	const handleContinueClick = () => {
		setIsConfirmModalOpen(true);
	};

	const handleConfirmation = (response) => {
		if (response === "Yes") {
			toast.success(`Kindly wait for the courier to confirm the agreed price`, {
				duration: 9000,
				position: "top-right",
				style: {
					background: "#1E3A8A",
					color: "#fff",
				},
			});
			closeConfirmModal();
			closeSelectedCourierModal();
			navigate("/dashboard");
		} else if (response === "No") {
			setIsConfirmModalOpen(false);
		}
	};

	return (
		<div className="max-w-sm items-start h-full xl:h-[920px] 2xl:h-[1200px] bg-white shadow-md rounded-lg p-6">
			<h2 className="text-2xl text-gray font-semibold mb-4">
				Get matched to a courier
			</h2>

			<div
				className="mb-12 rounded-lg py-3 pl-2 text-gray"
				style={{ border: "1px solid #ccc" }}
			>
				<p className="block  mb-2 font-light">Order name</p>
				<h1 className=" text-2xl mb-2  font-medium">Hand bag</h1>
				<p className=" block font-normal">Reference ID: 2376677488</p>
			</div>

			{couriers.map((courier) => (
				<div
					key={courier.id}
					className="flex flex-col relative items-center h-36 justify-between bg-[#F2F2F2] border-2 border-[#ccc] rounded-lg mb-12 cursor-pointer"
					onClick={() => handleCourierClick(courier)}
				>
					<div className=" absolute left-1/2 transform -translate-x-1/2 -top-8">
						<img
							src={courier.imageUrl}
							alt={courier.firstname}
							className="w-20 h-20 rounded-full  bg-white border-[6px] border-[#B3CBE9]"
						/>
					</div>
					<div>
						<h3 className="font-semibold mt-16">
							{courier.firstname} {courier.lastname}
						</h3>
					</div>

					<div className="flex justify-around text-[#fbfbfb] rounded-lg w-full bg-[#041E40]">
						<span className="mr-4 ">⭐ {courier.rating}</span>
						<span className="text-sm">{courier.location}</span>
						<span className="text-sm ">{courier.time}</span>
					</div>
				</div>
			))}

			{selectedCourier && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-[#f2f2f2] rounded-lg shadow-lg py-6 max-w-sm w-full relative">
						<button
							className="absolute top-6 right-4 "
							onClick={closeSelectedCourierModal}
						>
							<img src={cancel} alt="close" className="w-5 h-5 rounded-full" />
						</button>

						<div className="text-center absolute left-1/2 transform -translate-x-1/2 -top-10">
							<img
								src={selectedCourier.imageUrl}
								alt={selectedCourier.firstname}
								className="w-24 h-24 rounded-full  bg-white border-[6px] border-[#B3CBE9] mx-auto"
							/>
						</div>
						<div className=" flex flex-col rounded-lg bg-white justify-center items-center mt-12">
							<h3 className="text-xl font-semibold mt-2">
								{selectedCourier.firstname} {selectedCourier.lastname}
							</h3>
							<a href={`tel:+234${selectedCourier.phoneNumber.slice(1)}`}>
								<div className="flex justify-center items-center">
									<img
										src={Call}
										alt="close"
										className="w-5 h-5 rounded-full mr-2"
									/>
									{selectedCourier.phoneNumber}
								</div>
							</a>

							<div className="flex justify-center items-center space-x-4 mt-1">
								<span className="text-[#606060] font-bold">
									⭐ {selectedCourier.rating}
								</span>
								<span className="text-gray">
									{selectedCourier.deliveries} deliveries
								</span>
							</div>
						</div>
						<div className=" flex rounded-lg p-3 bg-white justify-center items-center mt-2">
							<img
								src={Verify}
								alt="close"
								className="w-12 h-12 rounded-full"
							/>
							<p className="font-normal text-[10px] mr-2">
								All spedire couriers have verified IDs and phone numbers
							</p>
						</div>

						<div className="flex w-full items-center justify-center mt-6">
							<button
								className="w-3/4 bg-blue-600 text-white py-2 rounded-md"
								onClick={handleContinueClick}
							>
								Continue with {selectedCourier.firstname}
							</button>
						</div>
					</div>
				</div>
			)}
			{isConfirmModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-[#f2f2f2] rounded-lg shadow-lg p-6 max-w-sm w-full">
						<div className="text-center">
							<h3 className="text-xl font-semibold mb-4">
								Kindly confirm you have contacted the courier
							</h3>

							<div className="flex justify-around mt-6">
								<button
									className="bg-blue-600 text-white py-2 px-6 rounded-md"
									onClick={() => handleConfirmation("Yes")}
								>
									Yes
								</button>
								<button
									className="bg-transparent text-blue-600 border-2 border-blue-600 py-2 px-6 rounded-md"
									onClick={() => handleConfirmation("No")}
								>
									No
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CourierMatching;
