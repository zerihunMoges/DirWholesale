import { NextFunction } from 'express'
import { Product } from './product.model'

export async function addProduct(req, res, next: NextFunction) {
  try {
    const { name, desc, sizes, prize } = req.body
    const product = await Product.create({ name, desc, sizes, prize })
    res.status(200).json(product)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getProduct(req, res, next: NextFunction) {
  try {
    const { _id } = req.params
    const product = await Product.findById(_id)
    if (product) {
      return res.status(200).json(product)
    }
    return res.status(404)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getProducts(req, res, next: NextFunction) {
  try {
    const products = await Product.find({})
    console.log(products)
    return res.status(200).json(products)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}
