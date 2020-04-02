import database from '../../database';

export default ({ req, res }) =>  ({
  models: database.models,
});
