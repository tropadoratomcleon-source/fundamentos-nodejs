import { fastify } from 'fastify';
import { randomUUID } from 'node:crypto';

const server = fastify();

server.get('/', (req, res) => {
    return 'Home - Cadastro de usuarios';
});

server.get('/users', (req, res) => {
    return 'Listagem de usuarios';
});

server.post('/users', (req, res) => {
    return 'ainda nao implementado';
});

server.put('/users/:id', (req, res) => {
    const id = req.params.id
    return `Atualizado o usuario com ID ${id}`;
});

server.delete('/users/:id', (req, res) => {
    const id = req.params.id
    return `Deletado o usuario com ID ${id}`;
});

server.get('/users/:userId/pedido/:pedidoId', (req, res) => {
    const { userId, pedidoId } = req.params;
    return `Usuario ${userId}, Pedido ${pedidoId}`;
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
    }
    console.log(`Servidor rodando em ${address} `);
});