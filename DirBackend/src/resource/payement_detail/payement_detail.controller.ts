import { NextFunction } from 'express'
import { Payment_detail } from './payement_detail.model'
import { Request, Response } from 'express'

export async function addpayment_detail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { Order_Id, amount, provider, price, status } = req.body
    const payement_detail = await Payment_detail.create({
      Order_Id,
      amount,
      provider,
      price,
      status
    })
    res.status(200).json(payement_detail)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getPayment_detail(req, res, next: NextFunction) {
  try {
    const { id } = req.params
    console.log(id)
    const payment_detail = await Payment_detail.findById(id)
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

export async function updatePayement_detail(req, res, next) {
  try {
    const { id } = req.params
    console.log(id)
    const payment = await Payment_detail.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!payment) {
      res.status(404).json({
        status: 'error',
        message: 'payment Detail with this ID does not exist'
      })
    }
    res.status(200).json({
      status: 'success',
      payment
    })
  } catch (err) {
    console.log("can't Update the payment")
  }
}
export async function deletePayment_detail(req, res, next) {
  try {
    const { id } = req.params
    console.log(id)
    const payment = await Payment_detail.findByIdAndDelete(id)
    if (!payment) {
      res.status(404).json({
        status: 'error',
        message: 'Payment with this ID does not exist'
      })
    }
    res.status(204).json({
      status: 'success',
      payment: null
    })
  } catch (err) {
    //TODO
    console.log('error in deleting payment detail')
  }
}

export async function verifyIPN(req, res, next) {
  const { merchantOrderId, totalAmount } = req.body

  const payment = await Payment_detail.findOneAndUpdate(
    { _id: merchantOrderId },
    { status: 'Completed', amount: totalAmount }
  )
  await payment.save()
  res.status(200)
}
