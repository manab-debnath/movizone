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
