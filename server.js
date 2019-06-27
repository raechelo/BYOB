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

app.get('/api/v1/crimes/:id', (req, res) => {
  database('crimes').where('id', req.params.id).select()
    .then(crimes => {
      if (crimes.length) {
        res.status(200).json(crimes);
      } else {
        res.status(404).json({
          error: `Error! 💥 Could not find crime with id ${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json({error})
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

app.get('/api/v1/neighborhoods/:id', (req, res) => {
  database('neighborhoods').where('id', req.params.id).select()
    .then(neighborhoods => {
      if (neighborhoods.length) {
        res.status(200).json(neighborhoods)
      } else {
        res.status(404).json({
          error: `Error! 💥 Could not find neighborhood with id ${req.params.id}`
        })
      }
    })
})