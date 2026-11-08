/** @type {import('next').NextConfig} */
const nextConfig = {
    // Webpack config for wowjs UMD module support
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.externals = config.externals || [];

            if (Array.isArray(config.externals)) {
                config.externals = config.externals.filter(
                    (external) =>
                        typeof external !== "function" ||
                        !external.toString().includes("wowjs")
                );
            }
        }

        return config;
    },
};

export default nextConfig;