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

app.get('/api/v1/neighborhoods', (req, res) => {
  // this creates the /api/v1/neighborhood endpoint which a developer could hit and retreive the information for all the neighborhoods
  database('neighborhood').select()
  // this uses the database variable and finds the neighborhood table, selecting it
    .then(neighborhood => {
      // then with the neighborhood table...
      res.status(200).json(neighborhood);
      // we want to return a status of 200 and a json version of the neighborhood table
    })
    .catch(error => {
      // should there be an error, we're going to catch it and with that error...
      res.status(500).json({error});       
      // we're going to return a status of 500, server error, and a json version of the error object
    });
});