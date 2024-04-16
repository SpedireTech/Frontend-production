export default function InputComponent({
	label,
	type,
	placeholder,
	value,
	onChange,
	readOnly = false,
	info,
}) {
	return (
		<div className="flex flex-col mb-4 w-full">
			<label className="text-[#4B4B4B] text-sm font-medium mb-1">{label}</label>
			<input
				type={type}
				readOnly={readOnly}
				className="w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{info && <p className="text-gray-500 text-sm mt-1">{info}</p>}
		</div>
	);
}
