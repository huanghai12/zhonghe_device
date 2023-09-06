// import mysql from 'mysql2';
const database1 = {
  type: 'mysql',
  host: '139.159.235.27',
  port: 3306,
  username: 'shansu',
  password: 'Shansu6@6',
  database: 'YAMR_CNNC',
  entities: [],
  synchronize: true,
  connectTimeout: 60000,
  retryAttempts: 20,
  retryDelay: 2,
  autoLoadEntities: true,
};
const database = JSON.stringify(database1);
export default database;
