const knex = appRequire('init/knex').knex;

const getSystemAccount = () => {
  return knex('account_type').select();
};

const getOneSystemAccount = id => {
  return knex('account_type').where({ id });
};

exports.getSystemAccount = getSystemAccount;
exports.getOneSystemAccount = getOneSystemAccount;