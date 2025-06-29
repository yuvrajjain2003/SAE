// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ①  Make the build output plain HTML so you can upload to GoDaddy
  output: "export",

  // ②  Add trailing slashes so links resolve as  …/index.html  on static hosts
  trailingSlash: true,

  // ③  If you plan to use <Image>, this keeps it fully static-friendly
  images: { unoptimized: true },
};

export default nextConfig;
