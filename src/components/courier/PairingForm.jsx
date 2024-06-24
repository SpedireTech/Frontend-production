import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import spedire from "../../assets/spedire.png";
import InputComponent from "../../components/reusables/InputComponent";
import { pairCourier } from "../../util/http";

const PairingForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		currentLocation: "",
		destination: "",
		weight: "",
		category: "",
	});
	async function submitHandler() {
		const currentToastId = toast.loading("Loading...");
		if (
			!formData.currentLocation ||
			!formData.destination ||
			!formData.weight ||
			!formData.category
		) {
			toast.error("Kindly fill out all fields", {
				id: currentToastId,
				position: "top-right",
				duration: 9000,
			});
			return;
		}

		const data = {
			currentLocation: formData.currentLocation,
			destination: formData.destination,
			weight: formData.weight,
			category: formData.category,
		};

		try {
			const res = await pairCourier(data);
			toast.success(`${res?.message || "Successfully Paired"}`, {
				id: currentToastId,
				duration: 3000,
				position: "top-right",
			});
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
		<div className="min-h-screen relative flex items-center justify-center bg-gray-100">
			<div className="top-4 left-4 fixed">
				<img src={spedire} alt="Spedire" className="h-10" />
			</div>
			<div className=" bg-white p-8 rounded-lg shadow-lg lg:max-w-[42rem] max-w-md md:w-full md:mt-16">
				<button
					className="fixed top-4 right-4"
					onClick={() => navigate("/dashboard")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h2 className="text-2xl font-semibold mb-6">Courier pairing Form</h2>
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
					<div className="mb-4">
						<label className="block text-base font-semibold text-[#4B4B4B] mb-2">
							Category
						</label>
						<select
							onChange={(e) =>
								setFormData({ ...formData, category: e.target.value })
							}
							value={formData.category}
							className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-[14px]"
						>
							<option>Electronics</option>
							<option>Clothing</option>
							<option>Books</option>
							<option>Other</option>
						</select>
					</div>
					<div className="mb-4">
						<label className="block text-[#4B4B4B] text-base font-semibold mb-2">
							Preferred Item Weight
						</label>
						<select
							onChange={(e) =>
								setFormData({ ...formData, weight: e.target.value })
							}
							value={formData.weight}
							className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-[14px]"
						>
							<option>0-5kg</option>
							<option>5-10kg</option>
							<option>10-15kg</option>
							<option>15-20kg</option>
						</select>
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
		</div>
	);
};

export default PairingForm;
