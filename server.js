const environment = process.env.NODE_ENV || 'development';
// this tells the code to look at the development environment as the default
const configuration = require('./knexfile')[environment];
// this require the knex file where the environment is described
const database = require('knex')(configuration);
// this sets a variable the the knex configured database
const express = require('express');
// this sets a variable to the Express packacge
const app = express();
// this creates the app varaibles and tells it to use Express when compiling
const port = 3000;
// this sets the port to be 3000

app.use(express.json());
// this allows the app to use json with express

app.listen(port, () => {
  // this line tells the app to listen to our port, which in this case is 3000 🚀 
  console.log(`App is running on port ${port} 🚀`);
  // this prints the above line in our console when the app starts
});

app.get('/api/v1/crimes', (req, res) => {
  // this creates the endpoint for /api/v1/crimes which would allow a developer to hit that endpoint and retreive the crime information
  database('crimes').select()
  // this uses our created database variable and requests and selects the crimes table
    .then(crimes => {
      // then, with those crimes...
      res.status(200).json(crimes);
      // we want to return a status of 200, all good, and send back a json version of the crimes database
    })
    .catch(error => {
      // should there be an error, we'll catch it and with that error...
      res.status(500).json({error});
      // we'll return a status of 500, server error, and a json version of the error object
  });
});

app.get('/api/v1/crimes/:id', (req, res) => {
  // this creates the endpoint for each unique crime id
  database('crimes').where('id', req.params.id).select()
  // this uses our database variable to search the crime table for an idea that matches our requested parameter id and selects it
    .then(crimes => {
      // then, with that crime...
      if (crimes.length) {
        // if there is a crime at all
        res.status(200).json(crimes);
        // return a status of 200 and a json version of the crime
      } else {
        // otherwise, if there is not a crime
        res.status(404).json({
          // we'll return a status of 404 and a json version of the following
          error: `Error! 💥 Could not find crime with id ${req.params.id}`
          // error object with the message of not finding specific id
        })
      }
    })
    .catch(error => {
      // catch the error if an error occurs
      res.status(500).json({error})
      // return a status of 500 and a json version of the error object
    });
});

app.post('/api/v1/crimes/', (req, res) => {
  // this creates the endpoint for posting a new crime
  const crime = req.body;
  // this creates a variable of crime for the request body

  for (let requiredParam of ['name', 'year', 'location']) {
    // this looks for a required parameter of name, year, AND location
    if (!crime[requiredParam]) {
      // if the crime submitted doesn't have one oft those...
      return res.status(422).send({error: `Expected format: {name: <String>, year: <Number>, location: <String>. 🎯 You're missing a ${requiredParam} property.}`});
      // we're going to return a status of 422 and an error message telling the user to include wahtever parameter they're missing
    }
  }

  database('crimes').insert(crime, 'id')
  // this grabs the crimes table from our knex file and inserts the crime from above with the id
    .then(crime => {
      // then, with that crime...
      res.status(201).json({ id: crime[0] });
      // we want to return a status of 201 and an object with the id of the crime, indicating the user has properly posted a new crime, and should receive the new crimes id back as a response
    })
    .catch(error => {
      // if there's an error with posting, catch it
      res.status(500).json({ error });
      // return a status of 500 and a jsonified error object
    });
});

app.get('/api/v1/neighborhoods', (req, res) => {
  // this creates the /api/v1/neighborhood endpoint which a developer could hit and retreive the information for all the neighborhoods
  database('neighborhoods').select()
  // this uses the database variable and finds the neighborhood table, selecting it
    .then(neighborhoods => {
      // then with the neighborhood table...
      res.status(200).json(neighborhoods);
      // we want to return a status of 200 and a json version of the neighborhood table
    })
    .catch(error => {
      // should there be an error, we're going to catch it and with that error...
      res.status(500).json({error});       
      // we're going to return a status of 500, server error, and a json version of the error object
    });
});

app.get('/api/v1/neighborhoods/:id', (req, res) => {
  // this creates the unique endpoint for getting a specific neighborhood
  database('neighborhoods').where('id', req.params.id).select()
  // this grabs the neighborhood database and looks for an entry with an id that matches our requested parameter id
    .then(neighborhoods => {
      // then, with that neighborhood
      if (neighborhoods.length) {
        // if there is a neighborhood that is associated with said id
        res.status(200).json(neighborhoods)
        // return a status of 200 and a json version of the neighborhoods
      } else {
        // otherwise
        res.status(404).json({
          // return a status of 404 and a json version of the following error object
          error: `Error! 💥 Could not find neighborhood with id ${req.params.id}`
          // tells the user there is no neighborhood with the requested parameters id
        });
      }
    })
});

app.post('/api/v1/neighborhoods', (req, res) => {
  const neighborhood = req.body;

  for (let requiredParam of ['name', 'population']) {
    if (!neighborhood[requiredParam]) {
      return res.status(422).send({error: `Expected format: {name: <String>, population: <Number>. 🎯 You're missing a ${requiredParam} property.}`})
    }
  }

  database('neighborhoods').insert(neighborhood, 'id')
    .then(neighborhood => {
      res.status(201).json({id: neighborhood[0] })
    })
    .catch(error => {
      res.status(500).json({error})
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