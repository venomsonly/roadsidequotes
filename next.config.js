// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }

// module.exports = nextConfig





/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    // value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    value: "geolocation=(), interest-cohort=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];
const withPWA = require("next-pwa");
module.exports = withPWA({
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["img.zippercity.com",],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      formats: ["image/webp", "image/png", "image/jpeg", "image/jpg"],
    },
  },
  pwa: {
    // disable: process.env.NODE_ENV === 'development',
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  distDir: "build",
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
  },

});
