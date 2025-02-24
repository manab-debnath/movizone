import { getList } from "@/config/index";

interface SeriesPageProps {
	params: {
		urlTitle: string;
		id: string;
	};
}

export default async function SeriesDetail({ params }: SeriesPageProps) {
	const { id } = params;

	const details = await getList({
		path: `tv/${id}?language=en-US`,
	});

	return (
		<div className="min-h-screen bg-[#1B1B1B] text-white p-8 mt-32">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row gap-8">
					<img
						src={`http://image.tmdb.org/t/p/w500${details.poster_path}`}
						alt={details.name}
						className="w-[564] rounded-lg h-[264] object-contain"
					/>
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold">{details.name}</h1>
						<p className="text-lg text-gray-300">{details.tagline}</p>
						<p className="text-sm text-gray-400">{details.first_air_date}</p>
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
							<h3 className="text-xl font-semibold">Created By</h3>
							<div className="flex flex-wrap gap-4 mt-2">
								{details.created_by.map((creator: any) => (
									<div key={creator.id} className="flex items-center gap-2">
										{creator.profile_path && (
											<img
												src={`http://image.tmdb.org/t/p/w200${creator.profile_path}`}
												alt={creator.name}
												className="w-12 h-12 object-contain rounded-full"
											/>
										)}
										<span>{creator.name}</span>
									</div>
								))}
							</div>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Networks</h3>
							<div className="flex flex-wrap gap-4 mt-2">
								{details.networks.map((network: any) => (
									<div key={network.id} className="flex items-center gap-2">
										{network.logo_path && (
											<img
												src={`http://image.tmdb.org/t/p/w200${network.logo_path}`}
												alt={network.name}
												className="w-12 h-12 object-contain"
											/>
										)}
										<span>{network.name}</span>
									</div>
								))}
							</div>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Seasons</h3>
							<div className="flex flex-wrap gap-4 mt-2">
								{details.seasons.map((season: any) => (
									<div key={season.id} className="flex flex-col items-center">
										{season.poster_path && (
											<img
												src={`http://image.tmdb.org/t/p/w200${season.poster_path}`}
												alt={season.name}
												className="w-24 h-36 object-cover rounded-lg"
											/>
										)}
										<span className="mt-2">&#x2022; {season.name}</span>
									</div>
								))}
							</div>
						</div>
						<div className="mt-4">
							<h3 className="text-xl font-semibold">Additional Information</h3>
							<p className="text-base">
								<strong>Number of Episodes:</strong>{" "}
								{details.number_of_episodes}
							</p>
							<p className="text-base">
								<strong>Number of Seasons:</strong> {details.number_of_seasons}
							</p>
							<p className="text-base">
								<strong>Vote Average:</strong> {details.vote_average}
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
