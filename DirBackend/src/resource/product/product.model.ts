import mongoose from 'mongoose'

import { CoreCategoryType } from 'prettier'

export interface IProductInterface {
  name: string
  desc: string
  category: mongoose.Types.objectId
  sizes: []
  price: Number
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  category: {
    type: mongoose.Types.objectId,
    required: true
  },
  sizes: {
    type: []
  },
  price: {
    type: Number
  }
})

export const Product = mongoose.model<IProductInterface>(
  'Product',
  ProductSchema
)
