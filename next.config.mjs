/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * Set base path. This is usually the slug of your repository.
     *
     * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: "",

    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
     */
    images: {
        unoptimized: true,
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    }
};

export default nextConfig;
