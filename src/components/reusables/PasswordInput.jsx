import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

export default function PasswordInput({ label, value, placeholder, onChange }) {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	return (
		<div className="flex flex-col w-full gap-2 mt-2 ">
			<label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
				{label}
			</label>
			<div className="relative w-full rounded-[14px] shadow-sm">
				<input
					type={show ? "text" : "password"}
					className="w-full px-2.5 py-3.5 bg-[#F9F9F9] border text-xs md:text-base border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				<button
					type="button"
					className="absolute right-4 top-4 rounded-r-md focus:outline-none"
					onClick={handleClick}
				>
					{!show ? <FaEyeSlash /> : <FaEye />}
				</button>
			</div>
		</div>
	);
}
