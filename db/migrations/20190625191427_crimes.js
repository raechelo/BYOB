
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('neighborhoods', table => {
      table.increments('id').primary();
      table.string('city');
      table.integer('population');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('crimes', table => {
      table.increments('id').primary();
      table.string('year');
      table.string('name');
      table.string('location');
      table.integer('neighborhood_id').unsigned();
      table.foreign('neighborhood_id').references('neighborhoods.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('crimes'),
    knex.schema.dropTable('neighborhoods')
  ]);
};