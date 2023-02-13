import { NextFunction } from 'express'
import cloudinary from '../../config/cloudinary'
import { ProductCategory } from './product.catagory/product.category.model'
import { Product } from './product.model'

export async function uploadProduct(img) {
  try {
    const cloudinaryImage = await cloudinary.uploader.upload(img.path, {
      folder: 'Products'
    })

    return cloudinaryImage
  } catch (err) {
    console.log(err)
  }
}
export async function addProduct(req, res, next: NextFunction) {
  try {
    const { name, desc, category, sizes, price, qty } = req.body
    let image = req.file

    const productCategory = await ProductCategory.findById(category)
    if (!productCategory) {
      res.status(400).json({ message: 'category not found' })
    }
    const cloudinaryImage = await uploadProduct(image)
    if (!cloudinaryImage) {
      res.status(400).json({ message: 'Image Upload Failed' })
    }
    const product = await Product.create({
      name,
      img: cloudinaryImage.secure_url,
      desc,
      category: productCategory.id,
      sizes,
      qty,
      price
    })
    res.status(200).json(product)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}

export async function getProduct(req, res, next: NextFunction) {
  try {
    const { _id } = req.params
    const product = await Product.findById(_id).populate({
      path: 'category',
      model: ProductCategory
    })
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
    const products = await Product.find({}).populate({
      path: 'category',
      model: ProductCategory
    })
    console.log(products)
    return res.status(200).json(products)
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}
