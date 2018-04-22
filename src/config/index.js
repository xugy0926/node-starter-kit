const ENV = process.env.NODE_ENV || 'development';
const config = require(`./${ENV}.env`);
module.exports = config;
