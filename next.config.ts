import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/tour-details/:slug", destination: "/tour/:slug", permanent: false },
      { source: "/destination-details/:slug", destination: "/destination/:slug", permanent: false },
      { source: "/blog-details/:slug", destination: "/blog/:slug", permanent: false },
    ];
  },
};

export default nextConfig;
