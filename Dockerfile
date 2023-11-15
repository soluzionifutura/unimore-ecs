FROM node:20-alpine3.17

WORKDIR /home/app

COPY . .

CMD node index.js
