import { NextFunction } from 'express'
import {
  IProductCategoryInterface,
  ProductCategory
} from './product.category.model'

export async function addCategory(req, res, next: NextFunction) {
  try {
    const { name, desc, sizes } = req.body
    const category = await ProductCategory.create({ name, desc, sizes })
    console.log(category)
    res.status(200).json(category)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getCategories(req, res, next: NextFunction) {
  const categories = await ProductCategory.find({})
  res.status(200).json(categories)
}
