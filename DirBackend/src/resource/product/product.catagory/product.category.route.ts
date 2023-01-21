import { Router } from 'express'
import { addCategory, getCategories } from './product.category.controller'

const ProductCategoryRouter = Router()
ProductCategoryRouter.post('', addCategory)
ProductCategoryRouter.get('', getCategories)

export default ProductCategoryRouter
