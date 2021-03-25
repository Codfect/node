const express = require('express');
const app = express();


//Rotas ->

//GET
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

//POST
app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

//PUT
app.put('/projects/:id', (request, response) => {
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