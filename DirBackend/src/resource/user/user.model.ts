import mongoose from 'mongoose'

export interface IUserInterface {
    firstName: String,
    lastName: String, 
    email: String,
    phoneNumber: String,
    location: String,
    
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNUmber: {
        type: String
    },
    location: {
        type: String
    },
    

})

export const User = mongoose.model<IUserInterface>('User', userSchema)