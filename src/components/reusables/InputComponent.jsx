export default function InputComponent({
	label,
	type,
	placeholder,
	required,
	value,
	onChange,
	readOnly = false,
	info,
}) {
	return (
		<div className="flex flex-col w-full gap-2 ">
			<label className="text-[#4B4B4B] text-xs md:text-base font-semibold">
				{label}
			</label>
			<input
				type={type}
				readOnly={readOnly}
				required={required}
				className="w-full px-2.5 py-3.5 bg-[#F9F9F9] text-xs md:text-base border border-[#ccc] text-[#4B4B4B] focus:outline-none focus:ring-1 focus:ring-[#ccc] rounded-[14px]"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{info && <p className="text-gray-500 text-sm mt-1">{info}</p>}
		</div>
	);
}
