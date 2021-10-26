module.exports = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-url-loader",
          options: {
            limit: 10000,
          },
        },
      ],
    });

    return config;
  },
};
