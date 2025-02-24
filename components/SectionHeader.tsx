import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const SectionHeader = ({
	title,
	href = "/",
}: {
	title: string;
	href?: string;
}) => {
	return (
		<div className="flex justify-between items-center border-b-4 border-b-[#373737] pb-4 relative">
			<h3 className="lg:text-3xl font-bold text-xl">{title}</h3>
			<Link
				href={href}
				className="flex items-center text-lg gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-red-500 group"
			>
				View All
				<IoIosArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
			</Link>
			<div className="absolute bottom-[-4px] left-0 w-48 h-1 bg-red-500"></div>
		</div>
	);
};
