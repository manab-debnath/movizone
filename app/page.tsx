import { Hero } from "@/components/Hero";
import { MovieCard } from "@/components/MovieCard";
import { SectionHeader } from "@/components/SectionHeader";
import { PosterCard } from "@/components/PosterCard";
import { getList } from "@/config/index";

type SectionProps = {
	children: React.ReactNode;
	className?: string;
};

type GridProps = {
	children: React.ReactNode;
	columns?: string;
};

export default async function Home() {
	const topRatedMovieList = await getList({
		path: "movie/top_rated?language=en-US&page=1",
	});

	const popularTVSeries = await getList({
		path: "tv/popular?language=en-US&page=1",
	});

	const popularMovieList = await getList({
		path: "movie/popular?language=en-US&page=1",
	});

	const nowPlayingMovieList = await getList({
		path: "movie/now_playing?language=en-US&page=1",
	});

	const trendingList = await getList({
		path: "trending/movie/day?language=en-US",
	});

	// Reusable section container component
	const Section = ({ children, className = "" }: SectionProps) => (
		<div className="w-full px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
			<div className="flex flex-col gap-6 my-8">{children}</div>
		</div>
	);

	// Reusable grid component with centered items
	const Grid = ({
		children,
		columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7",
	}: GridProps) => (
		<div className={`grid ${columns} gap-4 auto-rows-fr justify-items-center`}>
			{children}
		</div>
	);

	return (
		// slow this page for Loading testing (with set timeout)

		<main className="min-h-screen bg-[#1B1B1B]">
			<Hero
				title={nowPlayingMovieList.results[0].title}
				caption={nowPlayingMovieList.results[0].overview}
				rating={nowPlayingMovieList.results[0].vote_average.toFixed(1)}
				backdrop_path={nowPlayingMovieList.results[0].backdrop_path}
			/>

			<Section>
				<SectionHeader title="TRENDING" />
				<Grid columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
					{trendingList.results.slice(0, 14).map((item: any) => (
						<div key={item.id} className="w-full flex justify-center">
							<PosterCard
								backdrop_path={item.backdrop_path}
								title={item.title}
								id={item.id}
							/>
						</div>
					))}
				</Grid>
			</Section>

			<Section>
				<SectionHeader title="NEW RELEASES" />
				<Grid columns="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
					{nowPlayingMovieList.results.slice(1, 15).map((item: any) => (
						<div key={item.id} className="w-full flex justify-center">
							<PosterCard
								backdrop_path={item.backdrop_path}
								title={item.title}
								id={item.id}
							/>
						</div>
					))}
				</Grid>
			</Section>

			<Section>
				<SectionHeader title="TOP RATED" />
				<Grid>
					{topRatedMovieList.results.slice(0, 14).map((item: any) => (
						<div key={item.id} className="w-full flex justify-center">
							<MovieCard
								poster_path={item.poster_path}
								title={item.title}
								id={item.id}
								pathname="movies"
							/>
						</div>
					))}
				</Grid>
			</Section>

			<Section>
				<SectionHeader title="POPULAR SERIES" />
				<Grid>
					{popularTVSeries.results.slice(0, 14).map((item: any) => (
						<div key={item.id} className="w-full flex justify-center">
							<MovieCard
								poster_path={item.poster_path}
								title={item.name}
								id={item.id}
								pathname="series"
							/>
						</div>
					))}
				</Grid>
			</Section>

			<Section>
				<SectionHeader title="POPULAR MOVIES" href="/movies" />
				<Grid>
					{popularMovieList.results.slice(0, 14).map((item: any) => (
						<div key={item.id} className="w-full flex justify-center">
							<MovieCard
								poster_path={item.poster_path}
								title={item.title}
								id={item.id}
								pathname="movies"
							/>
						</div>
					))}
				</Grid>
			</Section>
		</main>
	);
}
