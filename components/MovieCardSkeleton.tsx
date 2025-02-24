export const MovieCardSkeleton = () => {
	return (
		<div className="card w-52 bg-transparent">
			<figure className="w-36 h-52 sm:w-full sm:h-64 bg-gray-300 skeleton opacity-15 rounded-xl"></figure>{" "}
			<div className="text-center mt-4"></div>
		</div>
	);
};
