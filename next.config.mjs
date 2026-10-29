/** @type {import('next').NextConfig} */
const nextConfig = {
  // Demos y bocetos estáticos en public/demos/<slug>/index.html
  async rewrites() {
    return [
      { source: '/demos', destination: '/demos/index.html' },
      { source: '/demos/:slug', destination: '/demos/:slug/index.html' },
    ]
  },
}

export default nextConfig
