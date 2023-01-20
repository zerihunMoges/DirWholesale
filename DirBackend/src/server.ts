import bodyParser, { urlencoded } from 'body-parser'
import express from 'express'
import { configs } from './config'
import ProductCategoryRouter from './resource/product/product.catagory/product.category.route'

const app = express()
app.use(bodyParser.json())
app.use(urlencoded({ extended: true }))
app.use('/api/category', ProductCategoryRouter)

export const start = async () => {
  try {
    app.listen(configs.port, () => {
      console.log(`Rest Api on http://127.1.blah.blah${configs.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
