import { Router } from 'express'
import { addpayment_detail,getPayment_detail, getPayment_details } from './payement_detail.controller'


const payment_detailRouter = Router()
payment_detailRouter.post('', addpayment_detail)
payment_detailRouter.get('/:id', getPayment_detail)
payment_detailRouter.get('', getPayment_details)

export default payment_detailRouter
