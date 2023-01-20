import mongoose from 'mongoose'

export interface IProductInterface {
  name: string
  type: mongoose.Types.objectId
  price: Number
  color: string
}

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number
  }
})

export const Club = mongoose.model<IProductInterface>('Club', ProductSchema)
