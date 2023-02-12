import mongoose from 'mongoose'

export interface IProductInterface {
  name: string
  desc: string
  img: string
  category: mongoose.Types.ObjectId
  sizes: []
  price: number
  qty: number
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  desc: {
    type: String
  },
  img: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  sizes: {
    type: []
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    default: 0
  }
})

export const Product = mongoose.model<IProductInterface>(
  'Product',
  ProductSchema
)
