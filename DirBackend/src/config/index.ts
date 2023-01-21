require('dotenv').config()

export const configs = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.DATABASE || 'mongodb://127.0.0.1:27017/Dir2'
}
