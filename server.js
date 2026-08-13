import { fastify } from 'fastify';

const server = fastify();

server.get('/', (req, res)=>{
return 'Home - Cadastro de usuarios';
});

server.get('/users', (req, res)=>{
return 'Listagem de usuarios';
});

server.post('/users', (req, res)=>{
return 'Cadastro de usuarios';
});

server.listen({port: 3000}, (err, address) => {
if (err) {
console.error(err);
}
console.log( `Servidor rodando em ${address} ` );
});