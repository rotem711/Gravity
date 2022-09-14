module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })

    return config
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: !!process.env.IGNORE_TS_ERRORS,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: !!process.env.IGNORE_LINT_ERRORS,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_ASSET_DOMAIN}`, 'secure.gravatar.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return process.env.NODE_ENV === 'development' ? [] : [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' *.hotjar.com *.zoominfo.com *.googletagmanager.com vimeo.com player.vimeo.com; img-src 'self' data: *.google-analytics.com dpm.demdex.net aorta.clickagy.com pixel-sync.sitescout.com *.googletagmanager.com; connect-src 'self' *.hotjar.com wss://*.hotjar.com *.google-analytics.com api.hsforms.com ws.zoominfo.com *.analytics.google.com *.googletagmanager.com",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(); battery=(self); geolocation=(); microphone=();',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/insights/:slug',
        destination: '/blog/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
