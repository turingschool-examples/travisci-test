# TravisCI Test Repository

A repository to use during a TravisCI lesson. The repository includes setup for a postgreSQL database, a server, and server-side test.

## Setup

1. Run `npm install`.
1. Create postgreSQL databases named `travis` and `travis_test`.
1. Run the database migrations for both development and testing environments: `knex migrate:latest` and `knex migrate:latest --env=test` respectively.
1. Start the server with `node server.js`, and check the API endpoint `localhost:3000/api/v1/penguins` to see that you are getting an array of penguins.
1. Run the test suite using the command `npm test` to make sure the tests are passing locally.

## Finished Code

The completed `.travis.yml` file is in [this lesson](http://frontend.turing.io/lessons/module-4/continuous-integration-walkthrough.html).
