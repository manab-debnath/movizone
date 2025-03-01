import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: {
		appIsrStatus: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;

console.log("Azure ENV:", process.env.NEXT_PUBLIC_THE_MOVIE_DATABASE_URL);
