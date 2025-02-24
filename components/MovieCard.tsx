import Link from "next/link";

interface propTypes {
	poster_path: string;
	title: string;
	id?: number;
	pathname: string;
}

export const MovieCard = ({ poster_path, title, id, pathname }: propTypes) => {
	const urlTitle = title.toLowerCase().replaceAll(" ", "+");

	return (
		<Link
			className="card w-52 bg-transparent cursor-pointer transform transition-transform duration-300 hover:scale-105 group"
			href={`/${pathname}/${urlTitle}/${id}`}
		>
			<figure className="">
				<img
					src={
						poster_path
							? `http://image.tmdb.org/t/p/w500${poster_path}`
							: `/coming-soon.jpg`
					}
					alt="coming soon"
					className="rounded-xl w-36 h-52 md:h-full md:w-full object-cover"
				/>
			</figure>
			<div className="text-center mt-4">
				<p className="group-hover:text-red-500 transition-colors duration-500">
					{title}
				</p>
			</div>
		</Link>
	);
};
