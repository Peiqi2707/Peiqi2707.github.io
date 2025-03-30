/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This disables image optimization which isn't compatible with static exports
  images: {
    unoptimized: true,
  },
  // GitHub Pages settings
  basePath: process.env.NODE_ENV === 'production' ? '/DSA-portfolio-website-template' : '',
  // Use trailingSlash to help with file paths when opening locally
  trailingSlash: true,
};

module.exports = nextConfig; 