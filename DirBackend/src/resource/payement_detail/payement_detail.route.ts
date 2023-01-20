import { Router } from 'express'
import { update } from 'lodash'
import { addpayment_detail,getPayment_detail, getPayment_details,updatePayement_detail,deletePayment_detail } from './payement_detail.controller'


const payment_detailRouter = Router()
payment_detailRouter.post('', addpayment_detail)
payment_detailRouter.delete('/:id',deletePayment_detail)
payment_detailRouter.patch('/:id',updatePayement_detail)
payment_detailRouter.get('/:id', getPayment_detail)
payment_detailRouter.get('', getPayment_details)

export default payment_detailRouter
