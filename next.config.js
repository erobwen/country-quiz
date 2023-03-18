/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/countries',
        destination: 'https://restcountries.com/v3.1/all' // Proxy to Backend v2/all
        // destination: 'https://api.first.org/data/v1/countries' // Proxy to Backend v2/all
        // source: '/api/:path*',
        // destination: 'https://restcountries.eu/:path*' // Proxy to Backend v2/all
      }
    ]
  }
}



module.exports = nextConfig
