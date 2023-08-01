const nextConfig = {
	images: {
		loader: "akamai",
		path: "/",
	},
	reactStrictMode: true,
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = { fs: false };

		return config;
	},
};

module.exports = nextConfig;
