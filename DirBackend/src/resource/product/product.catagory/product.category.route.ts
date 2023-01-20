import { Router } from 'express'
import { addCategory } from './product.category.controller'

const ProductCategoryRouter = Router()
ProductCategoryRouter.post('', addCategory)

export default ProductCategoryRouter
