const express = require('express');
const app = express();
const fs = require('fs').promises;
// const path = require('path');

///////////////////////////// FUNÇOES AUXS

const readSummers = async () => {
  const data = await fs.readFile('./summer.json');
  return JSON.parse(data);
}


const writeSummers = async (data) => {
  const jsonData = JSON.stringify(data);
  await fs.writeFile('./summer.json', jsonData);
}

//////////////////////////// MIDDLEWARES

const validateNewSummer = (req, res, next) => {
  const {name, age} = req.body;
  if(!name || !age) {
    return res.status(400).send({message: "Nome e idade são campos obrigatórios"});
  } 
  next();
}

////////////////////////////

app.use(express.json());

app.get('/', async (req, res) => {
  const summers = await readSummers();
  res.status(200).send(summers);
});

app.get('/search', async (req, res) => {
  const {q} = req.query;
  const summers = await readSummers();
  const results = summers.filter((summer) =>  summer.name.toLowerCase().includes(q.toLowerCase()));
  if(results.length === 0) {
    return res.status(404).send({message: "Nao foi possivel encontrar ninguem"})
  }
  res.status(200).send(results);
})

app.get('/:id', async (req, res) => {
  const summerId = Number(req.params.id);
  const summers = await readSummers();
  const summer = summers.find((s) => s.id === summerId);
  console.log(summer);
  if(!summer){
    return res.sendStatus(404);
    // return res.status(404).send({message: "Summer not found"});
  }
  res.status(200).send(summer);
});

app.post('/', validateNewSummer, async (req, res) => {
  const summerBody = req.body;
  const summers = await readSummers();
  const summerlength = summers.length;
  const newSummer = {
    id: summerlength,
    ...summerBody,
  }
  summers.push(newSummer);

  await writeSummers(summers);

  res.status(201).send(newSummer);
});

app.put('/:id', async (req, res) => {
  const summerId = Number(req.params.id);
  const summerToEdit = req.body;

  const summers = await readSummers();
  const index = summers.findIndex((summer) =>  summer.id === summerId);
  // console.log(index);
  const updatedSummer = { id: summerId, ...summerToEdit};

  // array.splice(indexInicio, QtdParaExcluir, newData1, newData2, NewData3...)

  summers.splice(index, 1, updatedSummer);
   await writeSummers(summers);

  res.status(200).send(updatedSummer);

});

app.delete('/:id', async (req, res) => {
  const summerId = Number(req.params.id);
  const summers = await readSummers();
  const updatedSummers = summers.filter((summer) => summer.id !== summerId);
  await writeSummers(updatedSummers);
  res.sendStatus(204);
});

module.exports = app;