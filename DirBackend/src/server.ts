import express from 'express'
import { configs } from './config'

const app = express()

export const start = async () => {
  try {
    app.listen(configs.port, () => {
      console.log(`Rest Api on http://127.1.blah.blah${configs.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
