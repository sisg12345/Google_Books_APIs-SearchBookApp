import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // 別ドメインから画像取得を許可
    remotePatterns: [
      {
        hostname: 'books.google.com',
      },
    ],
  },
}

export default nextConfig
