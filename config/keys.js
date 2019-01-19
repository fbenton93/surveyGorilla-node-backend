// LOGIC TO RETURN CORRECT KEYS FOR EITHER PROD OR DEV
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
