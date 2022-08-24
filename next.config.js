/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "https://audreyfocant.com/",
  images: {
    loader: "akamai",
    path: "",
  }
}

module.exports = nextConfig
