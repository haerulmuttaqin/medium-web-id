/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["echarts", "zrender"]);
const removeImports = require('next-remove-imports')({
    test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
    matchImports: "\\.(less|css|scss|sass|styl)$"
});
const {i18n} = require('./next-i18next.config')
const nextConfig = withTM(
    {
        experimental: {
            forceSwcTransforms: true,
            esmExternals: "loose",
        },
        reactStrictMode: false,
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: 'http://localhost/:path*',
                },
            ]
        },
        i18n,
        images: {
            dangerouslyAllowSVG: true,
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'ui-avatars.com',
                    port: '',
                    pathname: '/api/**',
                },
                {
                    protocol: 'https',
                    hostname: 'wac-cdn-bfldr.atlassian.com',
                    port: '',
                    pathname: '/**',
                },
                {
                    protocol: 'https',
                    hostname: 'wac-cdn.atlassian.com',
                    port: '',
                    pathname: '/**',
                },
                {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com',
                    port: '',
                    pathname: '/a/**',
                },
                {
                    protocol: 'https',
                    hostname: 'vid-thumb-api.hae.my.id',
                    port: '',
                    pathname: '/thumbnail/**',
                },
                {
                    protocol: 'https',
                    hostname: 'hls-thumbnail-api.pasbe.id',
                    port: '',
                    pathname: '/thumbnail/**',
                },
                {
                    protocol: 'http',
                    hostname: 'localhost',
                    port: '3033',
                    pathname: '/thumbnail/**',
                },
                {
                    protocol: 'http',
                    hostname: 'localhost',
                    port: '8111',
                    pathname: '/generate-thumbnail/**',
                },
                {
                    protocol: 'http',
                    hostname: 'localhost',
                    port: '8111',
                    pathname: '/thumbnail/**',
                },
            ],
        },
        transpilePackages: [
            // Atlaskit packages using Compiled directly or transitively
            // will need to be added here in order for Next to pick up the internal
            // CSS imports
            "@atlaskit/header",
            "@atlaskit/modal-dialog",
            "@atlaskit/dropdown-menu",
            "@atlaskit/datetime-picker",
            "@atlaskit/calendar",
            "@atlaskit/tooltip",
            "@emotion/react",
            "echarts",
            "zrender",
        ]
    }
)
module.exports = removeImports((nextConfig))