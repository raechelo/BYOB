
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('papers', table => {
      table.string('publisher');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('papers', table => {
      table.dropColumn('publisher');
    })
  ]);
};
