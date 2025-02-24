import { getList } from "@/config/index";

interface DetailsPageProps {
	params: {
        urlTitle: string;
		id: string;
	};
}

export default async function MovieDetails({ params }: DetailsPageProps) {
	const { id } = params;

	const details = await getList({
		path: `movie/${id}?language=en-US`,
	});

	return (
		<div className=" bg-[#1B1B1B] text-white p-8 pt-36">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row gap-8">
					<img
						src={`http://image.tmdb.org/t/p/w500${details.poster_path}`}
						alt={details.title}
						className="w-full rounded-lg"
					/>
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold">{details.title}</h1>
						<p className="text-lg text-gray-300">{details.tagline}</p>
						<p className="text-sm text-gray-400">{details.release_date}</p>
						<p className="text-base">{details.overview}</p>
						<div className="flex flex-wrap gap-2 mt-4">
							{details.genres.map((genre: any) => (
								<span
									key={genre.id}
									className="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
								>
									{genre.name}
								</span>
							))}
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Production Companies</h3>
							<div className="flex flex-wrap gap-4 mt-2">
								{details.production_companies.map((company: any) => (
									<div key={company.id} className="flex items-center gap-2">
										{company.logo_path && (
											<img
												src={`http://image.tmdb.org/t/p/w200${company.logo_path}`}
												alt={company.name}
												className="w-12 h-12 object-contain"
											/>
										)}
										<span>{company.name}</span>
									</div>
								))}
							</div>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Belongs to Collection</h3>
							{details.belongs_to_collection && (
								<div className="flex items-center gap-4 mt-2">
									<img
										src={`http://image.tmdb.org/t/p/w200${details.belongs_to_collection.poster_path}`}
										alt={details.belongs_to_collection.name}
										className="w-24 h-36 object-cover rounded-lg"
									/>
									<div>
										<h4 className="text-lg font-bold">
											{details.belongs_to_collection.name}
										</h4>
										<img
											src={`http://image.tmdb.org/t/p/w500${details.belongs_to_collection.backdrop_path}`}
											alt={details.belongs_to_collection.name}
											className="w-full h-36 object-cover rounded-lg mt-2"
										/>
									</div>
								</div>
							)}
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Additional Information</h3>
							<p className="text-base">
								<strong>Budget:</strong> ${details.budget.toLocaleString()}
							</p>
							<p className="text-base">
								<strong>Revenue:</strong> ${details.revenue.toLocaleString()}
							</p>
							<p className="text-base">
								<strong>Runtime:</strong> {details.runtime} minutes
							</p>
							<p className="text-base">
								<strong>Vote Average:</strong> {details.vote_average.toFixed(1)}
							</p>
							<p className="text-base">
								<strong>Vote Count:</strong> {details.vote_count}
							</p>
							<p className="text-base">
								<strong>Homepage:</strong>{" "}
								<a
									href={details.homepage}
									target="_blank"
									rel="noopener noreferrer"
									className="text-red-500 hover:underline"
								>
									{details.homepage}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
