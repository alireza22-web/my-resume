/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false,  // غیرفعال کردن توربوپک
    appDir: true
  }
};

export default nextConfig;
