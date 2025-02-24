import SeriesDetail from "@/components/SeriesDetails";

interface Props {
	params: {
		urlTitle: string;
		id: string;
	};
}

export default function TVShowPage({ params }: Props) {
	return <SeriesDetail params={params} />;
}
