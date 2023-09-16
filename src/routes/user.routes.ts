import { Router } from 'express';
import { UserRepository } from '../modules/user/repositories/UserRepository';
import { login } from '../middleware/login';

const useRoutes = Router()
const userRepository = new UserRepository()

useRoutes.post('/sign-up', (request, response) => {
    userRepository.create(request, response)
})

useRoutes.post('/sign-in', (request, response) => {
    userRepository.login(request, response)
})

useRoutes.get('/get-user', login, (request, response) => {
    userRepository.getUser(request, response)
})

export { useRoutes }