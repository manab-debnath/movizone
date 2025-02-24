import { ClientPagination } from "@/components/ClientPaginationProps";
import { MovieCard } from "@/components/MovieCard";
import { getList } from "@/config/index";

interface MoviePageProps {
	searchParams: { page?: string };
}

export default async function Movies({ searchParams }: MoviePageProps) {
	const currentPage = Number(searchParams.page) || 1;

	const data = await getList({
		path: `discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=${currentPage}`,
	});

	return (
		<div className="w-full mt-32">
			{/* Responsive Grid for Movie Cards */}
			<div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-12 mt-4 place-items-center">
				{data.results.map((item: any) => (
					<MovieCard
						key={item.id}
						poster_path={item.poster_path}
						title={item.title}
						id={item.id}
						pathname={"movies"}
					/>
				))}
			</div>

			{/* Pagination - Centered */}
			<div className="flex items-center justify-center mt-16">
				<ClientPagination
					currentPage={currentPage}
					totalPages={data.total_pages}
				/>
			</div>
		</div>
	);
}
