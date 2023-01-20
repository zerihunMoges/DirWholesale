import { timeStamp } from 'console'
import mongoose, { ObjectId } from 'mongoose'

import { CoreCategoryType } from 'prettier'
import { Order } from '../order/order.model'

export interface IProductInterface {
  Order_Id: String
  amount: Number
  provider : string
  price: Number
  status : Enumerator
}

const payment_detailSchema= new mongoose.Schema({
  Order_Id: {
    type: String,
    unique: true,
    required: true
  },
  amount: {
    type: Number
  },
 provider: {
    type: String,
    required: true
  },
  status:{
    type: String,
    enum : ['Pending','Cancelled','Completed'],
    default: 'Pending'
  }
 ,
  

  price: {
    type: Number,
    required: true
  },
},{timestamps : true})

export const Payment_detail = mongoose.model<IProductInterface>(
  'Payment_detail',
  payment_detailSchema

)
