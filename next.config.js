/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const outsideVercel = isProduction && process.env.VERCEL !== "1";
const nextConfig = {
  
  images: {
    path: outsideVercel ? "" : "_next/image",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    unoptimized: true,
  },
}

module.exports = nextConfig
