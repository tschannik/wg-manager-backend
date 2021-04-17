# NestJS DDD/MySQL Boilerplate

## Requirements

- Node 12.18.3+
- yarn
- MySQL 5.7 database
- Some kind of bash console (WSL or Git Bash on Windows)

## Quickstart

Create a file `development.env` in the project root containing the env variables (see `example.env`). Then run the following commands:

```sh
# Install dependencies
yarn

# Setup the database (requires bash)
# This will drop your database, run the migrations and run your seeds
# If you just want to migrate run yarn migration:run
yarn database:setup

# Start the app
yarn start:debug
```

## Generating a new migration

First run the following commands:

```sh
# Make sure your database is up to date
yarn migration:run

# Generate a new migration
yarn migration:generate
```

Then enter the `src/migrations` directory and disable ts-lint in the new migration file (`tslint:disable` on the first line).

Apply the migration by running `yarn migration:run`.

## Folder Structure

- `src`
  - `api`: Contains all controllers
  - `common`: Contains common modules, such as configurations and loggers
  - `domain`: Contains all models, DAOs and DTOs
  - `infrastructure`: Contains all external connections and services
  - `migrations`: Contains all migration files
