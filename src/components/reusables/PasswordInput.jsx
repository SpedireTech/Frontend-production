import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

export default function PasswordInput({ label, value, onChange }) {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<div className="flex flex-col w-full">
			<label className="text-[#4B4B4B] text-sm font-medium mb-1">{label}</label>
			<div className="relative w-full border rounded-md shadow-sm">
				<input
					type={show ? "text" : "password"}
					className="w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-l-md"
					placeholder="Enter password"
					value={value}
					onChange={onChange}
				/>
				<button
					type="button"
					className="absolute right-3 top-3 rounded-r-md focus:outline-none"
					onClick={handleClick}
				>
					{!show ? <FaEyeSlash /> : <FaEye />}
				</button>
			</div>
		</div>
	);
}
