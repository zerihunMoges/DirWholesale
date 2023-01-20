import { Router } from 'express'
import { addProduct, getProduct, getProducts } from './product.controller'

const ProductRouter = Router()
ProductRouter.post('', addProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.get('', getProducts)

export default ProductRouter
