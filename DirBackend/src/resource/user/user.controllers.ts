import { Request, Response, NextFunction } from 'express'
import {User, IUserInterface } from './user.model'

export const fetchAllUsers = async( 
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const users =  await User.find({})
    res.locals.json = {
        statusCode: 200,
        data: users
    }
    return next()
}
