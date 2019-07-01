const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Hello world!');
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
      res.status(500).json({ error: 'Could not find endpoint' })
    });
});

app.post('/api/v1/crimes/', (req, res) => {
  const crime = req.body;

  for (let requiredParam of ['name', 'year', 'location']) {
    if (!crime[requiredParam]) {
      return res.status(422).send({error: `Expected format: {name: <String>, year: <Number>, location: <String>. 🎯 You're missing a ${requiredParam} property.}`});
    }
  }

  database('crimes').insert(crime, 'id')
    .then(crime => {
      res.status(201).json({ id: crime[0] });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get('/api/v1/neighborhoods', (req, res) => {
  database('neighborhoods').select()
    .then(neighborhoods => {
      res.status(200).json(neighborhoods);
    })
    .catch(error => {
      res.status(500).json({ error });       
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
        });
      }
    })
});

app.post('/api/v1/neighborhoods/', (req, res) => {
  const neighborhood = req.body;

  for (let requiredParam of ['city', 'population']) {
    if (!neighborhood[requiredParam]) {
      return res.status(422).send({error: `Expected format: {city: <String>, population: <Number>. 🎯 You're missing a ${requiredParam} property.}`})
    }
  }

  database('neighborhoods').insert(neighborhood, 'id')
  .then(neighborhood => {
      res.status(201).json({ id: neighborhood[0] })
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})

app.delete('/api/v1/crimes/:id', (req, res) => {
  database('crimes').where('id', req.params.id).delete()
    .then(crime => {
      if (!crime) res.status(422).json('Error! 💥 This crime does not exist! ...yet...')
      else res.status(200).json('Deleted! 🦖')
    })
    .catch(error => {
      return res.status(500).json({error})
    })
})

app.listen(app.get('port'), () => {
  console.log(`App is running 🚀`);
});