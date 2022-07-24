require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_DEV_USERNAME || "postgres",
    "password": process.env.DB_DEV_PASSWORD || "Munafuck98",
    "database": process.env.DB_DEV_NAME || "teamone_chap9",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "Munafuck98",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Munafcuk98",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
