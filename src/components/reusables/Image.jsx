export default function ImageComponent({ src, alt, fit, height, width }) {
	return (
		<img
			className={`w-${width} h-${height} object-${fit || "cover"}`}
			src={src}
			alt={alt}
		/>
	);
}
