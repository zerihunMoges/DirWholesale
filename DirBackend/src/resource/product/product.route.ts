import { Router } from 'express'
import { filterImage } from '../../middlewares/multer'
import { addProduct, getProduct, getProducts } from './product.controller'

const ProductRouter = Router()
ProductRouter.post('', filterImage.single('image'), addProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.get('', getProducts)

export default ProductRouter
