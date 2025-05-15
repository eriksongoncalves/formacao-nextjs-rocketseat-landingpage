import type { NextConfig } from "next"
import { withContentlayer } from "next-contentlayer"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false
}

export default withContentlayer(nextConfig)
