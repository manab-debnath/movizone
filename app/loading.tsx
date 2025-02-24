import { MovieCardSkeleton } from "@/components/MovieCardSkeleton";
import PosterCardSkeleton from "@/components/PosterCardSkeleton";

export default function Loading() {
	return (
		<div className="min-h-screen bg-[#1B1B1B]">
			{/* Hero Section Skeleton */}
			<div className="relative h-[500px] md:h-[600px] w-full skeleton bg-gray-300 opacity-15"></div>

			{/* Trending Section Skeleton */}
			<div className="px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
				<div className="flex flex-col gap-6 my-8">
					<div className="h-8 w-48 skeleton bg-gray-300 opacity-15"></div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4 place-items-center">
						{Array.from({ length: 14 }).map((_, index) => (
							<PosterCardSkeleton key={index} />
						))}
					</div>
				</div>
			</div>

			{/* New Releases Section Skeleton */}
			<div className="px-4 sm:px-6 lg:px-8 max-w-[2000px] mx-auto">
				<div className="flex flex-col gap-6 my-8">
					<div className="h-8 w-48 skeleton bg-gray-300 opacity-15"></div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4 place-items-center">
						{Array.from({ length: 14 }).map((_, index) => (
							<PosterCardSkeleton key={index} />
						))}
					</div>
				</div>
			</div>

			{/* Top Rated Section Skeleton */}
			<div className="px-4 sm:px-6 lg:px-8 max-w-[2000px] ml-14 sm:mx-auto">
				<div className="flex flex-col gap-6 my-8">
					<div className="h-8 w-48 skeleton bg-gray-300 opacity-15"></div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4 place-items-center">
						{Array.from({ length: 14 }).map((_, index) => (
							<MovieCardSkeleton key={index} />
						))}
					</div>
				</div>
			</div>

			{/* Popular Series Section Skeleton */}
			<div className="px-4 sm:px-6 lg:px-8 max-w-[2000px] ml-14 sm:mx-auto">
				<div className="flex flex-col gap-6 my-8">
					<div className="h-8 w-48 skeleton bg-gray-300 opacity-15"></div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 place-items-center">
						{Array.from({ length: 14 }).map((_, index) => (
							<MovieCardSkeleton key={index} />
						))}
					</div>
				</div>
			</div>

			{/* Popular Movies Section Skeleton */}
			<div className="px-4 sm:px-6 lg:px-8 max-w-[2000px] ml-14 sm:mx-auto">
				<div className="flex flex-col gap-6 my-8">
					<div className="h-8 w-48 skeleton bg-gray-300 opacity-15"></div>
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 place-items-center">
						{Array.from({ length: 14 }).map((_, index) => (
							<MovieCardSkeleton key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
