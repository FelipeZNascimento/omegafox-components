# Omegafox Components

Hosted at components.omegafox.me

## Storybook design system tutorial

The Storybook design system tutorial is a subset of the full [Storybook design system](https://github.com/storybookjs/design-system/), created as a learning resource for those interested in learning how to write and publish a design system using best in practice techniques.

Learn more in [Storybook tutorials](https://storybook.js.org/tutorials/).

## Commit Tags

I'm using `semantic-release` to perform releases and changelog. It's using `eslint` as a parser ([more info here](https://github.com/conventional-changelog-archived-repos/conventional-changelog-eslint/blob/master/convention.md))
These are the release tags and what they do (capital letters are important):

    tag: 'Breaking', release: 'major' (X.0.0)
    tag: 'Update', release: 'minor' (0.X.0)
    tag: 'New', release: 'minor' (0.X.0)
    tag: 'Fix', release: 'patch' (0.0.X)

## Commands

- `build`: creates the production build version using rollup
- `start`: starts storybook library
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Boilerplate

This project used [this boilerplate](https://github.com/React-Avancado/boilerplate) as a starting point.
