export default function ImageComponent({ src, alt, fit, height }) {
	return (
		<img
			className={`w-full h-${height} object-${fit || "cover"}`}
			src={src}
			alt={alt}
		/>
	);
}
