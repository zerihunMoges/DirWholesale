import mongoose from 'mongoose'

import { CoreCategoryType } from 'prettier'

export interface IProductInterface {
  name: string
  desc: string
  category: mongoose.Types.ObjectId
  sizes: []
  price: number
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
  }
})

export const Product = mongoose.model<IProductInterface>(
  'Product',
  ProductSchema
)
