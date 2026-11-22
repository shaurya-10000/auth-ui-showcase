import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  devIndicators: {
    position: 'bottom-right',
  },
  // The code, download and install API routes read template source files at runtime.
  outputFileTracingIncludes: {
    "/api/**/*": ["./src/templates/**/*"],
  },
};

export default nextConfig;
