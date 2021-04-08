# README


## System Requirements

- Ruby 3.0.0
- Rails 6.1.3
- [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
- Uses React 17.0.2


## Dependencies

### Ruby

    bundle install

### Javascript

    yarn install

## Database Management

To setup database you'll need to run:

    bin/rails db:create
    bin/rails db:migrate


## Tests

You can run the tests suite with the following command:

    bin/rails test
    yarn/test
  
## Linting

You can lint the code running Rubocop for ruby and Eslint for JS:

    rubocop
    yarn lint:fix

## Running the application

You'll need to start the rails server `bin/rails s` and the webpack server `bin/webpack-dev-server`
