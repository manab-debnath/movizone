export default function PosterCardSkeleton() {
	return (
		<div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-48 rounded-lg bg-transparent">
			<div className="absolute inset-0 bg-gray-300 skeleton opacity-15"/>

			<div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4"></div>
		</div>
	);
}
