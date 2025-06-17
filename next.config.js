/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/mingduo_website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mingduo_website/" : "",
};

module.exports = nextConfig;
