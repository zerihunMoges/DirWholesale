import { Router } from 'express'
import { addOrder } from './order.controllers'

const OrderRouter = Router()
OrderRouter.post('', addOrder)

export default OrderRouter
