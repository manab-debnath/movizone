import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: {
		appIsrStatus: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		NEXT_PUBLIC_THE_MOVIE_DATABASE_URL:
			process.env.NEXT_PUBLIC_THE_MOVIE_DATABASE_URL,
		NEXT_PUBLIC_THE_MOVIE_DATABASE_API_KEY:
			process.env.NEXT_PUBLIC_THE_MOVIE_DATABASE_API_KEY,
	},
};

export default nextConfig;
