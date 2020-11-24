FROM node:13.12.0-alpine

# set working directory
RUN mkdir app
WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install --silent
RUN npm install react-scripts@4.0.0 -g --silent

# add app
COPY . /app

EXPOSE 3000