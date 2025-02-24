import { ClientPagination } from "@/components/ClientPaginationProps";
import { MovieCard } from "@/components/MovieCard";
import { getList } from "@/config/index";

interface TVShowsPagesProps {
	searchParams: {
		page?: string;
	};
}

export default async function TVShows({ searchParams }: TVShowsPagesProps) {
	const currentPage = Number(searchParams.page) || 1;

	const tvList = await getList({
		path: `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
	});

	return (
		<div className="w-full mt-32">
			<div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-12 mt-4 place-items-center">
				{tvList.results.map((item: any) => (
					<MovieCard
						key={item.id}
						poster_path={item.poster_path}
						title={item.name}
						id={item.id}
						pathname={"tv-shows"}
					/>
				))}
			</div>
			<div className="flex items-center justify-center mt-20">
				<ClientPagination
					currentPage={currentPage}
					totalPages={tvList.total_pages}
				/>
			</div>
		</div>
	);
}
