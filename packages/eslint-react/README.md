# `@interactive-solutions/eslint-react`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm version](https://img.shields.io/npm/v/@interactive-solutions/eslint-config-eslint-react.svg)](https://www.npmjs.com/package/@interactive-solutions/eslint-config-eslint-react)
[![npm license](https://img.shields.io/npm/l/@interactive-solutions/eslint-config-eslint-react)](https://www.npmjs.com/package/@interactive-solutions/eslint-config-eslint-react)

Extendable [ESLint](https://eslint.org/) configuration.

## Installation

```shell
yarn add @interactive-solutions/eslint-config-eslint-react \
  @interactive-solutions/prettier@^2.0.0 \
  @calm/eslint-plugin-react-intl@^1.4.1 \
  eslint@^8.0.0 \
  eslint-config-airbnb@^19.0.4 \
  eslint-config-prettier@^8.3.0 \
  eslint-config-react-app@^7.0.0 \
  eslint-plugin-cypress@^2.11.3 \
  eslint-plugin-prettier@^4.0.0 \
  typescript@^4.4.2 -D
```

### With Create React App

Exclude `eslint` and `eslint-config-react-app` from the shell above.

## Usage

Extend `@interactive-solutions/eslint-react` in the ESLint configuration. Also make sure to setup and install [@interactive-solutions/prettier](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/prettier) and its peer dependencies.

```javascript
module.exports = {
  extends: ['@interactive-solutions/eslint-react']
};
```
