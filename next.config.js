/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://superheros:kiaFhWFMuKnKf2ru@cluster0.1ipuukw.mongodb.net/superHero?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig