/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  images:{
    remotePatterns: [
     { protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: ''
      },
     { protocol: 'https',
        hostname: 'images.unsplash.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
