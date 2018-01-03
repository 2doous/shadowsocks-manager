const knex = appRequire('init/knex').knex;
const tableName = 'account_type';

const createTable = async() => {
  const exist = await knex.schema.hasTable(tableName);
  if(exist) {
    return;
  }
  return knex.schema.createTableIfNotExists(tableName, function(table) {
    table.increments('id');
    table.string('name');
    table.string('comment');
    table.string('payType');
    table.string('price');
    table.string('server');
    table.bigInteger('time');
    table.bigInteger('flow');
    table.integer('limit');
    table.integer('multiServerFlow').defaultTo(0);
    table.integer('autoRemove').defaultTo(0);
    table.integer('active').defaultTo(1);
  }).then(success => {
    const defaultAccount = [{
      name: '月付',
      time: 30 * 24 * 60 * 60 * 1000,
      flow: 10 * 1000 * 1000 * 1000,
      limit: 1
    }, {
      name: '周付',
      time: 7 * 24 * 60 * 60 * 1000,
      flow: 1 * 1000 * 1000 * 1000,
      limit: 1
    }];
    return knex('account_type').insert(defaultAccount);
  });
};

exports.createTable = createTable;
