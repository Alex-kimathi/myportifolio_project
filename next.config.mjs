
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable Cache Components for Next.js 16
    cacheComponents: true,

    // Webpack config for wowjs UMD module support
    webpack: (config, { isServer }) => {
        // Fix for wowjs UMD module
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

