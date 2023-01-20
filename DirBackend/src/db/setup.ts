import mongoose from 'mongoose'
import { dbSetup } from '../config/dbsetup'
mongoose.set('strictQuery', true);
export const connect = (url = dbSetup.url) => {
  console.log("database connected");
  return mongoose.connect(url)
  
}
