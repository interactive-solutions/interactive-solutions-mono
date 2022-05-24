# `@interactive-solutions/eslint-react`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm version](https://img.shields.io/npm/v/@interactive-solutions/eslint-plugin-eslint-react.svg)](https://www.npmjs.com/package/@interactive-solutions/eslint-plugin-eslint-react)
[![npm license](https://img.shields.io/npm/l/@interactive-solutions/eslint-plugin-eslint-react)](https://www.npmjs.com/package/@interactive-solutions/eslint-plugin-eslint-react)

Extendable [ESLint](https://eslint.org/) plugin.

## Installation

```shell
yarn add @interactive-solutions/eslint-plugin-eslint-react eslint@^8.0.0 -D
```

### With Create React App

Exclude `eslint` from the shell above.

## Usage

Extend `plugin:interactive-solutions/all` in the ESLint configuration.

```javascript
module.exports = {
  extends: ['plugin:interactive-solutions/all']
};
```
