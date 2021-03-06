# `@interactive-solutions/stylelint`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm version](https://img.shields.io/npm/v/@interactive-solutions/stylelint.svg)](https://www.npmjs.com/package/@interactive-solutions/stylelint)
[![npm license](https://img.shields.io/npm/l/@interactive-solutions/stylelint)](https://www.npmjs.com/package/@interactive-solutions/stylelint)

Extendable [Stylelint](https://stylelint.io/) configuration.

## Installation

```shell
yarn add @interactive-solutions/stylelint \
  @interactive-solutions/prettier@^2.0.0 \
  stylelint@^14.2.0 \
  stylelint-config-prettier@^9.0.3 \
  stylelint-config-sass-guidelines@^9.0.1 \
  stylelint-prettier@^2.0.0 -D
```

## Usage

Extend `@interactive-solutions/stylelint` in the Stylelint configuration. Also make sure to setup and install [@interactive-solutions/prettier](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/prettier) and its peer dependencies.

```javascript
module.exports = {
  extends: '@interactive-solutions/stylelint'
};
```
