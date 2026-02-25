/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Generates static HTML in /out
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
