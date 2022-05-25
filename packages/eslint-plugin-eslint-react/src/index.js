/* eslint-disable global-require */

const rules = {
  'id-filename-mismatch': require('./rules/id-filename-mismatch'),
  'id-property-mismatch': require('./rules/id-property-mismatch')
};

const configs = {
  all: {
    plugins: ['@interactive-solutions/eslint-plugin-eslint-react'],
    rules: {
      '@interactive-solutions/eslint-react/id-filename-mismatch': 'error',
      '@interactive-solutions/eslint-react/id-property-mismatch': 'error'
    }
  }
};

module.exports = { configs, rules };
