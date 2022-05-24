/* eslint-disable global-require */
const rules = {
  'id-filename-mismatch': require('./rules/id-filename-mismatch'),
  'id-property-mismatch': require('./rules/id-property-mismatch')
};

const configs = {
  all: {
    rules: {
      'interactive-solutions/id-filename-mismatch': 'error',
      'interactive-solutions/id-property-mismatch': 'error'
    }
  }
};

module.exports = { configs, rules };
