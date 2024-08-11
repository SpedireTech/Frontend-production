import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import InputComponent from "../../components/reusables/InputComponent";
import { pairCourier } from "../../util/http";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeliveryInstructionsModal from "../../pages/sendItem/DeliveryInstructionsModal";
import { getStoredItem } from "../../util/lib";

const PairingForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		currentLocation: "",
		destination: "",
	});
	const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsInstructionsModalOpen(true);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	async function submitHandler(e) {
		e.preventDefault();
		const currentToastId = toast.loading("Loading...");
		if (!formData.currentLocation || !formData.destination) {
			toast.error("Kindly fill out all fields", {
				id: currentToastId,
				position: "top-right",
				duration: 9000,
			});
			return;
		}

		const data = {
			currentLocation: formData.currentLocation,
			destination: [formData.destination],
		};

		try {
			const res = await pairCourier(data);
			toast.success(`${res?.message || "Successfully Paired"}`, {
				id: currentToastId,
				duration: 3000,
				position: "top-right",
			});
			navigate("/dashboard");
		} catch (error) {
			toast.error(
				`${error?.response?.data.message || "something went wrong"}`,
				{
					id: currentToastId,
					duration: 3000,
					position: "top-right",
				}
			);
		}
	}

	return (
		<div className="flex w-full h-screen">
			<ToastContainer />
			{/* <div className="w-[20%] bg-blue-500">
        <SideBar />
      </div> */}
			<div className="fixed top-4 right-8 flex justify-end mb-4">
				<button
					onClick={() => navigate("/dashboard")}
					className="text-gray-500 hover:text-gray-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div className="w-full max-w-2xl p-4 ml-32 mt-10">
				<h2 className="text-2xl font-semibold mb-4">Courier pairing Form</h2>
				<p className="mb-6 text-[#4b4b4b]">
					Kindly enter the following details.
				</p>
				<form>
					<div className="mb-4">
						<InputComponent
							label="Current Location"
							placeholder="Enter current location"
							type="text"
							onChange={(e) =>
								setFormData({ ...formData, currentLocation: e.target.value })
							}
							value={formData.currentLocation}
						/>
					</div>
					<div className="mb-4">
						<InputComponent
							label="Destination"
							placeholder="Enter Destination"
							type="text"
							onChange={(e) =>
								setFormData({ ...formData, destination: e.target.value })
							}
							value={formData.destination}
						/>
					</div>
					<button
						type="submit"
						onClick={submitHandler}
						className="w-full bg-[#08418A] text-white px-2.5 py-3.5 rounded-[14px] hover:bg-opacity-80 transition duration-300"
					>
						Submit
					</button>
				</form>
			</div>
			<DeliveryInstructionsModal
				isOpen={isInstructionsModalOpen}
				closeModal={() => setIsInstructionsModalOpen(false)}
			/>
		</div>
	);
};

export default PairingForm;
