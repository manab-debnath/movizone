import { ClientPagination } from "@/components/ClientPaginationProps";
import { MovieCard } from "@/components/MovieCard";
import { getList } from "@/config/index";

type SearchParams = Promise<{ page?: string }>;

export default async function Anime({ searchParams }: { searchParams: SearchParams }) {
	const {page} = await searchParams
	const currentPage = Number(page) || 1;

	const animeList = await getList({
		path: `/search/movie?query=anime&include_adult=false&language=en-US&page=${currentPage}`,
	});

	return (
		<div className="w-full mt-32">
			<div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-12 mt-4 place-items-center">
				{animeList.results.map((item: any) => (
					<MovieCard
						key={item.id}
						poster_path={item.poster_path}
						title={item.title}
						id={item.id}
						pathname={"anime"}
					/>
				))}
			</div>
			<div className="flex items-center justify-center mt-20">
				<ClientPagination
					totalPages={animeList.total_pages}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
}
