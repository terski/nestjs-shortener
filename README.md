# Nest Shortener

A simple URL shortener created with the [Nest](https://github.com/nestjs/nest) framework and the [Prisma](https://www.prisma.io/) ORM. Suitable as a web service quickstart.

## Installation

```bash
$ yarn install

# Push the Prisma schema state to the database
$ cp sample.env .env
$ yarn prisma db push
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Unlicensed.
