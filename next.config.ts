import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const withMdx = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default withMdx(nextConfig);
