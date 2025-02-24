import Link from "next/link";

export const PosterCard = ({
	title,
	backdrop_path,
	id,
}: {
	title: string;
	backdrop_path: string;
	id?: number;
}) => {
	const urlTitle = title.toLowerCase().replaceAll(" ", "+");

	return (
		<Link
			className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-48 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
			href={`/movies/${urlTitle}/${id}`}
		>
			{/* Image */}
			<img
				src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
				alt={title}
				className="w-full h-full object-cover"
			/>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-100" />

			{/* Title */}
			<div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
				<h3 className="text-white text-xs sm:text-sm md:text-sm font-medium line-clamp-2">
					{title}
				</h3>
			</div>
		</Link>
	);
};
