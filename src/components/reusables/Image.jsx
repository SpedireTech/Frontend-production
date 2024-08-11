export default function ImageComponent({ src, alt, fit, height, width, mt }) {
	return (
		<img
			className={`w-${width} h-${height} mt-${mt} object-${fit || "cover"}`}
			src={src}
			alt={alt}
		/>
	);
}
