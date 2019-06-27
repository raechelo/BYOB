const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port} 🚀`);
});

app.get('/api/v1/crimes', (req, res) => {
  database('crimes').select()
    .then(crimes => {
      res.status(200).json(crimes);
    })
    .catch(error => {
      res.status(500).json({error});
  });
});

app.get('/api/v1/neighborhoods', (req, res) => {
  database('neighborhoods').select()
    .then(neighborhoods => {
      res.status(200).json(neighborhoods);
    })
    .catch(error => {
      res.status(500).json({error});       
    });
});

