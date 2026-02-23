/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
    },
    webpack: (config) => {
        config.resolve.extensions = ['.js', '.jsx', '.json'];
        return config;
    },
}

module.exports = nextConfig
