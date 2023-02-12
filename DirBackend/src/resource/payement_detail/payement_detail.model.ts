import mongoose, { ObjectId } from 'mongoose'

import { Order } from '../order/order.model'

export interface IProductInterface {
  user_id: mongoose.Types.ObjectId
  amount: Number
  provider: string
  price: Number
  status: Enumerator
}

const payment_detailSchema = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    provider: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Completed'],
      default: 'Pending'
    }
  },
  { timestamps: true }
)

export const Payment_detail = mongoose.model<IProductInterface>(
  'Payment_detail',
  payment_detailSchema
)
