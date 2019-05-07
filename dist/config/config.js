"use strict";

require('dotenv').config();

var config = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_CONNECTION,
    "port": process.env.DB_PORT,
    "dialectOptions": { socketPath: process.env.DB_SOCKET_PATH }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_CONNECTION,
    "port": process.env.DB_PORT,
    "dialectOptions": { socketPath: process.env.DB_SOCKET_PATH }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_CONNECTION,
    "port": process.env.DB_PORT,
    "dialectOptions": { socketPath: process.env.DB_SOCKET_PATH },
    "logging": false
  }
};

module.exports = config;