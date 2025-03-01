import SeriesDetail from "@/components/SeriesDetails";
import { getList } from "@/config/index";

interface SeriesPageProps {
	params: {
		urlTitle: string;
		id: string;
	};
}

export default async function SeriesPage({ params }: SeriesPageProps) {
	return <SeriesDetail params={params} />;
}
