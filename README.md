[![Build Status](https://travis-ci.com/BernardoMG/cookbook.svg?token=zJz33RY7FtoBwrYp4yBw&branch=master)](https://travis-ci.com/BernardoMG/cookbook)

# CookBook App

## How to build and run the app

1. Run `docker-compose build backend frontend`
2. Run `docker-compose up backend frontend`
3. Access `localhost:3000`

## How to run application tests

1. Run `docker-compose run test-backend`. (only backend tests.)
2. Run `docker-compose run test-frontend`. (only frontend tests.)

##### Note: I've also setup Travis CI for this repository. You can check its badge on top of this page ✅🚀.

## Tech Decisions
### Backend
I choose to use Sinatra because its very lightweight the backend in terms of functional requirements is pretty simple 

### Frontend
