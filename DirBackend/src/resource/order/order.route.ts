import { Router } from 'express'
import { isAdmin, isAuthenticated } from '../../middlewares/authenticate'
import {
  addOrder,
  getOrder,
  getOrders,
  getOrdersByUser,
  getTotal
} from './order.controllers'

export const OrderRouter = Router()
export const AdminOrderRouter = Router()

OrderRouter.post('', isAuthenticated, addOrder)
OrderRouter.get('/:userid', isAuthenticated, getOrdersByUser)
OrderRouter.get('', isAdmin, getOrders)
OrderRouter.get('/:id', getOrder)
OrderRouter.post('/total', getTotal)

export default OrderRouter
