import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type UserCreatePayload = {
    name: string;
    email: string;
};

export async function createUserHandler(request: FastifyRequest<{ Body: UserCreatePayload }>, reply: FastifyReply) {
    try {
        const { name, email } = request.body;

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return reply.status(201).send({ mensagem: 'Usuário cadastrado.', usuario: newUser });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return reply.status(500).send({ mensagem: 'Erro ao processar a solicitação.' });
    }
}