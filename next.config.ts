import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};

export default createNextIntlPlugin("./src/i18n/request.ts")(nextConfig);
