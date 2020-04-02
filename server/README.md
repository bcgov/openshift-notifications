# Portable Backend Boilerplate - GraphQL

This codebase is a boilerplate for creating GraphQL applications. It is intended to be used as a module for 
my [Launch pads](https://github.com/launch-pads). However, that being said, it can still be used completely on its own.

In order for a portable boilerplate to work with a Launch pad, it must abide by the following guidelines:
> <https://github.com/portable-boilerplates/guidelines>

This boilerplate contains the following development tooling:

- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)

#### Requirements (If not using Docker):

- [Node](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

1. Rename [.env-example](.env-example) file to `.env` and paste your desired env variable(s) there.

2. Run the app via either of the options below. After that, visit your app at `http://localhost:5000`.

##### Without Docker
```
npm install
npm run start
```
 
##### With Docker
```
docker-compose --file=docker-compose.development.yml up -d           
```

## Commands

| Command               | Description                                                                  |
|-----------------------|------------------------------------------------------------------------------|
| npm run build         | Builds the application                                                       |
| npm run start         | Runs the application locally with hot reloading on port 5000                 |
| npm run serve         | Runs the built application on port 5000.                                     |
| npm run seed-db       | Seeds the dev database with dummy data                                       |
| npm run wipe-db       | Purges all dev database tables                                               |
| npm run test          | Runs all jest tests                                                          |
| npm run test:update   | Updates jest snapshot files                                                  |
| npm run test:coverage | Runs all jest tests and displays a coverage report in the console            |
| npm run lint          | Identifies linting warnings/errors                                           |
| npm run lint:fix      | Fixes linting errors                                                         |

## License

Code released under the [Apache License, Version 2.0](LICENSE).
