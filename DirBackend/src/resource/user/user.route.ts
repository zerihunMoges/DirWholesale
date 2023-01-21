import { Router } from 'express'
import {fetchAllUsers, getUserById, createUser, updateUser,
deleteUser} from './user.controllers'

const userRouter = Router()

userRouter.get('/all', fetchAllUsers)
userRouter.get('/:userId', getUserById)
userRouter.post('/', createUser)
userRouter.delete('/:userId', deleteUser)
userRouter.put('/:userId', updateUser)
