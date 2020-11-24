[![Build Status](https://travis-ci.com/BernardoMG/cookbook.svg?token=zJz33RY7FtoBwrYp4yBw&branch=master)](https://travis-ci.com/BernardoMG/cookbook)

# CookBook App 🍲

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
I choose to use Sinatra because its a very lightweight framework. Ideal for these simple functional requirements. 
If they were a little more complex, I'd choose Ruby on Rails 6 in API mode because I've much more experience with it.

For testing purposes, I've installed Rspec which is the most popular testing framework for Ruby and I use it on a daily basis. 

##### Note: Since your gist doesn't provide public URLs for recipe images, I tried to use several gems to fetch images using Goggle API but it seems that its deprecated so I didn't found any working gem. That why these images are static on the client-side.

### Frontend
I choose React to develop the client-side. Although I've already a couple of months of experience, it was the first time that I took benefit from the Hooks. It's cool! 🤘🏼. I used Material UI just to easily add some nice UI modules and for testing I've installed several tools such as Enzime and testing-library/react. 

Usually, I also set Codacy to perform static code analysis, detect code style errors and calculate test coverage for both backend and frontend code.
