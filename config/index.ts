import axios from "axios";

const menuList = [
	{ name: "Home", href: "/" },
	{ name: "Movies", href: "/movies" },
	{ name: "TV Shows", href: "/tv-shows" },
	{ name: "Anime", href: "/anime" },
	{ name: "Trending", href: "/trending" },
];

async function getList({ path }: { path: String }) {
	try {
		const url = process.env.NEXT_PUBLIC_THE_MOVIE_DATABASE_URL + "/" + path;
		console.log("url ", url);

		const response = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_THE_MOVIE_DATABASE_API_KEY}`,
				accept: "application/json",
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export { getList, menuList };
