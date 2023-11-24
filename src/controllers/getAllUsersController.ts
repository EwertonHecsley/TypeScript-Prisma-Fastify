import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAll(_request: FastifyRequest, reply: FastifyReply) {
    try {
        const users = await prisma.user.findMany();

        return reply.status(201).send(users);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return reply.status(500).send({ mensagem: 'Erro ao processar a solicitação.' });
    }
}