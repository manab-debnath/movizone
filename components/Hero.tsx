import React from "react";
import { Star } from "lucide-react";

interface propTypes {
	title: String;
	caption: String;
	rating: String;
	backdrop_path: String;
}

export const Hero = ({ title, caption, rating, backdrop_path }: propTypes) => {
	const url = `http://image.tmdb.org/t/p/w500${backdrop_path}`;

	return (
		<div className="relative h-[500px] md:h-[600px] w-screen overflow-hidden rounded">
			<div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 md:to-transparent z-10" />

			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${url})`,
				}}
			/>

			<div className="relative z-20 h-full max-w-[1400] mx-auto px-4 flex lg:flex-col justify-center pb-24 md:pb-0">
				<div className="flex lg:justify-between items-center mb-6 mt-auto lg:mt-0">
					<div className="max-w-xl md:max-w-2xl">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
							{title}
						</h1>
						<p className="text-gray-200 text-sm md:text-base lg:text-lg mb-6 md:mb-8">
							{caption}
						</p>
						<button className="bg-purple-600 text-white px-8 md:px-12 py-2.5 md:py-3 rounded-lg hover:bg-purple-700 transition-colors">
							Watch
						</button>
					</div>

					<div className="relative w-32 h-32 md:w-72 md:h-72 rounded-xl md:rounded-2xl overflow-hidden hidden lg:block">
						<img
							src={url}
							alt="Movie Poster"
							className="w-full h-full object-cover"
						/>
						<div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-800 text-white rounded-lg px-2 md:px-3 py-0.5 md:py-1 flex items-center gap-1">
							<Star size={14} className="fill-white md:w-4 md:h-4" />
							<span className="text-sm md:text-base font-bold">{rating}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
