module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['fotografias.lasexta.com',
              'miracomosehace.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend-pruebas-next.herokuapp.com/:path*' // Proxy to Backend
      }
    ]
  },
}
