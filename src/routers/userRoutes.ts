import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../controllers/newUserController';
import { getAll } from '../controllers/getAllUsersController';
import { findByUser } from '../controllers/findUserID';

export async function userRoutes(app: FastifyInstance) {
    app.post('/', createUserHandler);
    app.get('/:id', findByUser);
    app.get('/', getAll);
}
