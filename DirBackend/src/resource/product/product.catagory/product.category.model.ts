import mongoose from 'mongoose'

export interface IProductCategoryInterface {
  name: string
  desc: string
  sizes: []
  colors: []
}

const ProductCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    desc: {},
    size: {
      type: [],
      required: true
    },
    color: {
      type: []
    }
  },
  {
    timestamps: {
      createdAt: 'dateUploaded',
      updatedAt: 'dateUpdated'
    }
  }
)

export const ProductCategory = mongoose.model<IProductCategoryInterface>(
  'ProductCategory',
  ProductCategorySchema
)
