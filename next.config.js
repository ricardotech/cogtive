/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ibb.co"],
  },
  env: {
    activeUser: process.env.activeUser,
    authToken: process.env.authToken
  },
};

module.exports = nextConfig;
