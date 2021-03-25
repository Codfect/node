const express = require('express');
const app = express();
app.use(express.json()); // -> Todas as rotas vão ter que passar por essa função dentro de use


//Rotas ->
//GET
app.get('/projects', (request, response) => {

  const { nome, vaga } = request.query;

  console.log(nome);
  console.log(vaga);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

//POST
app.post('/projects', (request, response) => {

  const body = request.body;

  console.log(body);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

//PUT
app.put('/projects/:id', (request, response) => {

  const params = request.params;

  console.log(params)
  
  return response.json([
    'Projeto 7',
    'Projeto 2',
    'Projeto 3',
  ]);
});

//DELETE
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 7',
    'Projeto 2',
  ]);
});



//PORT localhost:3333
app.listen(3333, () => {
  console.log('Start developer server')
});