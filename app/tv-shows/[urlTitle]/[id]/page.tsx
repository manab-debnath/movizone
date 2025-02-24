import SeriesDetail from "@/components/SeriesDetails";

type SearchParams = Promise<{ urlTitle?: string; id?: string }>;

export default async function TVShowPage({ params }: { params: SearchParams }) {
	const resolvedParams = await params;

	const safeParams = {
		urlTitle: resolvedParams.urlTitle ?? "",
		id: resolvedParams.id ?? "",
	};

	return <SeriesDetail params={safeParams} />;
}
