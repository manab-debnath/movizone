"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

interface ClientPaginationProps {
	currentPage: number;
	totalPages: number;
}

export function ClientPagination({
	currentPage,
	totalPages,
}: ClientPaginationProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("page", page.toString());
		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<Pagination
			currentPage={currentPage}
			totalPages={totalPages}
			onPageChange={handlePageChange}
		/>
	);
}
