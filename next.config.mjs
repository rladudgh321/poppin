/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
  experimental: {
    optimizeCss: true,
    serverActions: true, //next-auth
  },
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
