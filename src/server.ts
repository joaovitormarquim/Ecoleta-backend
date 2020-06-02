import express from 'express';

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

app.get('/users', (request, response) => {
  console.log('listagem de usuários');

  response.json(['diego', 'clayton']);
})

app.listen(3333, () => {
  console.log('server up');
});