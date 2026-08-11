/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (content baked into HTML → good SEO)
  output: 'export',
  // GitHub Pages serves /sv/ as /sv/index.html
  trailingSlash: true,
  // No image optimization server on static hosting
  images: {
    unoptimized: true,
  },
}

export default nextConfig
