const express = require('express');
const { readSummers, writeSummer } = require('./utils/fileUtils');
const validadeSummer = require('./utils/middlewares')

// const {algumavalidacao, algumavalidacao2, algumavalidacao3} = require('./algumlugar')

const app = express();

app.use(express.json());

app.get('/',async (req, res) => {
  const summers = await readSummers();
  res.status(200).send(summers)
});

app.get('/search', async(req, res) => {
  const { q } = req.query //'Caren'
  // ...
})

//const arrayDeValidacoes = [algumavalidacao, algumavalidacao2, algumavalidacao3]
// app.post('/algumoutropost',arrayDeValidacoes, (req,res) => {})

// app.put('/algumput, algumavalidacao2, algumavalidacao3, ()=>{} )

app.post('/',validadeSummer, async (req, res) => {
  const summerBody = req.body;
  const summers = await readSummers();
  const newId = summers[summers.length - 1].id + 1;
  const newSummer = {
    id: newId,
    ...summerBody,
  }
  
  summers.push(newSummer);
  await writeSummer(summers);
  res.status(201).send(newSummer);
});

app.put('/:summerId', async (req, res) => {
  const summerId = Number(req.params.summerId);
  const summerBody = req.body;
  const summers = await readSummers();
  const summerIndex = summers.findIndex((summer) => summer.id === summerId);
  const summerUpdated = {id: summerId, ...summerBody}
  summers.splice(summerIndex, 1, summerUpdated);

  await writeSummer(summers);

  res.status(200).send(summerUpdated)
});

app.delete('/:summerId', async(req, res) => {
  const summerId = Number(req.params.summerId);
  const summers = await readSummers();
  // const summerIndex = summers.findIndex((summer) => summer.id === summerId);
  // summers.splice(summerIndex, 1)
  // await writeSummer(summers);
  const updatedSummers = summers.filter(summer => summer.id !== summerId)
  await writeSummer(updatedSummers);
  res.sendStatus(204);
});

module.exports = app;