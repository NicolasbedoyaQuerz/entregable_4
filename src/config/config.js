
module.exports = {
  "development": {
    "username": "postgres",
    "password": "1234",
    "database": "entregable_4",
    "port": 5432,
    "host": "localhost",
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "dialectOptions": {}
  }
}
