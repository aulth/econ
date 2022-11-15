/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    email:process.env.email,
    key:process.env.key
  }
}

module.exports = nextConfig
