const murders = require('../../../data.js');

const createCrime = (knex, crime) => {
  return knex('crimes').insert({
    name: crime.name,
    year: crime.year,
    // summary: crime.summary
  }, 'id');
}

const createLocation = (knex, location) => {
  return knex('neighborhood').insert({
    city: location.city,
    location: location.location
  }, 'id');
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crimes').del()
    .then(() => {
      let crimePromises = [];
      let locationPromises = [];
        //forEach
        murders.forEach(crime => {
          crimePromises.push(createCrime(knex, crime))
          locationPromises.push(createLocation(knex, crime))
        })
        return Promise.all(crimePromises);
      })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
