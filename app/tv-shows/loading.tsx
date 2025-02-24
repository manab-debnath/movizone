import { MovieCardSkeleton } from "@/components/MovieCardSkeleton";

export default function Loading() {
	return (
		<div className="w-full mt-32">
			<div className="w-full px-72 flex flex-wrap justify-start items-start gap-12 mt-4">
				{Array.from({ length: 24 }).map((_, index) => (
					<MovieCardSkeleton key={index} />
				))}
			</div>
		</div>
	);
}
