export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}) {
	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / 3) * 3;
		return new Array(5)
			.fill(0)
			.map((_, idx) => start + idx + 1)
			.filter((page) => page <= totalPages);
	};

	return (
		<div className="join bg-[#000]">
			<button
				className="bg-[#000] join-item btn hover:bg-red-500"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Prev
			</button>
			{getPaginationGroup().map((item, index) => (
				<button
					key={index}
					className={`bg-[#000] join-item btn hover:bg-red-500 disabled:bg-red-500 disabled:text-white`}
					onClick={() => onPageChange(item)}
					disabled={currentPage === item}
				>
					{item}
				</button>
			))}
			<button
				className="bg-[#000] join-item btn hover:bg-red-500 disabled:bg-red-500 disabled:text-white"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	);
}
