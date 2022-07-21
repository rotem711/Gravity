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
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'report-sample' 'self' https://www.googletagmanager.com/gtag/js; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self' https://region1.analytics.google.com; font-src 'self' data:; frame-src 'self'; img-src 'self' https://www.google.at; manifest-src 'self'; media-src 'self' https://player.vimeo.com; report-uri https://62d9bf1ae7a4e344fdd76859.endpoint.csper.io/?v=0; worker-src 'none';",
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
}
