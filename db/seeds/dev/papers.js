
exports.seed = function(knex, Promise) {

  return knex('footnotes').del()
    .then(() => knex('papers').del())

    .then(() => {
      return Promise.all([
        knex('papers').insert({
          title: 'Life in the basement', author: '1901', publisher: 'Turing School'
        }, 'id')
        .then(paper => {
          return knex('footnotes').insert([
            {note: 'Puppies', paper_id: paper[0]},
            {note: 'Kittens', paper_id: paper[0]}
          ])
        })
        .then(() => console.log('Sending Complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
