/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    distDir: 'build',
    env: {
      API_ENDPOINT: process.env.API_ENDPOINT,
      API_TIMEOUT: process.env.API_TIMEOUT,
      API_KEY: process.env.API_KEY
    }
  }
   
module.exports = nextConfig