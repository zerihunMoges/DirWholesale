import { Router } from 'express'
import { addOrder, getOrder, getOrders, getTotal } from './order.controllers'

const OrderRouter = Router()
OrderRouter.post('', addOrder)
OrderRouter.get('', getOrders)
OrderRouter.get('/:id', getOrder)
OrderRouter.post('/total', getTotal)

export default OrderRouter
