import { MovieCardSkeleton } from "@/components/MovieCardSkeleton";

export default function Loading() {
	return (
		<div className="w-full mt-32">
			<div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-12 mt-4 justify-items-center">
				{Array.from({ length: 24 }).map((_, index) => (
					<div key={index} className="w-full ml-8 sm:ml-0 flex justify-center">
						<MovieCardSkeleton />
					</div>
				))}
			</div>
		</div>
	);
}
