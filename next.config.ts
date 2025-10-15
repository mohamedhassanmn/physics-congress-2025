import { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [ "http://localhost:3000", "http://10.17.8.39:3000" ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
