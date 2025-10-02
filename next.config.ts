import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vimar.com",
        pathname: "/cache/**",
      },
    ],
  },
};

export default nextConfig;
