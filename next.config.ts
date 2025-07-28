import type { NextConfig } from "next"
import withMDX from "@next/mdx" // This is a function

const withMdx = withMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  reactStrictMode: true,
}

export default withMdx(nextConfig)
