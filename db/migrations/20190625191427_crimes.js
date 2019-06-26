
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('crimes', table => {
      table.increments('id').primary();
      table.string('year');
      table.string('name');
      table.string('summary');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('neighborhood', table => {
      table.increments('id').primary();
      table.string('city');
      table.string('location');
    }),

    knex.schema.createTable('joiner', table => {
      table.integer('crime_id').unsigned();
      // table.foreign('crimes_id')
      //   .references('crimes.id');
      table.integer('location_id').unsigned();
      // table.foreign('location_id')
      //   .references('location.id');

      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('joiner'),
    knex.schema.dropTable('neighborhood'),
    knex.schema.dropTable('crimes')
  ]);
};
