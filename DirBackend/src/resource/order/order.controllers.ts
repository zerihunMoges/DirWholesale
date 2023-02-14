import { Payment_detail } from '../payement_detail/payement_detail.model'
import { ProductCategory } from '../product/product.catagory/product.category.model'
import { IProductInterface, Product } from '../product/product.model'
import { User } from '../user/user.model'
import { OrderItem } from './order.item.model'
import { Order } from './order.model'

export async function getTotal(req, res, next) {
  try {
    const { orders } = req.body
    const { _id } = res.locals
    const user = User.findById(_id)

    const total = await orders.reduce(
      async (accumulator, { product_id, quantity }) => {
        const product: IProductInterface = await Product.findById(product_id)
        const price: number = product.price
        if (quantity <= 0) {
          throw Error(`Product ${product.name} should be positive number`)
        }
        if (product.qty - quantity < 0) {
          throw Error(`Product ${product.name} out of stock`)
        }
        return accumulator + price * quantity
      },
      0
    )

    return res.status(200).json({ total: total })
  } catch (err: any) {
    res.status(400).json({
      message: err.message
    })
  }
}

export async function addOrder(req, res, next) {
  try {
    const { orders } = req.body
    const { _id } = res.locals
    const user = await User.findById(_id)
    const total = await orders.reduce(
      async (accumulator, { product_id, quantity }) => {
        const product: IProductInterface = await Product.findById(product_id)
        const price: number = product.price
        if (quantity <= 0) {
          throw Error(`Product ${product.name} should be positive number`)
        }
        if (product.qty - quantity < 0) {
          throw Error(`Product ${product.name} out of stock`)
        }
        return accumulator + price * quantity
      },
      0
    )
    const order = await Order.create({ user: _id, total })

    orders.forEach(async (singleOrder) => {
      const product = await Product.findById(singleOrder.product_id)

      const orderItem = OrderItem.create({
        order: order.id,
        product: singleOrder.product_id,
        quantity: singleOrder.quantity
      })
      product.qty = product.qty - singleOrder.quantity
      product.save()
    })

    return res.status(200).json(order)
  } catch (err: any) {
    res.status(400).json({
      message: err.message
    })
  }
}

export async function getOrders(req, res, next) {
  const orders = await Order.find().populate([
    {
      path: 'user',
      model: User,
      select: ['_id', 'firstName', 'lastName', 'email']
    },
    {
      path: 'payment',
      model: Payment_detail
    }
  ])

  res.status(200).json(orders)
}

export async function getOrder(req, res, next) {
  try {
    const { id } = req.params
    console.log(id)
    const order = await Order.findById(id)
    const orderItems = await OrderItem.find({ order: order.id }).populate({
      path: 'product',
      model: Product,
      populate: {
        path: 'category',
        model: ProductCategory
      }
    })
    return res.status(200).json({
      order: order,
      order_items: orderItems
    })
  } catch (err) {
    res.status(500).json(err.message)
  }
}

export async function getOrdersByUser(req, res, next) {
  const orders = await Order.find({ user: req.params.userid }).populate([
    {
      path: 'user',
      model: User,
      select: ['_id', 'firstName', 'lastName', 'email']
    },
    {
      path: 'payment',
      model: Payment_detail
    }
  ])

  res.status(200).json(orders)
}
