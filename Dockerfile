FROM node:latest

WORKDIR /app

COPY package.json /app
COPY .env /app/.env
RUN npm install
COPY . /app

CMD npm test