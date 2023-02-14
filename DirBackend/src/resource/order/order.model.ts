import mongoose, { mongo } from 'mongoose'

export interface IOrderInterface {
  user: mongoose.Types.ObjectId
  total: Number
  payment: mongoose.Types.ObjectId
  status: Enumerator
  payment_status: String
}

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    payment: {
      type: mongoose.Types.ObjectId,
      ref: 'Payment'
    },
    status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Completed'],
      default: 'Pending'
    },
    payment_status: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Completed'],
      default: 'Pending'
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

export const Order = mongoose.model<IOrderInterface>('Order', OrderSchema)
