import mongoose from 'mongoose'

export interface IOrderItemInterface {
  order: mongoose.Types.ObjectId
  product: mongoose.Types.ObjectId
  quantity: Number
}

const OrderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    product: {
      type: mongoose.Types.ObjectId
    },
    quantity: { type: Number }
  },
  {
    timestamps: true
  }
)

export const OrderItem = mongoose.model<IOrderItemInterface>(
  'OrderItem',
  OrderItemSchema
)
