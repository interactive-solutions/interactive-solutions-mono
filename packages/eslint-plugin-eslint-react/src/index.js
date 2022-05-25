/* eslint-disable global-require */
const allRules = {
  'interactive-solutions/id-filename-mismatch': require('./rules/id-filename-mismatch'),
  'interactive-solutions/id-property-mismatch': require('./rules/id-property-mismatch')
};

module.exports = {
  rules: allRules,
  configs: {
    all: {
      rules: {
        'interactive-solutions/id-filename-mismatch': 'error',
        'interactive-solutions/id-property-mismatch': 'error'
      }
    }
  }
};
