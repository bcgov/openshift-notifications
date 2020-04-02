import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

/**
 * NOTE: It is expected an environment variable will be supplied if connecting
 * to a real prod database. The `production` NODE_ENV is used for testing a local
 * build of the application and does not connect to the real prod database, hence
 * the plain username and password.
 */
const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL : {
  'development': 'postgres://admin:password@localhost:5432/dev_db',
  'production': 'postgres://admin:password@localhost:5432/prod_db',
  'test': 'postgres://admin:password@localhost:5432/test_db',
}[process.env.NODE_ENV];

const sequelize = new Sequelize(connectionString);
const MODELS_PATH = path.join(__dirname, '/models');

fs
  .readdirSync(MODELS_PATH)
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach((file) => sequelize.import(path.join(MODELS_PATH, file)));

const { models } = sequelize;
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default sequelize;
