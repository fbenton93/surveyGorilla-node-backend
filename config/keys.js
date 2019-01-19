// LOGIC TO RETURN CORRECT KEYS FOR EITHER PROD OR DEV
if(process.env.NODE_ENV === 'production') {
  // exports prod keys
  module.exports = require('./prod');
} else {
  // exports dev keys
  module.exports = require('./dev');
}
