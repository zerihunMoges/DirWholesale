import mongoose from 'mongoose'

export interface IProductCategoryInterface {
  name: string
  desc: string
  size: []
}

const ProductCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    size: {
      type: [],
      required: true
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
