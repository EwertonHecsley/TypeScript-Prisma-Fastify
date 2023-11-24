import { PrismaClient } from '@prisma/client';
import { FastifyReply, FastifyRequest } from 'fastify';


const prisma = new PrismaClient();


export async function findByUser(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) {
    const { id } = request.params;
    try {
        const usuario = await prisma.user.findMany({
            where: {
                id: Number(id)
            }
        });

        return reply.status(200).send(usuario[0]);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return reply.status(500).send({ mensagem: 'Erro ao processar a solicitação.' });
    }
};