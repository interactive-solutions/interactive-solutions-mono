# `@interactive-solutions`

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Packages

- [@interactive-solutions/eslint-react](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/eslint-react)
- [@interactive-solutions/prettier](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/prettier)
- [@interactive-solutions/stylelint](https://github.com/interactive-solutions/interactive-solutions-mono/tree/master/packages/stylelint)

## Usage

Recommended node version is defined in `.nvmrc`.

**Publish** - `yarn lerna:publish`  
[Publish](https://github.com/lerna/lerna/tree/main/commands/publish) packages in the current project.

**Build packages** - `yarn lerna:run:build`  
Build all packages.

**Prettier report** - `yarn prettier:report`  
Report any [Prettier](https://prettier.io/) issues.

**Prettier fix** - `yarn prettier:fix`  
Fix any [Prettier](https://prettier.io/) issues.

**ESLint report** - `yarn eslint:report`  
Report any [ESLint](https://eslint.org/) issues.

**ESLint fix** - `yarn eslint:fix`  
Fix any [ESLint](https://eslint.org/) issues.

## Lerna

Using [Lerna](https://github.com/lerna/lerna) to manage scoped packages. Lerna is a tool for managing JavaScript projects with multiple packages.
