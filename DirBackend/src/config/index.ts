require('dotenv').config()

export const configs = {
  port: process.env.PORT || 5000,
  mongoUrl: process.env.DATABASE,
  cloudinaryCloudName: process.env.cloudinaryCloudName,
  cloudinaryApiKey: process.env.cloudinaryApiKey,
  cloudinaryApiSecret: process.env.cloudinaryApiSecret
}
