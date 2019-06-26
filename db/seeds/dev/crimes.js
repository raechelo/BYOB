const murders = require('../../../data.js');

const createCrime = (knex, crime) => {
  return knex('crimes').insert({
    name: crime.name,
    year: crime.year,
    // summary: crime.summary
  }, 'id');
}

const createLocation = (knex, crime) => {
  return knex('neighborhood').insert({
    city: crime.city,
    location: crime.location
  }, 'id');
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crimes').del()
    .then(() => {
      let crimePromises = [];
        murders.forEach(crime => {
          crimePromises.push(createCrime(knex, crime))
        })
        return Promise.all(crimePromises)
      })
    .then(() => {
      let locationPromises = [];
      murders.forEach(crime => {
        locationPromises.push(createLocation(knex, crime))
      })
      return Promise.all(locationPromises);
    })
  .catch(error => console.log(`Error seeding data: ${error}`))
};