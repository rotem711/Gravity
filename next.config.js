module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      }],
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
    domains: [`${process.env.NEXT_PUBLIC_ASSET_DOMAIN}`],
  },
}
