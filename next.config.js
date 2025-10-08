/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizar para archivos estáticos
  output: 'standalone',
  
  // Configuración de imágenes
  images: {
    unoptimized: true,
  },
  
  // Headers para archivos estáticos
  async headers() {
    return [
      {
        source: '/index.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
