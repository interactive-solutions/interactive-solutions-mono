# `@interactive-solutions/eslint-react`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm version](https://img.shields.io/npm/v/@interactive-solutions/eslint-config-eslint-react.svg)](https://www.npmjs.com/package/@interactive-solutions/eslint-config-eslint-react)
[![npm license](https://img.shields.io/npm/l/@interactive-solutions/eslint-config-eslint-react)](https://www.npmjs.com/package/@interactive-solutions/eslint-config-eslint-react)

Extendable [ESLint](https://eslint.org/) configuration.

## Installation

```shell
yarn add @interactive-solutions/eslint-config-eslint-react \
  @interactive-solutions/prettier@^1.0.0 \
  @calm/eslint-plugin-react-intl@^1.4.1 \
  @typescript-eslint/eslint-plugin@^4.0.0 \
  @typescript-eslint/parser@^4.0.0 \
  babel-eslint@^10.0.0 \
  eslint@^7.5.0 \
  eslint-config-airbnb@^18.1.0 \
  eslint-config-prettier@^8.3.0 \
  eslint-config-react-app@^6.0.0 \
  eslint-plugin-babel@^5.3.0 \
  eslint-plugin-cypress@^2.11.1 \
  eslint-plugin-flowtype@^5.2.0 \
  eslint-plugin-import@^2.22.0 \
  eslint-plugin-jsx-a11y@^6.3.1 \
  eslint-plugin-prettier@^3.4.0 \
  eslint-plugin-react@^7.21.5 \
  eslint-plugin-react-hooks@^4.2.0 \
  typescript@^4.1.5 -D
```

### With Create React App

```shell
yarn add @interactive-solutions/eslint-config-eslint-react \
  @interactive-solutions/prettier@^1.0.0 \
  @calm/eslint-plugin-react-intl@^1.4.1 \
  eslint-config-airbnb@^18.1.0 \
  eslint-config-prettier@^8.3.0 \
  eslint-plugin-babel@^5.3.0 \
  eslint-plugin-cypress@^2.11.1 \
  eslint-plugin-prettier@^3.4.0 \
  typescript@^4.1.5 -D
```

## Usage

Extend `@interactive-solutions/eslint-react` in the ESLint configuration. Also make sure to setup and install [@interactive-solutions/prettier](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/prettier) and its peer dependencies.

```javascript
module.exports = {
  extends: ['@interactive-solutions/eslint-react']
};
```
