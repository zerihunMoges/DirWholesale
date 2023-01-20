import bodyParser, { urlencoded } from 'body-parser'
import express from 'express'
import { configs } from './config'
import { connect } from './db/setup'
import OrderRouter from './resource/order/order.route'
import payment_detailRouter from './resource/payement_detail/payement_detail.route'
import ProductCategoryRouter from './resource/product/product.catagory/product.category.route'
import ProductRouter from './resource/product/product.route'

const app = express()
app.use(bodyParser.json())
app.use(urlencoded({ extended: true }))
app.use('/api/category', ProductCategoryRouter)
app.use('/api/product', ProductRouter)
app.use('/api/order', OrderRouter)
app.use('/api/payment',payment_detailRouter)

export const start = async () => {
  try {
    app.listen(configs.port, async () => {
      await connect()
      console.log(`Rest Api on http://127.1.0.0:${configs.port}`)
    })
  } catch (err) {
    console.log(err)
  }
}
