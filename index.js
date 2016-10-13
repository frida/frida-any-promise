require('any-promise/register')('frida', {
  Promise: Promise
});

module.exports = require('any-promise/');
