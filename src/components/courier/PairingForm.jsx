import React, { useState } from "react";
import spedire from "../../assets/spedire.png";
import InputComponent from "../../components/reusables/InputComponent";

const PairingForm = () => {
	const [formData, setFormData] = useState({
		currentLocation: "",
		destination: "",
	});

	return (
		<div className="min-h-screen relative flex items-center justify-center bg-gray-100">
			<div className="absolute top-4 left-4">
				<img src={spedire} alt="Spedire" className="h-10" />
			</div>
			<div className=" bg-white p-8 rounded-lg shadow-lg lg:max-w-[38rem] max-w-md md:w-full overflow-y-hidden">
				<button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
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
					<InputComponent
						label="Current Location"
						placeholder="Enter current location"
						type="text"
						onChange={(e) =>
							setFormData({ ...formData, currentLocation: e.target.value })
						}
						value={formData.currentLocation}
					/>
					<InputComponent
						label="Destination"
						placeholder="Enter Destination"
						type="text"
						onChange={(e) =>
							setFormData({ ...formData, destination: e.target.value })
						}
						value={formData.destination}
					/>

					<div className="mb-4">
						<label
							className="block text-base font-semibold text-[#4B4B4B] mb-2"
							htmlFor="category"
						>
							Category
						</label>
						<select
							id="category"
							className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-[14px]"
						>
							<option>Electronics</option>
							<option>Clothing</option>
							<option>Books</option>
							<option>Other</option>
						</select>
					</div>
					<div className="mb-4">
						<label
							className="block text-[#4B4B4B] text-base font-semibold mb-2"
							htmlFor="weight"
						>
							Preferred Item Weight
						</label>
						<select
							id="weight"
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
