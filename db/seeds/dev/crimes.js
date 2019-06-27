const murders = require('../../../murderData.js');

const createCrime = (knex, crime) => {
  return knex('crimes').insert(crime);
}

const createLocation = (knex, crime) => {
  return knex('neighborhoods').insert({
    city: crime.name,
    population: crime.population
  }, 'id')
  .then(locationId => {
    let crimePromises = [];

    crime.murders.forEach(murder => {
      crimePromises.push(
        createCrime(knex, {
          name: murder.name,
          year: murder.year,
          location: murder.location,
          neighborhood_id: locationId[0]
        })
      )
    });
    return Promise.all(crimePromises)
  })
};

exports.seed = function(knex, Promise) {
  return knex('crimes').del()
  .then(() => knex('neighborhoods').del())
  .then(() => {
    let locationPromises = [];
    murders.forEach(crime => {
      locationPromises.push(createLocation(knex, crime))
    })
    return Promise.all(locationPromises);
  })
  .catch(error => console.log(`💥 Error seeding data: ${error}`))
};