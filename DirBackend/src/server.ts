import bodyParser, { urlencoded } from 'body-parser'
import express from 'express'
import { configs } from './config'
import { connect } from './db/setup'
import cors from 'cors'
import { isAdmin } from './middlewares/authenticate'
import OrderRouter, { AdminOrderRouter } from './resource/order/order.route'
import payment_detailRouter, {
  AdminPaymentRouter
} from './resource/payement_detail/payement_detail.route'
import ProductCategoryRouter from './resource/product/product.catagory/product.category.route'
import {
  ProductRouter,
  AdminProductRouter
} from './resource/product/product.route'
import userRouter from './resource/user/user.route'

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.use(urlencoded({ extended: true }))
app.use('/api/admin/product', isAdmin, AdminProductRouter)
app.use('/api/admin/order', isAdmin, OrderRouter)
app.use('/api/admin/payment', isAdmin, AdminPaymentRouter)
app.use('/api/category', ProductCategoryRouter)
app.use('/api/product', ProductRouter)
app.use('/api/order', OrderRouter)
app.use('/api/payment', payment_detailRouter)
app.use('/api/user', userRouter)

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
