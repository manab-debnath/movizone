import Link from "next/link";
import React from "react";

interface props {
	details: any;
	setIsSearchBarActive: React.Dispatch<React.SetStateAction<boolean>>;
	setInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchCard({
	details,
	setIsSearchBarActive,
	setInput,
}: props) {
	const title = details.title?.toLowerCase().replaceAll(" ", "+");

	return (
		<Link
			href={`/movies/${title}/${details.id}`}
			className="w-full bg-transparent flex cursor-pointer transition-all duration-300 hover:text-red-500 ease-in-out group mb-4 gap-4 rounded"
			onClick={() => {
				setIsSearchBarActive(false);
				setInput("");
			}}
		>
			<img
				src={
					details.poster_path
						? `http://image.tmdb.org/t/p/w500${details.poster_path}`
						: `/coming-soon.jpg`
				}
				alt="coming soon"
				className="rounded h-20 w-14 object-cover"
			/>
			<div className="flex flex-col">
				<p className="text-lg font-bold">
					{details.title ? details.title : "Not found"}
				</p>
				<p>
					{details.overview && details.overview.length > 45
						? details.overview.slice(0, 45) + "..."
						: details.overview}
				</p>
			</div>
		</Link>
	);
}
