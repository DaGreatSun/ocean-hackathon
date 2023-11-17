/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    JWT_KEY: "EHEALTH_WEB_APP_JWT_KEY",
    DB_TYPE: "MONGODB",
    REST_API_URL: "",
    MONGODB_DB: "eHealthcare",
    MONGODB_URI:
      "mongodb+srv://oceanhack:oceanhack2023@ocean-hackathon.jir5uf4.mongodb.net/?retryWrites=true&w=majority",
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: "asset",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
