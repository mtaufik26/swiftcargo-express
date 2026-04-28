/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Allow the development server to be accessed from any host (useful for ngrok)
  allowedDevOrigins: ['*.ngrok-free.dev'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ngrok-free.dev',
      },
    ],
  },
};

export default nextConfig;
