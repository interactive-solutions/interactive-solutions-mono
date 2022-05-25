/* eslint-disable global-require */
module.exports = {
  rules: {
    'id-filename-mismatch': require('./rules/id-filename-mismatch'),
    'id-property-mismatch': require('./rules/id-property-mismatch')
  }
};
