import mongoose from 'mongoose'

export interface IProductCategoryInterface {
  name: string
  desc: string
  sizes: []
}

const ProductCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    desc: {
      type: String
    },
    sizes: {
      type: [],
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

export const ProductCategory = mongoose.model<IProductCategoryInterface>(
  'ProductCategory',
  ProductCategorySchema
)
