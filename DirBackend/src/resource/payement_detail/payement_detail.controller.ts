import { NextFunction } from 'express'
import { Payment_detail } from './payement_detail.model'

export async function addpayment_detail(req, res, next: NextFunction) {
  try {
    const {  Order_Id,
        amount,
        provider ,
        price,
        status  } = req.body
    const payement_detail = await Payment_detail.create({ Order_Id,
        amount,
        provider ,
        price,
        status  })
    res.status(200).json(payement_detail)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getPayment_detail(req, res, next: NextFunction) {
  try {
    const { _id } = req.params
    const payment_detail = await Payment_detail.findById(_id)
    if (payment_detail) {
      return res.status(200).json(payment_detail)
    }
    return res.status(404)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getPayment_details(req, res, next: NextFunction) {
  try {
    const paymentDetails = await Payment_detail.find({})
    console.log(paymentDetails)
    return res.status(200).json(paymentDetails)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}
