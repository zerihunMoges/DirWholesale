import { Router } from 'express'
import { filterImage } from '../../middlewares/multer'
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} from './product.controller'

export const ProductRouter = Router()
export const AdminProductRouter = Router()
AdminProductRouter.post('', filterImage.single('image'), addProduct)
AdminProductRouter.get('/:id', getProduct)
AdminProductRouter.get('', getProducts)
AdminProductRouter.delete('/:id', deleteProduct)
AdminProductRouter.patch('/:id', updateProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.get('', getProducts)
