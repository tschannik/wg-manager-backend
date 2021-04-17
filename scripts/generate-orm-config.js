/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require('dotenv');
const fs = require('fs');
const rimraf = require('rimraf');

dotenv.config({
  path: `${process.env.NODE_ENV || 'development'}.env`,
});

if (process.env.VCAP_SERVICES !== undefined) {
  const services = JSON.parse(process.env.VCAP_SERVICES);
  process.env.DATABASE_TYPE = 'mysql';
  process.env.DATABASE_NAME = services['mysql-database'][0].credentials.database;
  process.env.DATABASE_USER = services['mysql-database'][0].credentials.username;
  process.env.DATABASE_PASSWORD = services['mysql-database'][0].credentials.password;
  process.env.DATABASE_HOST = services['mysql-database'][0].credentials.host;
  process.env.DATABASE_PORT = services['mysql-database'][0].credentials.port;
}

rimraf('ormconfig.json', (error) => {
  const ormConfig = {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['src/domain/models/*.entity.{ts,js}'],
    migrations: ['src/migrations/**/*.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };

  fs.writeFileSync('ormconfig.json', JSON.stringify(ormConfig));
});
