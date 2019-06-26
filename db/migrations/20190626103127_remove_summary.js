
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('crimes', table => {
      table.dropColumn('summary');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('crimes', table => {
      table.string('summary');
    })
  ]);
};
