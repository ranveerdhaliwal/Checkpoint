FROM node:latest

WORKDIR /app/

COPY package.json .

RUN apt-get update
RUN apt-get -y install yarn

RUN yarn install

CMD yarn start
