import { NextFunction } from 'express'
import {
  IProductCategoryInterface,
  ProductCategory
} from './product.category.model'

export async function addCategory(req, res, next: NextFunction) {
  try {
    const { name, desc, size } = req.body
    const category = ProductCategory.create({ name, desc, size })
    res.status(200).json(category)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}
