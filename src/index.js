const { query } = require('express');
const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
app.use(express.json()); // -> Todas as rotas vão ter que passar por essa função dentro de use



const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel)

  return next();
} 

app.use(logRequests);

//Rotas ->
//GET
app.get('/projects', logRequests, (request, response) => {
  const { nome } = request.query;

  const results = nome ? projects.filter(project => project.nome.includes(nome))
  : projects;

  return response.json(results);
});

//POST
app.post('/projects', (request, response) => {

  const { nome, vaga, tecs } = request.body;

  const project = { id: uuid(), nome, vaga, tecs }

  projects.push(project);

  return response.json(project);
});

//PUT
app.put('/projects/:id', (request, response) => {

  const { id } = request.params;
  const { nome, vaga, tecs } = request.body;
  
  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({error: 'not found'})
  }

  const project = {
    id,
    nome,
    vaga,
    tecs,
  }

  projects[projectIndex] = project

  return response.json(project);
});

//DELETE
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  if (projectIndex < 0) {
    return response.status(400).json({error: 'not found'})
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});



//PORT localhost:3333
app.listen(3333, () => {
  console.log('Start developer server')
});