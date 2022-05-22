# Gladia.io technical test

This project is my answer to the technical test of [gladia.io](https://gladia.io/)

[here are the instructions](https://gladia.notion.site/senior-fullstack-developer-5bdb09c5ed474c008608bbee0175533f)

The subject is huge and I didn't had time to fullfill it. 

It is composed of 2 projects:
* API
* UI (didn't had time 🙁)

The code is based on [ExpressJS](https://expressjs.com/)

## Prerequisites
* NodeJS + npm -> [install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Run
> npm start

## Tests
GET localhost:3000 -> should return "Healthy"

GET localhost:3000/api/text/autocorrect?apiKey=b3305994-1102-4665-a36f-ff03403bc056 -> should return a list of mocked data

GET localhost:3000/api/text/autocorrect -> should return an error 400

GET localhost:3000/api/text/autocorrect?apiKey=toto -> should return an error 401

## Hexagonal Architecture
![API architecture diagram](./apiArchitecture.png)

## Sources (not ordered)
https://blog.logrocket.com/build-rest-api-typescript-using-native-modules/

https://blog.logrocket.com/express-middleware-a-complete-guide/

https://amirmustafaofficial.medium.com/node-js-and-express-js-with-typescript-d4ea7e61096

https://medium.com/geekculture/how-to-build-a-rest-api-with-express-js-and-typescript-part-ii-organising-routes-ee293eeb16eb

https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/