const knex = appRequire('init/knex').knex;
const tableName = 'account_data';

const createTable = async() => {
  const exist = await knex.schema.hasTable(tableName);
  if(exist) {
    return;
  }
  return knex.schema.createTableIfNotExists(tableName, function(table) {
    table.increments('id');
    table.integer('accountId');
    table.integer('userId');
    table.string('server');
    table.bigInteger('time');
    table.bigInteger('flow');
    table.integer('limit');
    table.bigInteger('createTime');
    table.bigInteger('startTime');
    table.bigInteger('expireTime');
    table.integer('multiServerFlow').defaultTo(0);
    table.integer('autoRemove').defaultTo(0);
  });
};

exports.createTable = createTable;
