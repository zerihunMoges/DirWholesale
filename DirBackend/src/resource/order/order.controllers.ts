import { IProductInterface, Product } from '../product/product.model'
import { OrderItem } from './order.item.model'
import { Order } from './order.model'

export async function addOrder(req, res, next) {
  try {
    const { userId, orders, payment } = req.body

    const total = orders.reduce(
      async (accumulator, { product_id, quantity }) => {
        const product: IProductInterface = await Product.findById(product_id)
        const price: number = product.price
        return accumulator + price * quantity
      },
      0
    )
    const order = await Order.create({ userId, total, payment })

    orders.forEach((singleOrder) => {
      const orderItem = OrderItem.create({
        order: order.id,
        product: singleOrder.product_id,
        quantity: singleOrder.quantity
      })
    })

    return res.status(200).json(order)
  } catch (err: any) {
    res.status(500).json({
      message: err.message
    })
  }
}
